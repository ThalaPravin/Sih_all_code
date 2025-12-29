const parcelService = require('../services/parcel.service');
const { z } = require('zod');

// Validation schemas using Zod
const createParcelSchema = z.object({
    parcelId: z.string(),
    senderId: z.string(),
    receiverId: z.string(),
    beneficiaryId: z.string().optional(),
    pickupAddress: z.string(),
    deliveryAddress: z.string(),
    status: z.enum(['Created', 'Picked Up', 'Out for Delivery', 'Delivered', 'Failed']),
    timeSlot: z.object({
        startTime: z.date(),
        endTime: z.date(),
    }),
    otp: z.number(),
    feedback: z.object({
        rating: z.number().min(1).max(5).optional(),
        comments: z.string().optional(),
    }).optional(),
});

const updateStatusSchema = z.object({
    status: z.enum(['Picked Up', 'Sorting', 'Out for Delivery', 'Delivered']),
});

const trackingSchema = z.object({
    status: z.enum(['Picked Up', 'Sorting', 'Out for Delivery', 'Delivered']),
    timestamp: z.date(),
    location: z.object({
        latitude: z.number(),
        longitude: z.number(),
    }),
});

exports.createParcel = async (req, res) => {
    try {
        const data = createParcelSchema.parse(req.body);
        const parcel = await parcelService.createParcel(data);
        res.status(201).json(parcel);
    } catch (error) {
        res.status(400).json({ message: error.errors || error.message });
    }
};

exports.getParcelById = async (req, res) => {
    try {
        const parcel = await parcelService.getParcelById(req.params.parcelId);
        res.status(200).json(parcel);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.updateParcel = async (req, res) => {
    try {
        const updatedParcel = await parcelService.updateParcel(req.params.parcelId, req.body);
        res.status(200).json(updatedParcel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteParcel = async (req, res) => {
    try {
        await parcelService.deleteParcel(req.params.parcelId);
        res.status(200).json({ message: 'Parcel deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.addTrackingHistory = async (req, res) => {
    try {
        const trackingData = trackingSchema.parse(req.body);
        const updatedParcel = await parcelService.addTrackingHistory(req.params.parcelId, trackingData);
        res.status(200).json(updatedParcel);
    } catch (error) {
        res.status(400).json({ message: error.errors || error.message });
    }
};

exports.updateParcelStatus = async (req, res) => {
    try {
        const data = updateStatusSchema.parse(req.body);
        const updatedParcel = await parcelService.updateParcelStatus(req.params.parcelId, data.status);
        res.status(200).json(updatedParcel);
    } catch (error) {
        res.status(400).json({ message: error.errors || error.message });
    }
};

exports.addFeedback = async (req, res) => {
    try {
        const { rating, comments } = req.body;
        const updatedParcel = await parcelService.addFeedback(req.params.parcelId, { rating, comments });
        res.status(200).json(updatedParcel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
