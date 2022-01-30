import "./Facility.css";
import { useEffect, useState } from "react";
import { updateReview } from "../../services/reviews";
import { useParams} from "react-router-dom";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import Reviews from "../../components/Reviews/Reviews";
import emailjs from "emailjs-com";
import SingleFacility from '../../components/SingleFacility/SingleFacility'

function Facility({ facilities, user }) {
  const params = useParams();
  const userID = process.env.REACT_APP_USER_ID;

  const [facility, setFacility] = useState({});
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [newReview, setNewReview] = useState({
    position: "",
    ratio: "",
    floor: "",
    years: "",
    management: "",
    salary: "",
    comment: "",
    rate: 0,
    username: "",
    approved: false,
  });

  useEffect(() => {
    const foundFacility = facilities.find((facility) => {
      return facility._id === params.id;
    });
    setFacility(foundFacility);
    setNewReview({ ...newReview, rate: rating });
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
    setNewReview({ ...newReview, username: user?.username });
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
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div>
      <SingleFacility facility={facility}/>
      <ReviewForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        rating={rating}
        setRating={setRating}
        hover={hover}
        setHover={setHover}
        newReview={newReview}
      />
      <Reviews facility={facility} />
    </div>
  );
}

export default Facility;
