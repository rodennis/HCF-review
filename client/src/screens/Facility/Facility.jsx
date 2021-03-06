import "./Facility.css";
import { useEffect, useState } from "react";
import { updateReview } from "../../services/reviews";
import { useParams } from "react-router-dom";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import Reviews from "../../components/Reviews/Reviews";
import emailjs from "emailjs-com";
import SingleFacility from "../../components/SingleFacility/SingleFacility";
import { Link } from "react-scroll";
import TopArrow from "../../photos/up-arrows.png";

function Facility({ facilities, user }) {
  const params = useParams();
  const userID = process.env.REACT_APP_USER_ID;

  const [facility, setFacility] = useState({});
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [success, setSuccess] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [newReview, setNewReview] = useState({
    position: "",
    ratio: "",
    floor: "",
    years: "",
    management: "",
    salary: "",
    comment: "",
    rate: 1,
    username: "",
    approved: false,
  });

  useEffect(() => {
    const foundFacility = facilities.find((facility) => {
      return facility._id === params.id;
    });
    setFacility(foundFacility);
    setNewReview({ ...newReview, rate: rating });
    setNewReview({ ...newReview, username: user?.username });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facilities, params.id, toggle, rating]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    facility.reviews.push(newReview);
    await updateReview(params.id, facility);
    emailjs
      .sendForm("service_tw56ycr", "template_f14i90e", e.target, userID)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setSuccess((prevSuccess) => !prevSuccess);
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className="mobile-view-div">
      <SingleFacility facility={facility} user={user} />
      {user && success === false && (
        <ReviewForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          rating={rating}
          setRating={setRating}
          hover={hover}
          setHover={setHover}
          newReview={newReview}
        />
      )}
      {success === true && (
        <div className="review-success">
          <h3>
            Thanks for submitting a review. As soon as its been approved it will
            display down below!
          </h3>
        </div>
      )}
      <Reviews facility={facility} />
      <Link to="top" smooth={true} duration={1000}>
        <img className="top-arrow" src={TopArrow} alt="" />
      </Link>
    </div>
  );
}

export default Facility;
