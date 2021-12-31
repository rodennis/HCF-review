import React from 'react'
import './Home.css'
import {useState} from 'react'
import featuredOne from '../../photos/manatee.jpeg'
import featuredTwo from '../../photos/Weis.jpeg'
import HomeForm from '../../components/HomeForm/HomeForm'

function Home(props) {

    const {setFoundFacilities, facilities, setNotFound} = props

    const [homeName, setHomeName] = useState('')
    const [homeCity, setHomeCity] = useState('')
    const [homeState, setHomeState] = useState('')

    return (
        <div>
            <div className="call-to-action">
                <div className="call-to-action-hospital-search">
                    <HomeForm setFoundFacilities={setFoundFacilities} homeName={homeName} setHomeName={setHomeName} homeCity={homeCity} setHomeCity={setHomeCity} facilities={facilities} setNotFound={setNotFound} homeState={homeState} setHomeState={setHomeState}/>
                </div>
                <div className="call-to-action-button-div">
                    <h1 className='call-to-action-title'>Start 
                   <br /> reviewing<br />
                    today!</h1>
                </div>
            </div>
                <h2 className='featured-title'>Featured Reviews</h2>
                <div className="featured-div">
                <div className='featured-one'>
                    <img src={featuredOne} alt="" />
                    <p>
                    <h2 className="featured-hospital-name">Manatee Memorial Hospital</h2>
                        {facilities[0]?.reviews[0]?.comment }
                    </p>
                </div>
                <div className='featured-two'>
                    <p>
                <h2 className="featured-hospital-name">Weis Memorial Hospital</h2>
                        {facilities[1]?.reviews[0]?.comment }
                    </p>
                    <img src={featuredTwo} alt="" />
                </div>
                </div>
        </div>
    )
}

export default Home
