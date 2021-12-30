import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Review = new Schema(
  {
    position: { type: String, required: true },
    years: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
  )
  
  const Facility = new Schema(
    {
      image: { type: String }, 
      address: { type: String },
      phone: { type: String },
      reviews: [ Review ]
    },
    { timestamps: true }
  )
  
export default mongoose.model('facilities', Facility)