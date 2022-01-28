import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Facility.css";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import { updateReview } from "../../services/reviews";
import Reviews from '../../components/Reviews/Reviews'
import emailjs from 'emailjs-com'
import Rating from '../../components/Rating/Rating'

function Facility({ facilities, user }) {
  const params = useParams();
  const userID = process.env.REACT_APP_USER_ID

  const [facility, setFacility] = useState({});
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [toggle, setToggle] = useState(false)
  const [dispForm, setDispForm] = useState(false)
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
    // emailjs.sendForm('service_tw56ycr', 'template_f14i90e', e.target, userID)
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    // e.target.reset()
    setToggle(prevToggle => !prevToggle)
  };

  const handleClick = () => {
    setDispForm(prevDispForm => !prevDispForm)
  }

  return (
    <div>
      {facility && (
        <div className="facility-info-div">
          <div className="facility-photo-and-info">
            <div className="clicked-facility-image">
              <img src={facility.image} alt="facility" />
            </div>
            <div className="clicked-facility-info">
              <h1>{facility.name}</h1>
              <h2>Facility Info</h2>
              <h3>Address: {facility.address}</h3>
              <h3>Phone #: {facility.phone}</h3>
              <Rating facility={facility}/>
            </div>
          </div>
          <div className="facility-about">
            <h2>About</h2>
            <p>{facility.about}</p>
          </div>
        </div>
      )}
      <h4>Add a <button className='add-review' onClick={handleClick}>Review</button></h4>
      <ReviewForm
        dispForm={dispForm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        position={newReview.position}
        salary={newReview.salary}
        years={newReview.years}
        management={newReview.management}
        floor={newReview.floor}
        ratio={newReview.ratio}
        comment={newReview.comment}
        rating={rating}
        setRating={setRating}
        hover={hover}
        setHover={setHover}
        setNewReview={setNewReview}
        newReview={newReview}
        rate={newReview.rate}
      />
      <Reviews facility={facility}/>
    </div>
  );
}

export default Facility;