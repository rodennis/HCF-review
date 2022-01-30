/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

function Rating({ facility }) {
  const [totalRating, setTotalRating] = useState(0);
  const [facilityRating, setFacilityRating] = useState(0);
  const length = facility?.reviews?.length
  let total = 0;

  useEffect(() => {
    facility?.reviews?.forEach((review) => {
      setTotalRating((total += review.rate));
    });
    setFacilityRating(totalRating > 0 ? parseInt(totalRating / length) : 1);
  }, [totalRating, facility]);

  return (
    <div className="star-rating">
      <div>
        {facilityRating &&
          [...Array(Number(facilityRating))].map((index) => {
            return (
              <button id="star-button" key={index} className={totalRating > 0 ? "on" : "off"}>
                <span className="star">&#9733;</span>
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default Rating;
