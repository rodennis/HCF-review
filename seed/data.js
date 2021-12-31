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
      name:'Baptist Hospital ',
      image: 'https://www.ebaptisthealthcare.org/Images/BH/BHFacilityFront.jpg',
      about: 'Our organization dates back to 1951. We are the only locally owned nationally recognized health care system in the area with a personal interest in being your care provider. Our passion for caring is evident through involvement in our community’s health. We’ve made it our Mission to help people throughout life\'s journey.',
      address: '1000 W Moreno St, Pensacola, FL 32501',
      city: 'Pensacola',
      state: 'FL',
      phone: ' (850) 434-4011',
      reviews: [
        {
          position: 'E.R. Nurse',
          years: '12',
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
      }
      ]
    },
    {
      name:'Ascension Sacred Heart',
      image: 'https://ricksblog.biz/wp-content/uploads/2019/10/Bayou-Tower-sign-Ascension-Sacred-Heart-e1570713277330-675x450.jpg',
      about: 'In our adult and pediatric emergency rooms, we deliver care for life-threatening injuries and illnesses. Our care teams listen to quickly understand your health needs and deliver care that\'s right for you. We offer a Level II Trauma Center, the region\'s only Pediatric Trauma Referral Center and the area\'s only nationally certified Comprehensive Stroke Center.',
      address: '5151 N 9th Ave, Pensacola, FL 32504',
      city: 'Pensacola',
      state: 'FL',
      phone: '(850) 416-7000',
      reviews: [
        {
          position: 'E.R. Nurse',
          years: '12',
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
      }
      ]
    },
    {
      name:'Santa Rosa Medical Center',
      image: 'https://content.mybaseguide.com/wp-content/uploads/sites/3/2020/11/2c1ef08b45cf-Santa_Rosa_Medical_Center____2016.jpg',
      about: 'Santa Rosa Medical Center is a full-service, 129-bed hospital located on Berryhill Road in Milton, Florida, that is quickly and easily reached from all points in Santa Rosa County. With 700 associates and volunteers and more than 200 physicians on staff, Santa Rosa Medical Center is prepared to meet your healthcare needs.',
      address: '6002 Berryhill Rd, Milton, FL 32570',
      city: 'Milton',
      state: 'FL',
      phone: '(850) 626-7762',
      reviews: [
        {
          position: 'E.R. Nurse',
          years: '12',
          comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
      }
      ]
    },
    {
      name:'Sacred Heart Childrens Hospital',
      image: 'https://s3.amazonaws.com/floridatrend/29308/ascension-677.jpg',
      about: 'The Children’s Hospital offers a wide range of services to meet all of a child’s medical needs, from the area’s only Level III neonatal intensive care unit to pediatric intensive care, cancer care, rehabilitation and more than 120 board-certified physicians across 30 pediatric specialties.',
      address: '5151 N 9th Ave, Pensacola, FL 32504',
      city: 'Pensacola',
      state: 'FL',
      phone: '(850) 416-7000',
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