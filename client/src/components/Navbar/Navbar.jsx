import React from 'react'
import './Navbar.css'
import  { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Navbar(props) {

    const {setName, setFoundFacilities, facilities, name} = props
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        let foundFacility = facilities.filter(facility => {
            if (facility.name.toLowerCase().includes(name)) {
                return facility
            }
        })
        setFoundFacilities(foundFacility)
        navigate('/facilities')
    }

    return (
        <nav>
            <div className="left-side">
                {/* <img src="" alt="" /> */}
               <Link to='/'> <h2 className='logo'>Logo</h2></Link>
            </div>
            <div className="right-side">
                <form onSubmit={handleSubmit}>
                <input onChange={e => setName(e.target.value)} value={name} type="texttext" className="hospital" placeholder='Hospital Name'/>
                <input type="texttext" className="city" placeholder='City'/>
                <input type="texttext" className="state" placeholder='State'/>
                <button className='hospital-search'>Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar
