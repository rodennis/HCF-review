import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../photos/HCFLogo.png";

function HomeNavbar() {
  return (
    <nav>
      <div className="no-user-left-side">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="no-user-right-side">
        <Link className="sign-in" to={"/signIn"}>
          Sign In
        </Link>
        <Link className="sign-up" to={"/signUp"}>
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default HomeNavbar;
