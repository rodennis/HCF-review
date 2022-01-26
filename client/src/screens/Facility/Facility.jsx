import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Facility.css";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import { updateReview } from '../../services/reviews'

function Facility({ facilities, user }) {
  const params = useParams();

  const [facility, setFacility] = useState({});

  useEffect(() => {
    const foundFacility = facilities.find((facility) => {
      return facility._id === params.id;
    });
    setFacility(foundFacility);
  }, [facilities, params.id]);

  const [review, setReview] = useState({
    position: "",
    ratio: "",
    floor: "",
    years: "",
    management: "",
    salary: "",
    comment: "",
    username: user.username
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

const handleSubmit = async (event) => {
  event.preventDefault();
  facility.reviews.push(review);
  await updateReview(params.id, facility);
};

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
            </div>
          </div>
          <div className="facility-about">
            <h2>About</h2>
            <p>{facility.about}</p>
          </div>
        </div>
      )}
      <ReviewForm 
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      position={review.position}
      salary={review.salary}
      years={review.years}
      management={review.management}
      floor={review.floor}
      ratio={review.ratio}
      comment={review.comment}
      />
    </div>
  );
}

export default Facility;
