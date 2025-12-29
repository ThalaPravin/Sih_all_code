const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    label: { type: String, enum: ['Home', 'Work', 'Other'] },
    location: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
    },
});

const userSchema = new mongoose.Schema({
    userId: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phone: { type: String, unique: true, required: true },
    addresses: [addressSchema],
    sentParcels: [{ type: mongoose.Schema.Types.String, ref: 'Parcel' }],
    receivedParcels: [{ type: mongoose.Schema.Types.String, ref: 'Parcel' }],
    beneficiaries: [{ type: mongoose.Schema.Types.String, ref: 'User' }],
    notifications: [{ type: mongoose.Schema.Types.String, ref: 'Notification' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
});

module.exports = mongoose.model('User', userSchema);
