import "./ReviewForm.css";

function ReviewForm(props) {
  const {
    handleChange,
    handleSubmit,
    hover,
    setHover,
    rating,
    setRating,
    newReview,
  } = props;

  return (
    <form onSubmit={handleSubmit} id="reviewForm" className="review-form">
      <h1>Leave A Review</h1>
      <input
        onChange={(e) => handleChange(e)}
        value={newReview.position}
        type="text"
        name="position"
        className="position"
        placeholder="Position"
        required
      />
      <input
        onChange={(e) => handleChange(e)}
        value={newReview.ratio}
        type="text"
        name="ratio"
        className="ratio"
        placeholder="Ratio"
        required
      />
      <input
        onChange={(e) => handleChange(e)}
        value={newReview.floor}
        type="text"
        name="floor"
        className="floor"
        placeholder="Floor"
        required
      />{" "}
      <br />
      <input
        onChange={(e) => handleChange(e)}
        value={newReview.years}
        type="text"
        name="years"
        className="years-employeed"
        placeholder="Years Employeed"
        required
      />
      <input
        onChange={(e) => handleChange(e)}
        value={newReview.management}
        type="text"
        name="management"
        className="admin-management"
        placeholder="Admin/Management"
        required
      />
      <input
        onChange={(e) => handleChange(e)}
        value={newReview.salary}
        type="text"
        name="salary"
        className="salary"
        placeholder="Salary"
        required
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
        value={newReview.comment}
        name="comment"
        id=""
        cols="30"
        rows="10"
        className="comment"
        placeholder="Leave a comment..."
        required
      ></textarea>{" "}
      <br />
      <button className="submitReview">Submit</button>
    </form>
  );
}

export default ReviewForm;
