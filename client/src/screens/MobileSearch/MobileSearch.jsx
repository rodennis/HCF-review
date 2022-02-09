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
      <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder='Hospital'/>
      <input onChange={e => setCity(e.target.value)} value={city} type="text" placeholder='City'/>
      <input onChange={e => setState(e.target.value)} value={state} type="text" placeholder='State'/>
      <button>Search</button>
    </form>
  </div>;
}

export default MobileSearch;
