import React from 'react'
import './Navbar.css'
import  { Link, useNavigate } from 'react-router-dom'
import  {useState} from 'react'

function Navbar(props) {
    
    const { setFoundFacilities, facilities, setNotFound} = props

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let foundFacility = facilities.filter(facility => {
            if (facility.name.toLowerCase().includes(name) && facility.city.toLowerCase().includes(city) && facility.state.toLowerCase().includes(state) ) {
                if (name || city || state !== '') {
                return facility
                } 
            }
        })
        setFoundFacilities(foundFacility)
        setNotFound(name)
        setName('')
        setCity('')
        setState('')
        navigate('/facilities')
    }

    return (
        <nav>
            <div className="left-side">
                {/* <img src="" alt="" /> */}
               <Link className='link' to='/'> <h2 className='logo'>HCF-Reviews</h2></Link>
            </div>
            <div className="right-side">
                <form onSubmit={handleSubmit}>
                <input onChange={e => setName(e.target.value)} value={name} type="texttext" className="hospital" placeholder='Hospital Name'/>
                <input onChange={e => setCity(e.target.value)} value={city} type="texttext" className="city" placeholder='City'/>
                <input onChange={e => setState(e.target.value)} value={state} type="texttext" className="state" placeholder='State'/>
                <button className='hospital-search'>Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar
