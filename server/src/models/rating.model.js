import mongoose, { Schema } from "mongoose";

const ratingSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  sum: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  userId: {
    type: Array,
    required: true,
  },
});

export const Ratings = mongoose.model("Ratings", ratingSchema);
