// backend/models/User.js
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    contactNo: {
        type: Number,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        minlength: 5
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model('User', MessageSchema);

module.exports = Message;
