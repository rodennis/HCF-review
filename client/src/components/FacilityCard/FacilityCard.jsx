import React from 'react'
import {useState, useEffect} from 'react'

function FacilityCard({foundFacilities}) {

    return (
        <div>
            {
                foundFacilities[0] ? 
                foundFacilities.map(facility => (
                    <div className='facility-card'>
                        <h1>{facility.name}</h1>
                        <h2>{facility.address}</h2>
                        <h3>{facility.phone}</h3>
                    </div>
                ))
                    : <h1 className='loading'>Loading...</h1>
            }
        </div>
    )
}

export default FacilityCard
