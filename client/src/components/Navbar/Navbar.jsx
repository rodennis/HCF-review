import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../photos/HCFLogo.png";
import "./Navbar.css";
import UserImage from "../../photos/avatar.png";
import { signOut } from "../../services/users";
import Maginify from '../../photos/magnify.png'

function Navbar(props) {
  const { setFoundFacilities, facilities, setNotFound, user, setUser } = props;

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [hamburger, setHamburger] = useState(false);

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

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  const handleSignOut = async () => {
    await signOut();
    setUser(null);
  };

  return (
    <div>
      <nav>
        <div className="left-side">
          <Link className="link" to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="middle-side">
          <Link to='/mobile-search'><button className="magnify-search"><img src={Maginify} alt="maginify glass" /></button></Link>
          <form className='nav-search-form' onSubmit={handleSubmit}>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="texttext"
              className="hospital"
              placeholder="Hospital Name"
            />
            <input
              onChange={(e) => setCity(e.target.value)}
              value={city}
              type="texttext"
              className="city"
              placeholder="City"
            />
            <input
              onChange={(e) => setState(e.target.value)}
              value={state}
              type="texttext"
              className="state"
              placeholder="State"
            />
            <button className="hospital-search">Search</button>
          </form>
        </div>
        <div className="user-profile-div">
          <div className="user-profile" onClick={toggleHamburger}>
            <img className="user-image" src={UserImage} alt="" />
            <br />
            <p>{user.username}</p>
          </div>
      <div
        className="drop-down"
        style={{ display: hamburger ? "inline" : "none" }}
      >
        <Link className="Link" onClick={toggleHamburger} to="/profile">
          Profile
        </Link>
        <br />
        <Link className="Link" onClick={handleSignOut} to="/">
          Log Out
        </Link>
      </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
