const User = require('../models/User');

// Register a new user
exports.registerUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

// Login user
exports.loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
        throw new Error('Invalid email or password');
    }
    return user;
};

// Get user by ID
exports.getUserById = async (userId) => {
    const user = await User.findOne({ userId });
    if (!user) throw new Error('User not found');
    return user;
};

// Update user
exports.updateUser = async (userId, updateData) => {
    const user = await User.findOneAndUpdate({ userId }, updateData, { new: true });
    if (!user) throw new Error('User not found');
    return user;
};

// Delete user
exports.deleteUser = async (userId) => {
    const user = await User.findOneAndDelete({ userId });
    if (!user) throw new Error('User not found');
};

// Add address
exports.addAddress = async (userId, address) => {
    const user = await User.findOne({ userId });
    if (!user) throw new Error('User not found');
    user.addresses.push(address);
    return await user.save();
};

// Delete address
exports.deleteAddress = async (userId, addressId) => {
    const user = await User.findOne({ userId });
    if (!user) throw new Error('User not found');
    user.addresses = user.addresses.filter((addr) => addr._id.toString() !== addressId);
    return await user.save();
};

// Get sent parcels
exports.getSentParcels = async (userId) => {
    const user = await User.findOne({ userId }).populate('sentParcels');
    if (!user) throw new Error('User not found');
    return user.sentParcels;
};

// Get received parcels
exports.getReceivedParcels = async (userId) => {
    const user = await User.findOne({ userId }).populate('receivedParcels');
    if (!user) throw new Error('User not found');
    return user.receivedParcels;
};

// Get notifications
exports.getNotifications = async (userId) => {
    const user = await User.findOne({ userId }).populate('notifications');
    if (!user) throw new Error('User not found');
    return user.notifications;
};

// Add beneficiary
exports.addBeneficiary = async (userId, beneficiaryId) => {
    const user = await User.findOne({ userId });
    if (!user) throw new Error('User not found');
    user.beneficiaries.push(beneficiaryId);
    return await user.save();
};
