const express = require('express');
const parcelController = require('../controllers/parcel.controller');

const router = express.Router();

// Parcel routes
router.post('/create', parcelController.createParcel);
router.get('/:parcelId', parcelController.getParcelById);
router.put('/:parcelId', parcelController.updateParcel);
router.delete('/:parcelId', parcelController.deleteParcel);

// Tracking updates
router.post('/:parcelId/tracking', parcelController.addTrackingHistory);
router.put('/:parcelId/status', parcelController.updateParcelStatus);
router.put('/:parcelId/feedback', parcelController.addFeedback);

module.exports = router;
