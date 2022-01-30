import React from "react";
import "./Reviews.css";

function Reviews({ facility }) {
  return (
    <div>
      {facility && facility.reviews ? (
        facility.reviews.map(
          (review) =>
            review.approved === true && (
              <div key={review._id} className="review">
                <div className="review-left-div">
                  <h2>{review.username}</h2>
                  <p>{review.position}</p>
                  <span>
                    {[...Array(review.rate)].map((index) => {
                      return (
                        <button id="star-button" key={index} className="on">
                          <span className="star">&#9733;</span>
                        </button>
                      );
                    })}
                  </span>
                          </div>
                          <div className="review-middle-div">
                  <p>Floor: {review.floor}</p>
                  <p>Admin: {review.management}</p>
                  <p>Salary: ${review.salary}</p>
                  <p>Years: {review.years}</p>
                  <p>Ratio: {review.ratio}</p>
                </div>
                <div className="review-right-div">
                  <p>{review.comment}</p>
                </div>
              </div>
            )
        )
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Reviews;
