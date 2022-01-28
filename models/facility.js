import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Review = new Schema(
  {
    position: { type: String, required: true },
    ratio: { type: String, required: true },
    floor: { type: String, required: true },
    years: { type: String, required: true },
    management: { type: String, required: true },
    salary: { type: String, required: true },
    comment: { type: String, required: true },
    rate: {type: Number, required: true},
    username: { type: String },
    approved: { type: Boolean  }
  },
  { timestamps: true }
  )
  
  const Facility = new Schema(
    {
      name: { type: String},
      image: { type: String }, 
      about: { type: String }, 
      address: { type: String },
      city: { type: String },
      state: { type: String },
      phone: { type: String },
      reviews: [ Review ]
    },
    { timestamps: true }
  )
  
export default mongoose.model('facilities', Facility)