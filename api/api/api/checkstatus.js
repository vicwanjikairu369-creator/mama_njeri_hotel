// api/checkStatus.js - Check transaction status (polling)[reference:9]

const admin = require('firebase-admin');

if (!admin.apps.length) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}
const db = admin.firestore();

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { checkoutRequestID } = req.query;
        
        if (!checkoutRequestID) {
            return res.status(400).json({ error: 'checkoutRequestID required' });
        }

        const transactionsRef = db.collection('mpesa_transactions');
        const querySnapshot = await transactionsRef
            .where('checkoutRequestID', '==', checkoutRequestID)
            .get();

        if (querySnapshot.empty) {
            return res.status(404).json({ 
                status: 'NOT_FOUND',
                message: 'Transaction not found'
            });
        }

        const doc = querySnapshot.docs[0];
        const data = doc.data();

        return res.status(200).json({
            checkoutRequestID: data.checkoutRequestID,
            status: data.status || 'PENDING',
            resultCode: data.resultCode,
            resultDesc: data.resultDesc,
            mpesaReceiptNumber: data.mpesaReceiptNumber,
            amount: data.amount,
            createdAt: data.createdAt?.toDate?.() || null
        });

    } catch (error) {
        console.error('Status check error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};