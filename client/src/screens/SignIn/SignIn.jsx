import React from "react";
import HomeNavbar from "../../components/Navbar/HomeNavbar";
import "./SignIn.css";
import { useState } from "react";
import { signIn } from "../../services/users";
import { useNavigate } from "react-router-dom";

function SignIn({ setUser }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('')

  const loginInfo = {
    email,
    password,
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const user = await signIn(loginInfo);
        setUser(user);
        navigate("/");
    } catch (error) {
      console.log(error);
      setMessage('Incorrect username, or password.')
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <HomeNavbar />
      <form onSubmit={handleSubmit} className="sign-in-form">
        <h1 className="sign-in-title">Sign In</h1>
        {message && <h4>{message}</h4>}
        <input
          type="text"
          className="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          className="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button className="sign-in-button">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
