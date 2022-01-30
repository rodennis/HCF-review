import React, {useState} from 'react';
import './CreateFacility.css'
import FacilityForm from '../../components/FacilityForm/FacilityForm';
import {createReview} from '../../services/reviews'
import {useNavigate} from 'react-router-dom'


function CreateFacility() {

  const navigate = useNavigate()

  const [newFacility, setNewFacility] = useState({
    name: '',
    address: '',
    state: '',
    city: '',
    image: null,
    about: null,
    phone: null,
    approved: false
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewFacility({
      ...newFacility,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createReview(newFacility)
    navigate('/')
  }

  return <div className='new-facility'>
      <div className="new-facility-helper-text">
      <h1>Didn't see the facility you were looking for? No problem just fill out this quick form and once its approved you can leave a review!</h1>
      </div>
      <div className="new-facility-form">
          <h1>Add Facility</h1>
      <FacilityForm handleChange={handleChange} handleSubmit={handleSubmit} newFacility={newFacility}/>
      </div>
  </div>;
}

export default CreateFacility;
