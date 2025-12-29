const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    adminId: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Super Admin', 'Region Admin'], required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
});

module.exports = mongoose.model('Admin', adminSchema);
