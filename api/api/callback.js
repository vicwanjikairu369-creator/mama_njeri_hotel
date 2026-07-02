// api/callback.js - Handle M-Pesa payment callback[reference:6][reference:7]

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
 * Handle M-Pesa callback from Safaricom
 * Updates transaction status and triggers order updates[reference:8]
 */
module.exports = async (req, res) => {
    // Immediately acknowledge receipt
    res.status(200).json({ ResultCode: 0, ResultDesc: 'Success' });

    try {
        const callbackData = req.body;
        console.log('Callback received:', JSON.stringify(callbackData, null, 2));

        const stkCallback = callbackData?.Body?.stkCallback;
        if (!stkCallback) {
            console.error('Invalid callback structure');
            return;
        }

        const { 
            MerchantRequestID, 
            CheckoutRequestID, 
            ResultCode, 
            ResultDesc,
            CallbackMetadata
        } = stkCallback;

        // Find transaction in Firestore
        const transactionsRef = db.collection('mpesa_transactions');
        const querySnapshot = await transactionsRef
            .where('checkoutRequestID', '==', CheckoutRequestID)
            .get();

        if (querySnapshot.empty) {
            console.error(`Transaction not found: ${CheckoutRequestID}`);
            return;
        }

        const transactionDoc = querySnapshot.docs[0];
        const transactionData = transactionDoc.data();

        // Update transaction status
        const updateData = {
            resultCode: ResultCode,
            resultDesc: ResultDesc,
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        };

        if (ResultCode === 0) {
            // Success - extract payment details
            const metadata = CallbackMetadata?.Item || [];
            let mpesaReceiptNumber = '';
            let amount = 0;
            let transactionDate = '';

            metadata.forEach(item => {
                if (item.Name === 'MpesaReceiptNumber') {
                    mpesaReceiptNumber = item.Value;
                } else if (item.Name === 'Amount') {
                    amount = item.Value;
                } else if (item.Name === 'TransactionDate') {
                    transactionDate = item.Value;
                }
            });

            updateData.status = 'SUCCESS';
            updateData.mpesaReceiptNumber = mpesaReceiptNumber;
            updateData.amount = amount;
            updateData.transactionDate = transactionDate;

            // Update the associated order
            if (transactionData.accountReference) {
                const orderSnapshot = await db.collection('orders')
                    .where('orderId', '==', transactionData.accountReference)
                    .get();

                if (!orderSnapshot.empty) {
                    const orderDoc = orderSnapshot.docs[0];
                    await orderDoc.ref.update({
                        paid: true,
                        paymentStatus: 'completed',
                        mpesaReceiptNumber: mpesaReceiptNumber,
                        paymentAmount: amount,
                        paymentDate: admin.firestore.FieldValue.serverTimestamp()
                    });

                    // Send SMS notification for successful payment
                    await sendPaymentConfirmationSMS(
                        transactionData.phoneNumber,
                        amount,
                        mpesaReceiptNumber,
                        transactionData.accountReference
                    );
                }
            }
        } else {
            // Failed or cancelled
            updateData.status = 'FAILED';
            
            // Update order payment status
            if (transactionData.accountReference) {
                const orderSnapshot = await db.collection('orders')
                    .where('orderId', '==', transactionData.accountReference)
                    .get();

                if (!orderSnapshot.empty) {
                    const orderDoc = orderSnapshot.docs[0];
                    await orderDoc.ref.update({
                        paymentStatus: 'failed',
                        paymentError: ResultDesc
                    });
                }
            }
        }

        await transactionDoc.ref.update(updateData);
        console.log(`Transaction ${CheckoutRequestID} updated: ${updateData.status}`);

    } catch (error) {
        console.error('Callback processing error:', error);
    }
};

/**
 * Send SMS confirmation for successful payment
 */
async function sendPaymentConfirmationSMS(phoneNumber, amount, receiptNumber, orderId) {
    try {
        const AfricasTalking = require('africastalking');
        
        const africasTalking = AfricasTalking({
            username: process.env.AT_USERNAME || 'sandbox',
            apiKey: process.env.AT_API_KEY
        });

        const message = `✅ Mama Njeri's Hotel: Payment of KSh ${amount} received! Receipt: ${receiptNumber}. Order: ${orderId}. Thank you for dining with us! 🍽️`;

        await africasTalking.SMS.send({
            to: [phoneNumber],
            message: message,
            from: process.env.AT_SENDER_ID || 'MAMA NJERI'
        });

        console.log(`SMS sent to ${phoneNumber}`);
    } catch (error) {
        console.error('SMS sending error:', error);
    }
}// api/callback.js - Handle M-Pesa payment callback[reference:6][reference:7]

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
 * Handle M-Pesa callback from Safaricom
 * Updates transaction status and triggers order updates[reference:8]
 */
module.exports = async (req, res) => {
    // Immediately acknowledge receipt
    res.status(200).json({ ResultCode: 0, ResultDesc: 'Success' });

    try {
        const callbackData = req.body;
        console.log('Callback received:', JSON.stringify(callbackData, null, 2));

        const stkCallback = callbackData?.Body?.stkCallback;
        if (!stkCallback) {
            console.error('Invalid callback structure');
            return;
        }

        const { 
            MerchantRequestID, 
            CheckoutRequestID, 
            ResultCode, 
            ResultDesc,
            CallbackMetadata
        } = stkCallback;

        // Find transaction in Firestore
        const transactionsRef = db.collection('mpesa_transactions');
        const querySnapshot = await transactionsRef
            .where('checkoutRequestID', '==', CheckoutRequestID)
            .get();

        if (querySnapshot.empty) {
            console.error(`Transaction not found: ${CheckoutRequestID}`);
            return;
        }

        const transactionDoc = querySnapshot.docs[0];
        const transactionData = transactionDoc.data();

        // Update transaction status
        const updateData = {
            resultCode: ResultCode,
            resultDesc: ResultDesc,
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        };

        if (ResultCode === 0) {
            // Success - extract payment details
            const metadata = CallbackMetadata?.Item || [];
            let mpesaReceiptNumber = '';
            let amount = 0;
            let transactionDate = '';

            metadata.forEach(item => {
                if (item.Name === 'MpesaReceiptNumber') {
                    mpesaReceiptNumber = item.Value;
                } else if (item.Name === 'Amount') {
                    amount = item.Value;
                } else if (item.Name === 'TransactionDate') {
                    transactionDate = item.Value;
                }
            });

            updateData.status = 'SUCCESS';
            updateData.mpesaReceiptNumber = mpesaReceiptNumber;
            updateData.amount = amount;
            updateData.transactionDate = transactionDate;

            // Update the associated order
            if (transactionData.accountReference) {
                const orderSnapshot = await db.collection('orders')
                    .where('orderId', '==', transactionData.accountReference)
                    .get();

                if (!orderSnapshot.empty) {
                    const orderDoc = orderSnapshot.docs[0];
                    await orderDoc.ref.update({
                        paid: true,
                        paymentStatus: 'completed',
                        mpesaReceiptNumber: mpesaReceiptNumber,
                        paymentAmount: amount,
                        paymentDate: admin.firestore.FieldValue.serverTimestamp()
                    });

                    // Send SMS notification for successful payment
                    await sendPaymentConfirmationSMS(
                        transactionData.phoneNumber,
                        amount,
                        mpesaReceiptNumber,
                        transactionData.accountReference
                    );
                }
            }
        } else {
            // Failed or cancelled
            updateData.status = 'FAILED';
            
            // Update order payment status
            if (transactionData.accountReference) {
                const orderSnapshot = await db.collection('orders')
                    .where('orderId', '==', transactionData.accountReference)
                    .get();

                if (!orderSnapshot.empty) {
                    const orderDoc = orderSnapshot.docs[0];
                    await orderDoc.ref.update({
                        paymentStatus: 'failed',
                        paymentError: ResultDesc
                    });
                }
            }
        }

        await transactionDoc.ref.update(updateData);
        console.log(`Transaction ${CheckoutRequestID} updated: ${updateData.status}`);

    } catch (error) {
        console.error('Callback processing error:', error);
    }
};

/**
 * Send SMS confirmation for successful payment
 */
async function sendPaymentConfirmationSMS(phoneNumber, amount, receiptNumber, orderId) {
    try {
        const AfricasTalking = require('africastalking');
        
        const africasTalking = AfricasTalking({
            username: process.env.AT_USERNAME || 'sandbox',
            apiKey: process.env.AT_API_KEY
        });

        const message = `✅ Mama Njeri's Hotel: Payment of KSh ${amount} received! Receipt: ${receiptNumber}. Order: ${orderId}. Thank you for dining with us! 🍽️`;

        await africasTalking.SMS.send({
            to: [phoneNumber],
            message: message,
            from: process.env.AT_SENDER_ID || 'MAMA NJERI'
        });

        console.log(`SMS sent to ${phoneNumber}`);
    } catch (error) {
        console.error('SMS sending error:', error);
    }
}