import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    beautician: {
      type: mongoose.Types.ObjectId,
      ref: "Beautician",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    serviceType: { type: String, required: true }, // Example: Haircut, Facial, etc.
    appointmentDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
