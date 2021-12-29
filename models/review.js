import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Review = new Schema(
  {
    position: { type: String, maxLength: 80, required: true },
    year: { type: String, maxLength: 2, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
)

export default mongoose.model('reviews', Review)