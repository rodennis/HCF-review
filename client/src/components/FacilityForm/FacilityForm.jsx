import React from "react";
import "./FacilityForm.css";

function FacilityForm({handleChange, handleSubmit, newFacility}) {
  return <form onSubmit={handleSubmit}>
    <label >
    Facility Name{' '}
    <input type="text" className="new-facility-name" onChange={handleChange} value={newFacility.name} name='name'/><br />
    </label>
    <label>
    Facility Street{' '}
    <input type="text" className="new-facility-street" onChange={handleChange} value={newFacility.address} name='address'/><br />
    </label>
    <label>
    Facility City{' '}
    <input type="text" className="new-facility-city" onChange={handleChange} value={newFacility.city} name='city'/><br />
    </label>
    <label>
    Facility State {' '}
    <input type="text" className="new-facility-state" onChange={handleChange} value={newFacility.state} name='state'/><br />
    </label>
    <button className="new-facility-submit">Submit</button>
  </form>;
}

export default FacilityForm;
