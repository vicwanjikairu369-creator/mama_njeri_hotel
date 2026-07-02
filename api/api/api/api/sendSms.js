// api/sendSms.js - Send SMS via Africa's Talking[reference:10][reference:11]

const AfricasTalking = require('africastalking');

// Initialize Africa's Talking
const africasTalking = AfricasTalking({
    username: process.env.AT_USERNAME || 'sandbox',
    apiKey: process.env.AT_API_KEY
});

/**
 * Send SMS notification
 * @param {string|string[]} to - Phone number(s) in international format
 * @param {string} message - SMS message
 * @param {string} from - Sender ID (optional)
 */
async function sendSMS(to, message, from = null) {
    try {
        const options = {
            to: Array.isArray(to) ? to : [to],
            message: message
        };

        if (from) {
            options.from = from;
        } else if (process.env.AT_SENDER_ID) {
            options.from = process.env.AT_SENDER_ID;
        }

        const response = await africasTalking.SMS.send(options);
        console.log('SMS sent:', response);
        return { success: true, response };
    } catch (error) {
        console.error('SMS error:', error);
        return { success: false, error: error.message };
    }
}

// Vercel serverless function handler
module.exports = async (req, res) => {
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
        const { to, message, from } = req.body;

        if (!to || !message) {
            return res.status(400).json({ 
                success: false, 
                error: 'Phone number and message are required' 
            });
        }

        const result = await sendSMS(to, message, from);
        return res.status(200).json(result);

    } catch (error) {
        console.error('SMS handler error:', error);
        return res.status(500).json({ 
            success: false, 
            error: 'Internal server error' 
        });
    }
};