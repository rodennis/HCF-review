import db from '../db/connection.js'
import Review from '../models/review.js'

const insertData = async () => {
  await db.dropDatabase()

  const reviews = [
 {
     position: 'E.R. Nurse',
     years: '12',
     comment: 'this hospital was great! I loved it'
 },
 {
    position: 'E.R. Nurse',
    years: '12',
    comment: 'this hospital was great! I loved it'
},
{
    position: 'E.R. Nurse',
    years: '12',
    comment: 'this hospital was great! I loved it'
},
{
    position: 'E.R. Nurse',
    years: '12',
    comment: 'this hospital was great! I loved it'
}
  ]

  await Review.insertMany(reviews)
  console.log('Created reviews!')

  db.close()
}

insertData()