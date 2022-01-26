import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Facility.css";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import { updateReview } from "../../services/reviews";

function Facility({ facilities, user }) {
  const params = useParams();

  const [facility, setFacility] = useState({});
  const [newReview, setNewReview] = useState({
    position: "",
    ratio: "",
    floor: "",
    years: "",
    management: "",
    salary: "",
    comment: "",
    rating: 0,
    hover: 0,
    username: "",
  });

  useEffect(() => {
    const foundFacility = facilities.find((facility) => {
      return facility._id === params.id;
    });
    setFacility(foundFacility);
    setNewReview({...newReview, username: user?.username})
  }, [facilities, params.id ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    facility.reviews.push(newReview);
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
        position={newReview.position}
        salary={newReview.salary}
        years={newReview.years}
        management={newReview.management}
        floor={newReview.floor}
        ratio={newReview.ratio}
        comment={newReview.comment}
      />
      { 
      facility && facility.reviews ?
        facility.reviews.map(review => (
          <div key={review._id}>
            <h1>{review.position}</h1>
          </div>
        )) : <h1>Loading...</h1>
      }
    </div>
  );
}

export default Facility;
