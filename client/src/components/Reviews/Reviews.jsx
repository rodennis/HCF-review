import React from 'react';

function Reviews({facility}) {
  return <div>
      {
          facility && facility.reviews ? (
            facility.reviews.map(
              (review) =>
                review.approved === true && (
                  <div key={review._id}>
                    <h2>{review.username}</h2>
                    <h2>{review.position}</h2>
                    <h2>{review.salary}</h2>
                    <h2>{review.floor}</h2>
                    <h2>{review.management}</h2>
                    <h2>{review.comment}</h2>
                    <h2>{review.years}</h2>
                    <h2>{review.ratio}</h2>
                  </div>
                )
            )
          ) : (
            <h1>Loading...</h1>
          )
      }
  </div>;
}

export default Reviews;
