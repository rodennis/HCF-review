import React from "react";
import "./FacilityCard.css";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

function FacilityCard({ foundFacilities, notFound }) {
  return (
    <div>
      {foundFacilities.length > 1 ? (
        <h3 className="search-results-count">{`${foundFacilities.length} results found for "${notFound}"`}</h3>
      ) : (
        <h3 className="search-results-count">{`${foundFacilities.length} result found for "${notFound}"`}</h3>
      )}
      {foundFacilities[0] ? (
        foundFacilities.map((facility) => (
          facility.approved &&
          <Link
            key={facility._id}
            className="link"
            to={`/facility/${facility._id}`}
          >
            <div className="facility-card">
              <div className="facility-image">
                <img src={facility.image} alt="" />
              </div>
              <div className="facility-info">
                <h1>
                  {facility.name.length < 20
                    ? facility.name
                    : `${facility.name.slice(0, 20)}...`}
                </h1>
                <h2>Address: {facility.address}</h2>
                <h3>Phone #: {facility.phone}</h3>
                <Rating facility={facility} />
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="not-found-div">
          <h1 className="loading">{`No results found for ${notFound}.`}</h1>
          <Link className="link" to="/create-facility">
            <button className="add-facility-button">Add Facility</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default FacilityCard;
