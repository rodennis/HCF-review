import db from '../db/connection.js'
import Facility from '../models/facility.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'

const insertData = async () => {
  await db.dropDatabase()

  const user1 = new User({
    username: 'Rodennis',
    email: 'test@test.com',
    password_digest: await bcrypt.hash('!a$ecureP@ssw0Rd55!', 11)
  })
  await user1.save()

  const facilities = [
    {
      image: 'https://www.guthrie.org/sites/default/files/styles/1600x900/public/2020-01/corning-hospital.jpg?itok=tZ2UX3rt',
      address: '1 Guthrie Dr, Corning, NY 14830',
      phone: '(607) 937-7200',
      reviews: [
        {
          position: 'E.R. Nurse',
          years: '12',
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
      }
      ]
    },
    {
      image: 'https://www.guthrie.org/sites/default/files/styles/1600x900/public/2020-01/corning-hospital.jpg?itok=tZ2UX3rt',
      address: '1 Guthrie Dr, Corning, NY 14830',
      phone: '(607) 937-7200',
      reviews: [
        {
          position: 'E.R. Nurse',
          years: '12',
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
      }
      ]
    }
  ]

  await Facility.insertMany(facilities)
  console.log('Created facilities!')

  db.close()
}

insertData()