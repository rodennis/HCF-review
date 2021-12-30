import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="left-side">
                {/* <img src="" alt="" /> */}
                <h2 className='logo'>Logo</h2>
            </div>
            <div className="right-side">
                <input type="texttext" className="hospital" placeholder='Hospital Name'/>
                <input type="texttext" className="city" placeholder='City'/>
                <input type="texttext" className="state" placeholder='State'/>
                <button className='hospital-search'>Search</button>
            </div>
        </nav>
    )
}

export default Navbar
