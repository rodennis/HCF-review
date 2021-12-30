import React from 'react'
import './Home.css'
import featuredOne from '../../photos/manatee.jpeg'
import featuredTwo from '../../photos/Weis.jpeg'
import HomeNavbar from '../../components/Navbar/HomeNavbar'
import Navbar from '../../components/Navbar/Navbar'

function Home({facilities, user}) {
    return (
        <div>
            {user ? <Navbar/> : <HomeNavbar />  }
            <div className="call-to-action">
                <div className="call-to-action-hospital-search">
                    <form className='home-form'>
                    <h2>Find A Facility</h2>
                <input type="texttext" className="home-hospital" placeholder='Hospital Name'/> <br />
                <input type="texttext" className="home-city" placeholder='City'/> <br />
                <input type="texttext" className="home-state" placeholder='State'/> <br />
                <button className='home-hospital-search'>Search</button>
                    </form>
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
