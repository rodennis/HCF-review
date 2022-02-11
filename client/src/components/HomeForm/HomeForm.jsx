import React from "react";
import { useNavigate } from "react-router-dom";

function HomeForm(props) {
  const {
    setHomeName,
    setFoundFacilities,
    facilities,
    homeName,
    setNotFound,
    homeCity,
    setHomeCity,
    homeState,
    setHomeState,
  } = props;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line array-callback-return
    let foundFacility = facilities.filter((facility) => {
      if (
        facility.name.toLowerCase().includes(homeName) &&
        facility.city.toLowerCase().includes(homeCity) &&
        facility.state.toLowerCase().includes(homeState)
      ) {
        if (homeName || homeCity || homeState !== "") {
          return facility;
        }
      }
    });
    setFoundFacilities(foundFacility);
    setNotFound(homeName);
    setHomeName("");
    setHomeCity("");
    setHomeState("");
    navigate("/facilities");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="home-form">
        <h2>Find A Facility</h2>
        <input
          onChange={(e) => setHomeName(e.target.value)}
          value={homeName}
          type="texttext"
          className="home-hospital"
          placeholder="Hospital Name"
        />{" "}
        <br />
        <input
          onChange={(e) => setHomeCity(e.target.value)}
          value={homeCity}
          type="texttext"
          className="home-city"
          placeholder="City"
        />{" "}
        <br />
        <input
          onChange={(e) => setHomeState(e.target.value)}
          value={homeState}
          type="texttext"
          className="home-state"
          placeholder="State"
        />{" "}
        <br />
        <button className="home-hospital-search">Search</button>
      </form>
    </div>
  );
}

export default HomeForm;
