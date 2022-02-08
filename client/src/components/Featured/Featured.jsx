import React from 'react';
import {Link} from 'react-router-dom'
import './Featured.css'

function Featured({facilities}) {
  return <div>
      <h2 className="featured-title">Featured</h2>
      <div className="featured-div">
      <Link className='link' to={`/facility/${facilities[2]?._id}`}>
        <div className="featured-one">
          <img src={facilities[2]?.image} alt="" />
          <p>
            <h2 className="featured-hospital-name">
              Santa Rosa Medical Center
            </h2>
            {`${facilities[2]?.reviews[0]?.comment.slice(0, 1001)}...`}
          </p>
        </div>
        </Link>
        <Link className='link' to={`/facility/${facilities[3]?._id}`}>
        <div className="featured-two">
          <p>
            <h2 className="featured-hospital-name">Sacred Heart Childrens Hospital</h2>
            {facilities[3]?.reviews[0]?.comment}
          </p>
          <img src={facilities[3]?.image} alt="" />
        </div>
        </Link>
      </div>
  </div>;
}

export default Featured;
