import React from "react";
import "./ReviewForm.css";
import { useState } from "react";

function ReviewForm(props) {

  const {handleChange, years, floor, ratio, management, position, comment, salary, handleSubmit} = props
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h1>Leave A Review</h1>
      <input
        onChange={(e) => handleChange(e)}
        value={position}
        type="text"
        name='position'
        className="position"
        placeholder="Position"
      />
      <input
        onChange={(e) => handleChange(e)}
        value={ratio}
        type="text"
        name='ratio'
        className="ratio"
        placeholder="Ratio"
      />
      <input
        onChange={(e) => handleChange(e)}
        value={floor}
        type="text"
        name='floor'
        className="floor"
        placeholder="Floor"
      />{" "}
      <br />
      <input
        onChange={(e) => handleChange(e)}
        value={years}
        type="text"
        name='years'
        className="years-employeed"
        placeholder="Years Employeed"
      />
      <input
        onChange={(e) => handleChange(e)}
        value={management}
        type="text"
        name='management'
        className="admin-management"
        placeholder="Admin/Management"
      />
      <input
        onChange={(e) => handleChange(e)}
        value={salary}
        type="text"
        name='salary'
        className="salary"
        placeholder="Salary"
      />{" "}
      <br />
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              id="star-button"
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
      <textarea
        onChange={(e) => handleChange(e)}
        value={comment}
        name="comment"
        id=""
        cols="30"
        rows="10"
        className="comment"
        placeholder="Leave a comment..."
      ></textarea>{" "}
      <br />
      <button>Submit</button>
    </form>
  );
}

export default ReviewForm;
