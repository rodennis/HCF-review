import React from 'react'
import './Home.css'
import featuredOne from '../../photos/manatee.jpeg'
import featuredTwo from '../../photos/Weis.jpeg'

function Home({reviews}) {
    return (
        <div>
            <div className="call-to-action">
                <div className="call-to-action-button-div">
                    <h1 className='call-to-action-title'>Start reviewing<br />
                    today!</h1>
                    <button className='call-to-action-add-review'>Add A Review</button>
                </div>
            </div>
                <h2 className='featured-title'>Featured Reviews</h2>
                <div className="featured-div">
                <div className='featured-one'>
                    <img src={featuredOne} alt="" />
                    <p>
                    <h2 className="featured-hospital-name">Manatee Memorial Hospital</h2>
                        {reviews[0]?.comment }
                    </p>
                </div>
                <div className='featured-two'>
                    <p>
                <h2 className="featured-hospital-name">Weis Memorial Hospital</h2>
                        {reviews[1]?.comment }
                    </p>
                    <img src={featuredTwo} alt="" />
                </div>
                </div>
        </div>
    )
}

export default Home