import React from "react";
import { Link } from "react-scroll";
import Rating from "../Rating/Rating";

function SingleFacility({ facility, user }) {
  return (
    <div>
      {facility ? (
        <div className="facility-info-div" id="top">
          <div className="facility-photo-and-info">
            <div className="clicked-facility-image">
              <img src={facility.image} alt="facility" />
            </div>
            <div className="clicked-facility-info">
              <h1>{facility.name}</h1>
              <h2>Facility Info</h2>
              <h3>Address: {facility.address}</h3>
              <h3 className="facility-phone">Phone #: {facility.phone}</h3>
              <div className="add-review-div">
                <Rating facility={facility} />
                <Link to="reviewForm" smooth={true} duration={1000}>
                  { user && <button className="add-review">Add Review</button>}
                </Link>
              </div>
            </div>
          </div>
          <div className="facility-about">
            <h2>About</h2>
            <p>{facility.about}</p>
          </div>
        </div> 
      ) : <h1>Loading...</h1>}
    </div>
  );
}

export default SingleFacility;
