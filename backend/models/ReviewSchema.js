import mongoose from "mongoose";
import BeauticianSchema from "./BeauticianSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    beautician: {
      type: mongoose.Types.ObjectId,
      ref: "Beautician",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/, function(next){

  this.populate({
    path: 'user',
    select: 'name photo',
  })

  next();
})

reviewSchema.statics.calcAverageRatings = async function (beauticianId){

  const stats = await this.aggregate([{
    $match:{beautician:beauticianId},
  },
{
  $group: {
    _id: '$beautician',
    numOfRating: {$sum:1},
    avgRating: {$avg: '$rating'}
    
  }
}
])

 await Beautician.findByIdAndUpdate(beauticianId,{
  totalRating: stats[0].numOfRating,
  averageRating: stats[0].avgRating,
 })
}

reviewSchema.post("save", function(){
  this.constructor.calcAverageRatings(this.beautician);
})

export default mongoose.model("Review", reviewSchema);
