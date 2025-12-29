const Parcel = require('../models/Parcel');

exports.createParcel = async (data) => {
    const parcel = new Parcel(data);
    return await parcel.save();
};

exports.getParcelById = async (parcelId) => {
    const parcel = await Parcel.findOne({ parcelId }).populate('senderId receiverId beneficiaryId');
    if (!parcel) throw new Error('Parcel not found');
    return parcel;
};

exports.updateParcel = async (parcelId, updates) => {
    const parcel = await Parcel.findOneAndUpdate({ parcelId }, updates, { new: true });
    if (!parcel) throw new Error('Parcel not found');
    return parcel;
};

exports.deleteParcel = async (parcelId) => {
    return await Parcel.deleteOne({ parcelId });
};

exports.addTrackingHistory = async (parcelId, trackingData) => {
    const parcel = await Parcel.findOneAndUpdate(
        { parcelId },
        { $push: { trackingHistory: trackingData } },
        { new: true }
    );
    if (!parcel) throw new Error('Parcel not found');
    return parcel;
};

exports.updateParcelStatus = async (parcelId, status) => {
    const parcel = await Parcel.findOneAndUpdate(
        { parcelId },
        { status },
        { new: true }
    );
    if (!parcel) throw new Error('Parcel not found');
    return parcel;
};

exports.addFeedback = async (parcelId, feedback) => {
    const parcel = await Parcel.findOneAndUpdate(
        { parcelId },
        { feedback },
        { new: true }
    );
    if (!parcel) throw new Error('Parcel not found');
    return parcel;
};
