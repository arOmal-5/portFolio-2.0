const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// @route   POST /api/messages
// @desc    Create a new message
// @access  Public
router.post('/', async (req, res) => {
    const { name, contactNo, message } = req.body;

    try {
        // Create a new message
        const newMessage = new Message({
            name,
            contactNo,
            message
        });

        await newMessage.save();

        res.status(201).json({ msg: 'Message sent successfully' ,data:newMessage});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   GET /api/messages
// @desc    Get all messages
// @access  Public
router.get('/', async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
