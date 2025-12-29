const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

// User routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

// Address management
router.post('/:userId/addresses', userController.addAddress);
router.delete('/:userId/addresses/:addressId', userController.deleteAddress);

// Parcel management
router.get('/:userId/sent-parcels', userController.getSentParcels);
router.get('/:userId/received-parcels', userController.getReceivedParcels);

// Notifications and beneficiaries
router.get('/:userId/notifications', userController.getNotifications);
router.post('/:userId/beneficiaries', userController.addBeneficiary);

module.exports = router;
