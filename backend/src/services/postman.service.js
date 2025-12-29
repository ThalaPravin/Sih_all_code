const Postman = require('../models/Postman');
const Parcel = require('../models/Parcel');

exports.registerPostman = async (data) => {
    const postman = new Postman(data);
    return await postman.save();
};

exports.loginPostman = async (postmanId, phone) => {
    const postman = await Postman.findOne({ postmanId, phone });
    if (!postman) throw new Error('Invalid credentials');
    return postman;
};

exports.getPostmanById = async (postmanId) => {
    const postman = await Postman.findById(postmanId).populate('assignedParcels');
    if (!postman) throw new Error('Postman not found');
    return postman;
};

exports.updatePostman = async (postmanId, updates) => {
    const postman = await Postman.findByIdAndUpdate(postmanId, updates, { new: true });
    if (!postman) throw new Error('Postman not found');
    return postman;
};

exports.deletePostman = async (postmanId) => {
    return await Postman.findByIdAndDelete(postmanId);
};

exports.getRoutes = async (postmanId) => {
    const postman = await Postman.findById(postmanId).populate('currentRoute');
    if (!postman) throw new Error('Postman not found');
    return postman.currentRoute;
};

exports.updateCurrentRoute = async (postmanId, routes) => {
    const postman = await Postman.findByIdAndUpdate(postmanId, { currentRoute: routes }, { new: true });
    if (!postman) throw new Error('Postman not found');
    return postman.currentRoute;
};

exports.getAssignedParcels = async (postmanId) => {
    const postman = await Postman.findById(postmanId).populate('assignedParcels');
    if (!postman) throw new Error('Postman not found');
    return postman.assignedParcels;
};

exports.assignParcels = async (postmanId, parcels) => {
    const postman = await Postman.findByIdAndUpdate(
        postmanId,
        { $push: { assignedParcels: { $each: parcels } } },
        { new: true }
    );
    if (!postman) throw new Error('Postman not found');
    return postman.assignedParcels;
};

exports.updateParcelStatus = async (postmanId, parcelId, status) => {
    const parcel = await Parcel.findByIdAndUpdate(parcelId, { status }, { new: true });
    if (!parcel) throw new Error('Parcel not found');
    return parcel;
};

exports.updateLocation = async (postmanId, location) => {
    const postman = await Postman.findByIdAndUpdate(postmanId, { location }, { new: true });
    if (!postman) throw new Error('Postman not found');
    return postman.location;
};

exports.updateStatus = async (postmanId, status) => {
    const postman = await Postman.findByIdAndUpdate(postmanId, { status }, { new: true });
    if (!postman) throw new Error('Postman not found');
    return postman.status;
};
