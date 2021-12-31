import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function HomeNavbar() {
    return (
        <nav>
        <div className="left-side">
            {/* <img src="" alt="" /> */}
            <h2 className='logo'><Link to='/'>Logo</Link></h2>
        </div>
        <div className="right-side">
            <Link className='sign-in' to={'/signIn'}>Sign In</Link>
            <Link className='sign-up' to={'/signUp'}>Sign Up</Link>
        </div>
    </nav>
    )
}

export default HomeNavbar
