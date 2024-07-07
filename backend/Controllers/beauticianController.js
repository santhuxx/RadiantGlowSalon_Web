import Beautician from '../models/BeauticianSchema.js';

export const updateBeautician = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedBeautician = await Beautician.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedBeautician,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Update Failed" });
    }
};

export const deleteBeautician = async (req, res) => {
    const id = req.params.id;

    try {
        await Beautician.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Deleted successfully",
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete" });
    }
};

export const getSingleBeautician = async (req, res) => {
    const id = req.params.id;

    try {
        const beautician = await Beautician.findById(id).populate('reviews').select("-password");//password removed from get method

        res.status(200).json({
            success: true,
            message: "Beautician found",
            data: beautician,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "Beautician not found!" });
    }
};

export const getAllBeauticians = async (req, res) => {
    try {

        const {query} =req.query;
        let beauticians;

        if(query){
            beauticians = await Beautician.find({
                isApproved: 'approved',
                $or: [
                    { name: {$regex: query, $options:'i'}},
                    {specialties: {$regex: query, $options: 'i'}},
                ]
            }).select("-password");
        } else {

        }
        beauticians = await Beautician.find({ isApproved: 'approved'}).select("-password");//password removed from get method
        res.status(200).json({
            success: true,
            message: "Beauticians found",
            data: beauticians,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "Beauticians not found!" });
    }
};
