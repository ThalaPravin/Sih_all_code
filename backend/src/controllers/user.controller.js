const userService = require('../services/user.service');
const {
    registerUserSchema,
    loginUserSchema,
    updateUserSchema,
    addAddressSchema,
    beneficiarySchema
} = require('../validators/user.validator');

// Register a new user
exports.registerUser = async (req, res) => {
    try {
        const data = registerUserSchema.parse(req.body); // Validate with Zod
        const user = await userService.registerUser(data);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.errors || error.message });
    }
};

// Login user
exports.loginUser = async (req, res) => {
    try {
        const data = loginUserSchema.parse(req.body); // Validate with Zod
        const user = await userService.loginUser(data.email, data.password);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.errors || error.message });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Update user
exports.updateUser = async (req, res) => {
    try {
        const data = updateUserSchema.parse(req.body); // Validate with Zod
        const updatedUser = await userService.updateUser(req.params.userId, data);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.errors || error.message });
    }
};

// Delete user
exports.deleteUser = async (req, res) => {
    try {
        await userService.deleteUser(req.params.userId);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Address management
exports.addAddress = async (req, res) => {
    try {
        const data = addAddressSchema.parse(req.body); // Validate with Zod
        const user = await userService.addAddress(req.params.userId, data);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.errors || error.message });
    }
};

exports.deleteAddress = async (req, res) => {
    try {
        const user = await userService.deleteAddress(req.params.userId, req.params.addressId);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Parcel management
exports.getSentParcels = async (req, res) => {
    try {
        const parcels = await userService.getSentParcels(req.params.userId);
        res.status(200).json(parcels);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getReceivedParcels = async (req, res) => {
    try {
        const parcels = await userService.getReceivedParcels(req.params.userId);
        res.status(200).json(parcels);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Notifications and beneficiaries
exports.getNotifications = async (req, res) => {
    try {
        const notifications = await userService.getNotifications(req.params.userId);
        res.status(200).json(notifications);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.addBeneficiary = async (req, res) => {
    try {
        const data = beneficiarySchema.parse(req.body); // Validate with Zod
        const user = await userService.addBeneficiary(req.params.userId, data.beneficiaryId);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.errors || error.message });
    }
};
