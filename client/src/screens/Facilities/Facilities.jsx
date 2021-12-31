import React from 'react'
import './Facilities.css'
import FacilityCard from '../../components/FacilityCard/FacilityCard'
import Navbar from '../../components/Navbar/Navbar'
import HomeNavbar from '../../components/Navbar/HomeNavbar'
import {useState} from 'react'

function Facilities({facilities, user}) {

    const [foundFacilities, setFoundFacilities] = useState([])
    const [name, setName] = useState('')

    return (
        <div>
            {user ? <Navbar setFoundFacilities={setFoundFacilities} name={name} setName={setName} facilities={facilities}/>  : <HomeNavbar />  }

            <FacilityCard name={name} foundFacilities={foundFacilities}/>
        </div>
    )
}

export default Facilities
