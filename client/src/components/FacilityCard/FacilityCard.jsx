import React from 'react'
import './FacilityCard.css'
import {Link } from 'react-router-dom'

function FacilityCard({foundFacilities, name, notFound}) {

    return (
        <div>
            {
                foundFacilities[0] ? 
                foundFacilities.map(facility => (
                    <Link className='link' to='/facility'>
                    <div key={facility._id} className='facility-card'>
                        <div className='facility-image'>
                        <img src={facility.image} alt="" />
                        </div>
                        <div className='facility-info'>
                        <h1>{facility.name}</h1>
                        <h2>Address: {facility.address}</h2>
                        <h3>Phone #:{facility.phone}</h3>
                        </div>
                    </div>
                    </Link>
                ))
                    : <div className='not-found-div'>
                    <h1 className='loading'>{`No results found for ${notFound}.`}</h1>
                    <button className='add-facility-button'>Add Facility</button>
                    </div> 
            }
        </div>
    )
}

export default FacilityCard
