import mongoose from "mongoose";

const BeauticianSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  
  role: {
    type: String,
    default: "beautician", // Assuming a default role for beauticians
  },

  // Fields specific to beauticians
  servicesOffered: { type: [String], required: true }, // Array of services offered by the beautician
  yearsOfExperience: { type: Number },
  bio: { type: String, maxLength: 50 },
  about: { type: String },
  specialties: { type: [String] }, // Array of specialties or skills
  workHours: { type: String }, // String representing work hours, e.g., "9 AM - 6 PM"
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
  averageRating: {
    type: Number,
    default: 0,
  },
  totalRating: {
    type: Number,
    default: 0,
  },
  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

export default mongoose.model("Beautician", BeauticianSchema);
