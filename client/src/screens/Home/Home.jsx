import "./Home.css";
import { useState } from "react";
import HomeForm from "../../components/HomeForm/HomeForm";
import Featured from "../../components/Featured/Featured";

function Home(props) {
  const { setFoundFacilities, facilities, setNotFound } = props;

  const [homeName, setHomeName] = useState("");
  const [homeCity, setHomeCity] = useState("");
  const [homeState, setHomeState] = useState("");

  return (
    <div>
      <div className="call-to-action">
        <div className="call-to-action-hospital-search">
          <HomeForm
            setFoundFacilities={setFoundFacilities}
            homeName={homeName}
            setHomeName={setHomeName}
            homeCity={homeCity}
            setHomeCity={setHomeCity}
            facilities={facilities}
            setNotFound={setNotFound}
            homeState={homeState}
            setHomeState={setHomeState}
          />
        </div>
        <div className="call-to-action-text-div">
          <h1 className="call-to-action-title">HCF-Reviews</h1>
          <div className="line"></div>
          <h2>
            A place for healthcare professionals to come and post truthful, and
            honest reviews about present or past healthcare facilities.{" "}
          </h2>
        </div>
      </div>
      <Featured facilities={facilities}/>
    </div>
  );
}

export default Home;
