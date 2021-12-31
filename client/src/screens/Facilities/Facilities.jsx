import React from 'react'
import FacilityCard from '../../components/FacilityCard/FacilityCard'

function Facilities({name, foundFacilities, notFound}) {

    return (
        <div>
            <FacilityCard name={name} foundFacilities={foundFacilities} notFound={notFound}/>
        </div>
    )
}

export default Facilities
