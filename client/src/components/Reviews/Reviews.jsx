import {useState} from "react";
import "./Reviews.css";

function Reviews({ facility }) {

  const [toggleMore, setToggleMore] = useState(false)

  const handleClick = () => {
    setToggleMore(prevToggle => !prevToggle)
  }

  return (
    <div>
      {facility && facility.reviews ? (
        facility.reviews.map(
          (review) =>
            review.approved === true && (
              <div key={review._id} className="review">
                <div className="review-left-div">
                  <h2>
                    {review.username.charAt(0).toUpperCase() +
                      review.username.slice(1)}
                  </h2>
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
                  <p>
                    <span>Floor: </span>
                    {review.floor}
                  </p>
                  <p>
                    <span>Admin: </span>
                    {review.management}
                  </p>
                  <p>
                    <span>Salary: </span>${review.salary}
                  </p>
                  <p>
                    <span>Years: </span>
                    {review.years}
                  </p>
                  <p>
                    <span>Ratio: </span>
                    {review.ratio}
                  </p>
                </div>
                <div className="review-right-div-mobile">
                  <p>{toggleMore ? review.comment : `${review.comment.slice(0, 300)}...`}</p>
                  {review.comment.length > 500 && <button className="read-more" onClick={handleClick}>Read More</button>}
                </div>
                <div className="review-right-div">
                  <p>{review.comment}</p>
                  {review.comment.length > 300 && <button className="read-more" onClick={handleClick}>Read More</button>}
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
