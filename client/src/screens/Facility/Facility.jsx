import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import './Facility.css'

function Facility({facilities}) {

    const params = useParams()

    const [facility, setFacility] = useState([])

    useEffect(() => {
        const foundFacility = facilities.find(facility => {
            return facility._id === params.id
        })
        setFacility(foundFacility)
    }, [facilities, params.id])

    return (
        <div>
            {   facility &&
            <div className="facility-info-div">
                <div className="facility-photo-and-info">   
                    <div className="clicked-facility-image">
                    <img src={facility.image} alt="facility" />
                    </div>
                    <div className="clicked-facility-info">
                    <h1>{facility.name}</h1>
                    <h2>Facility Info</h2>
                    <h3>Address: {facility.address}</h3>
                    <h3>Phone #: {facility.phone}</h3>
                    </div>
                </div>
                <div className='facility-about'>
                    <h2>About</h2>
                    <p>{facility.about}</p>
                </div>
            </div>
}
        </div>
    )
}

export default Facility
