// api/initiatePayment.js - M-Pesa STK Push Integration
// Based on Daraja API implementation[reference:0][reference:1]

const axios = require('axios');
const admin = require('firebase-admin');

// Initialize Firebase Admin if not already
if (!admin.apps.length) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}
const db = admin.firestore();

/**
 * Get OAuth access token from Daraja API
 * Token valid for 1 hour[reference:2]
 */
async function getAccessToken() {
    const auth = Buffer.from(
        `${process.env.DARAJA_CONSUMER_KEY}:${process.env.DARAJA_CONSUMER_SECRET}`
    ).toString('base64');

    try {
        const response = await axios.get(
            'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
            {
                headers: {
                    Authorization: `Basic ${auth}`
                }
            }
        );
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error.response?.data || error.message);
        throw new Error('Failed to get access token');
    }
}

/**
 * Initiate STK Push payment
 * User receives prompt on phone[reference:3]
 */
async function initiateSTKPush(phoneNumber, amount, accountReference, transactionDesc) {
    const accessToken = await getAccessToken();
    
    // Format phone number (remove leading 0 or +254)
    let formattedPhone = phoneNumber.replace(/\s/g, '');
    if (formattedPhone.startsWith('0')) {
        formattedPhone = '254' + formattedPhone.substring(1);
    } else if (formattedPhone.startsWith('+')) {
        formattedPhone = formattedPhone.substring(1);
    }

    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
    const password = Buffer.from(
        `${process.env.BUSINESS_SHORTCODE}${process.env.PASSKEY}${timestamp}`
    ).toString('base64');

    const requestData = {
        BusinessShortCode: process.env.BUSINESS_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: Math.round(amount),
        PartyA: formattedPhone,
        PartyB: process.env.BUSINESS_SHORTCODE,
        PhoneNumber: formattedPhone,
        CallBackURL: process.env.CALLBACK_URL,
        AccountReference: accountReference || 'MamaNjeriOrder',
        TransactionDesc: transactionDesc || 'Food Payment'
    };

    try {
        const response = await axios.post(
            'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
            requestData,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        // Save transaction to Firebase with PENDING status[reference:4]
        await db.collection('mpesa_transactions').add({
            checkoutRequestID: response.data.CheckoutRequestID,
            merchantRequestID: response.data.MerchantRequestID,
            phoneNumber: formattedPhone,
            amount: Math.round(amount),
            status: 'PENDING',
            accountReference: accountReference || 'MamaNjeriOrder',
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            responseCode: response.data.ResponseCode,
            responseDescription: response.data.ResponseDescription
        });

        return {
            success: true,
            checkoutRequestID: response.data.CheckoutRequestID,
            merchantRequestID: response.data.MerchantRequestID,
            responseDescription: response.data.ResponseDescription
        };
    } catch (error) {
        console.error('STK Push error:', error.response?.data || error.message);
        return {
            success: false,
            error: error.response?.data?.errorMessage || 'Payment initiation failed'
        };
    }
}

// Vercel serverless function handler[reference:5]
module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { phoneNumber, amount, accountReference, transactionDesc } = req.body;

        if (!phoneNumber || !amount) {
            return res.status(400).json({ 
                success: false, 
                error: 'Phone number and amount are required' 
            });
        }

        if (amount < 1) {
            return res.status(400).json({ 
                success: false, 
                error: 'Amount must be at least 1 KES' 
            });
        }

        const result = await initiateSTKPush(phoneNumber, amount, accountReference, transactionDesc);
        
        if (result.success) {
            return res.status(200).json(result);
        } else {
            return res.status(400).json(result);
        }
    } catch (error) {
        console.error('Handler error:', error);
        return res.status(500).json({ 
            success: false, 
            error: 'Internal server error' 
        });
    }
};// api/initiatePayment.js - M-Pesa STK Push Integration
// Based on Daraja API implementation[reference:0][reference:1]

const axios = require('axios');
const admin = require('firebase-admin');

// Initialize Firebase Admin if not already
if (!admin.apps.length) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}
const db = admin.firestore();

/**
 * Get OAuth access token from Daraja API
 * Token valid for 1 hour[reference:2]
 */
async function getAccessToken() {
    const auth = Buffer.from(
        `${process.env.DARAJA_CONSUMER_KEY}:${process.env.DARAJA_CONSUMER_SECRET}`
    ).toString('base64');

    try {
        const response = await axios.get(
            'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
            {
                headers: {
                    Authorization: `Basic ${auth}`
                }
            }
        );
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error.response?.data || error.message);
        throw new Error('Failed to get access token');
    }
}

/**
 * Initiate STK Push payment
 * User receives prompt on phone[reference:3]
 */
async function initiateSTKPush(phoneNumber, amount, accountReference, transactionDesc) {
    const accessToken = await getAccessToken();
    
    // Format phone number (remove leading 0 or +254)
    let formattedPhone = phoneNumber.replace(/\s/g, '');
    if (formattedPhone.startsWith('0')) {
        formattedPhone = '254' + formattedPhone.substring(1);
    } else if (formattedPhone.startsWith('+')) {
        formattedPhone = formattedPhone.substring(1);
    }

    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
    const password = Buffer.from(
        `${process.env.BUSINESS_SHORTCODE}${process.env.PASSKEY}${timestamp}`
    ).toString('base64');

    const requestData = {
        BusinessShortCode: process.env.BUSINESS_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: Math.round(amount),
        PartyA: formattedPhone,
        PartyB: process.env.BUSINESS_SHORTCODE,
        PhoneNumber: formattedPhone,
        CallBackURL: process.env.CALLBACK_URL,
        AccountReference: accountReference || 'MamaNjeriOrder',
        TransactionDesc: transactionDesc || 'Food Payment'
    };

    try {
        const response = await axios.post(
            'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
            requestData,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        // Save transaction to Firebase with PENDING status[reference:4]
        await db.collection('mpesa_transactions').add({
            checkoutRequestID: response.data.CheckoutRequestID,
            merchantRequestID: response.data.MerchantRequestID,
            phoneNumber: formattedPhone,
            amount: Math.round(amount),
            status: 'PENDING',
            accountReference: accountReference || 'MamaNjeriOrder',
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            responseCode: response.data.ResponseCode,
            responseDescription: response.data.ResponseDescription
        });

        return {
            success: true,
            checkoutRequestID: response.data.CheckoutRequestID,
            merchantRequestID: response.data.MerchantRequestID,
            responseDescription: response.data.ResponseDescription
        };
    } catch (error) {
        console.error('STK Push error:', error.response?.data || error.message);
        return {
            success: false,
            error: error.response?.data?.errorMessage || 'Payment initiation failed'
        };
    }
}

// Vercel serverless function handler[reference:5]
module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { phoneNumber, amount, accountReference, transactionDesc } = req.body;

        if (!phoneNumber || !amount) {
            return res.status(400).json({ 
                success: false, 
                error: 'Phone number and amount are required' 
            });
        }

        if (amount < 1) {
            return res.status(400).json({ 
                success: false, 
                error: 'Amount must be at least 1 KES' 
            });
        }

        const result = await initiateSTKPush(phoneNumber, amount, accountReference, transactionDesc);
        
        if (result.success) {
            return res.status(200).json(result);
        } else {
            return res.status(400).json(result);
        }
    } catch (error) {
        console.error('Handler error:', error);
        return res.status(500).json({ 
            success: false, 
            error: 'Internal server error' 
        });
    }
};