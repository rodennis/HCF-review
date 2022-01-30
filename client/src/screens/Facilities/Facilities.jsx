import React from "react";
import FacilityCard from "../../components/FacilityCard/FacilityCard";
import "./Facilities.css";

function Facilities({ name, foundFacilities, notFound }) {
  return (
    <div className="facilitiesDiv">
      <FacilityCard
        name={name}
        foundFacilities={foundFacilities}
        notFound={notFound}
      />
    </div>
  );
}

export default Facilities;
