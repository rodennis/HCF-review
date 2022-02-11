import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import './MobileSearch.css'

function MobileSearch({setFoundFacilities, setNotFound, facilities}) {
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line array-callback-return
    let foundFacility = facilities.filter((facility) => {
      if (
        facility.name.toLowerCase().includes(name) &&
        facility.city.toLowerCase().includes(city) &&
        facility.state.toLowerCase().includes(state)
      ) {
        if (name || city || state !== "") {
          return facility;
        }
      }
    });
    setFoundFacilities(foundFacility);
    setNotFound(name);
    setName("");
    setCity("");
    setState("");
    navigate("/facilities");
  };
  return <div>
    <form className='mobile-search-form' onSubmit={handleSubmit}>
      <input className='mobile-hospital' onChange={e => setName(e.target.value)} value={name} type="text" placeholder='Hospital'/><br/>
      <input className='mobile-city' onChange={e => setCity(e.target.value)} value={city} type="text" placeholder='City'/><br/>
      <input className='mobile-state' onChange={e => setState(e.target.value)} value={state} type="text" placeholder='State'/><br/>
      <button className='mobile-hospital-search'>Search</button>
    </form>
  </div>;
}

export default MobileSearch;
