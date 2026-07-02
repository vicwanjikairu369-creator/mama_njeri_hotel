// api/trackOrder.js - Real-time order tracking

const admin = require('firebase-admin');

if (!admin.apps.length) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}
const db = admin.firestore();

/**
 * Update order status with tracking info
 * Status flow: pending → preparing → ready → delivered
 */
async function updateOrderStatus(orderId, status, notes = '') {
    const validStatuses = ['pending', 'preparing', 'ready', 'delivered', 'cancelled'];
    
    if (!validStatuses.includes(status)) {
        throw new Error(`Invalid status. Must be one of: ${validStatuses.join(', ')}`);
    }

    const orderRef = db.collection('orders').doc(orderId);
    const orderDoc = await orderRef.get();

    if (!orderDoc.exists) {
        throw new Error(`Order ${orderId} not found`);
    }

    const updateData = {
        status: status,
        statusUpdatedAt: admin.firestore.FieldValue.serverTimestamp(),
        trackingHistory: admin.firestore.FieldValue.arrayUnion({
            status: status,
            notes: notes,
            timestamp: admin.firestore.FieldValue.serverTimestamp()
        })
    };

    // If status is 'delivered', add delivery timestamp
    if (status === 'delivered') {
        updateData.deliveredAt = admin.firestore.FieldValue.serverTimestamp();
    }

    await orderRef.update(updateData);

    // Send SMS notification for status change
    const orderData = orderDoc.data();
    if (orderData.customerPhone) {
        await sendOrderStatusSMS(
            orderData.customerPhone,
            orderId,
            status,
            notes
        );
    }

    return { success: true, orderId, status };
}

/**
 * Send SMS for order status updates
 */
async function sendOrderStatusSMS(phoneNumber, orderId, status, notes) {
    const statusMessages = {
        'pending': `📋 Order #${orderId} received! We're preparing your food.`,
        'preparing': `👨‍🍳 Order #${orderId} is being prepared! ${notes || 'Almost ready!'}`,
        'ready': `🍽️ Order #${orderId} is ready for pickup! ${notes || 'Come and enjoy!'}`,
        'delivered': `✅ Order #${orderId} delivered! ${notes || 'Thank you for dining with us! Rate us ⭐'}`,
        'cancelled': `❌ Order #${orderId} has been cancelled. ${notes || 'Please contact us for assistance.'}`
    };

    const message = statusMessages[status] || `Order #${orderId} status: ${status}`;
    
    try {
        const AfricasTalking = require('africastalking');
        const africasTalking = AfricasTalking({
            username: process.env.AT_USERNAME || 'sandbox',
            apiKey: process.env.AT_API_KEY
        });

        await africasTalking.SMS.send({
            to: [phoneNumber],
            message: message + ' - Mama Njeri\'s Hotel 🍽️',
            from: process.env.AT_SENDER_ID || 'MAMA NJERI'
        });
        console.log(`Status SMS sent to ${phoneNumber}`);
    } catch (error) {
        console.error('Status SMS error:', error);
    }
}

// Vercel serverless function handler
module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        // GET: Get order tracking info
        if (req.method === 'GET') {
            const { orderId } = req.query;
            
            if (!orderId) {
                return res.status(400).json({ error: 'orderId required' });
            }

            const orderRef = db.collection('orders').doc(orderId);
            const orderDoc = await orderRef.get();

            if (!orderDoc.exists) {
                return res.status(404).json({ error: 'Order not found' });
            }

            const data = orderDoc.data();
            return res.status(200).json({
                orderId: orderId,
                status: data.status || 'pending',
                statusUpdatedAt: data.statusUpdatedAt?.toDate?.() || null,
                deliveredAt: data.deliveredAt?.toDate?.() || null,
                trackingHistory: data.trackingHistory || [],
                customerName: data.customerName,
                customerPhone: data.customerPhone,
                items: data.items,
                total: data.total
            });
        }

        // POST/PUT: Update order status
        if (req.method === 'POST' || req.method === 'PUT') {
            const { orderId, status, notes } = req.body;

            if (!orderId || !status) {
                return res.status(400).json({ 
                    error: 'orderId and status are required' 
                });
            }

            const result = await updateOrderStatus(orderId, status, notes || '');
            return res.status(200).json(result);
        }

        return res.status(405).json({ error: 'Method not allowed' });

    } catch (error) {
        console.error('Track order error:', error);
        return res.status(500).json({ 
            error: error.message || 'Internal server error' 
        });
    }
};