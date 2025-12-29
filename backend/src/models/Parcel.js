const mongoose = require('mongoose');

const trackingHistorySchema = new mongoose.Schema({
    status: { type: String, enum: ['Picked Up', 'Sorting', 'Out for Delivery', 'Delivered'], required: true },
    timestamp: { type: Date, required: true },
    location: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
    },
});

const parcelSchema = new mongoose.Schema({
    parcelId: { type: String, unique: true, required: true },
    senderId: { type: mongoose.Schema.Types.String, ref: 'User', required: true },
    receiverId: { type: mongoose.Schema.Types.String, ref: 'User', required: true },
    beneficiaryId: { type: mongoose.Schema.Types.String, ref: 'User' },
    pickupAddress: { type: String, required: true },
    deliveryAddress: { type: String, required: true },
    status: { type: String, enum: ['Created', 'Picked Up', 'Out for Delivery', 'Delivered', 'Failed'], required: true },
    timeSlot: {
        startTime: { type: Date, required: true },
        endTime: { type: Date, required: true },
    },
    trackingHistory: [trackingHistorySchema],
    otp: { type: Number, required: true },
    feedback: {
        rating: { type: Number, min: 1, max: 5 },
        comments: { type: String },
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
});

module.exports = mongoose.model('Parcel', parcelSchema);
