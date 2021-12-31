import React from 'react'
import {useNavigate} from 'react-router-dom'

function HomeForm(props) {

    const {setHomeName, setFoundFacilities, facilities, homeName, setNotFound} = props
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        let foundFacility = facilities.filter(facility => {
            if (facility.name.toLowerCase().includes(homeName)) {
                if (homeName !== '') {
                return facility
                }
            }
        })
        setFoundFacilities(foundFacility)
        setNotFound(homeName)
        setHomeName('')
        navigate('/facilities')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='home-form'>
                    <h2>Find A Facility</h2>
                <input onChange={e => setHomeName(e.target.value)} type="texttext" className="home-hospital" placeholder='Hospital Name'/> <br />
                <input type="texttext" className="home-city" placeholder='City'/> <br />
                <input type="texttext" className="home-state" placeholder='State'/> <br />
                <button className='home-hospital-search'>Search</button>
                    </form>
        </div>
    )
}

export default HomeForm
