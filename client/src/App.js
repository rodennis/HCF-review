import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { verifyUser } from "./services/users";
import Home from "./screens/Home/Home";
import api from "./services/apiConfig";
import SignIn from "./screens/SignIn/SignIn";
import Facilities from "./screens/Facilities/Facilities";
import Navbar from "./components/Navbar/Navbar";
import HomeNavbar from "./components/Navbar/HomeNavbar";
import Facility from "./screens/Facility/Facility";
import CreateFacility from "./screens/CreateFacility/CreateFacility";
import UserProfile from "./screens/UserProfile/UserProfile";
import SignUp from "./screens/SignUp/SignUp";
import MobileSearch from './screens/MobileSearch/MobileSearch'

function App() {
  const [user, setUser] = useState(null);
  const [facilities, setFacilities] = useState([]);
  const [foundFacilities, setFoundFacilities] = useState([]);
  const [notFound, setNotFound] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const getReviews = async () => {
      const res = await api.get("/reviews");
      setFacilities(res.data);
    };
    getReviews();
  }, []);
  return (
    <div className="App">
      {user ? (
        <Navbar
          user={user}
          setUser={setUser}
          setFoundFacilities={setFoundFacilities}
          facilities={facilities}
          setNotFound={setNotFound}
        />
      ) : (
        <HomeNavbar />
      )}
      <Routes>
        <Route path="/" element={<Home setFoundFacilities={setFoundFacilities} facilities={facilities} setNotFound={setNotFound}/>}/>
        <Route path="/signIn" element={<SignIn setUser={setUser} />} />
        <Route path="/signUp" element={<SignUp setUser={setUser} />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/create-facility" element={<CreateFacility />} />
        <Route path="/facilities" element={<Facilities foundFacilities={foundFacilities} notFound={notFound} />}/>
        <Route path="/facility/:id" element={<Facility facilities={facilities} user={user} />}/>
        <Route path='/mobile-search' element={<MobileSearch setNotFound={setNotFound} facilities={facilities} setFoundFacilities={setFoundFacilities}/>}/>
      </Routes>
    </div>
  );
}

export default App;
