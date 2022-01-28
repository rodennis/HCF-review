import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Review = new Schema(
  {
    position: { type: String },
    ratio: { type: String },
    floor: { type: String },
    years: { type: String },
    management: { type: String },
    salary: { type: String },
    comment: { type: String },
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