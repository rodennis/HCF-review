/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useLayoutEffect } from "react";

function Rating({facility }) {
  const [totalRating, setTotalRating] = useState(0);
  const [facilityRating, setFacilityRating] = useState(0);
  let total = 0;

  useLayoutEffect(() => {
    facility?.reviews?.forEach((review) => {
      setTotalRating((total += review.rate));
    });
    // setFacilityRating(totalRating / facility.reviews?.length);
  }, [facility]);

  return (
    <div>
      <div className="star-rating">
        {[...Array(totalRating / facility?.reviews?.length)].map((index) => {
          return (
            <button id="star-button" key={index} className="on" >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Rating;
