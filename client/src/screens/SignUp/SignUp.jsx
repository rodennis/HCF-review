import { useState } from "react";
import "./SignUp.css";
import { signUp } from "../../services/users";
import { useNavigate } from "react-router-dom";

function SignUp({setUser}) {
  const navigate = useNavigate();

  const [passMessage, setPassMessage] = useState("");
  const [signUpForm, setSignUpForm] = useState({
    username: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const credentials = {
    username: signUpForm.username,
    email: signUpForm.email,
    password: signUpForm.password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signUpForm.password === signUpForm.confPassword) {
      const user = await signUp(credentials);
      setUser(user)
      navigate("/");
    } else {
      setPassMessage("Password and Confirm Password do not match.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpForm({
      ...signUpForm,
      [name]: value,
    });
  };

  return (
    <div className="signup-div">
      <div className="signup-form-div">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {passMessage && <h2>{passMessage}</h2>}
        <input
          className="signup-username"
          onChange={handleChange}
          type="text"
          name="username"
          value={signUpForm.username}
          placeholder="Username"
          required
          />
        <br />
        <input
          className="signup-email"
          onChange={handleChange}
          type="text"
          name="email"
          value={signUpForm.email}
          placeholder="Email"
          required
          />
        <br />
        <input
          className="signup-password"
          onChange={handleChange}
          type="password"
          name="password"
          value={signUpForm.password}
          placeholder="Password"
          required
          />
        <br />
        <input
          className="signup-confpass"
          onChange={handleChange}
          type="password"
          name="confPassword"
          value={signUpForm.confPassword}
          placeholder="Confirm Password"
          required
          />
        <br />
        <button className="signup-submit">Sign Up</button>
      </form>
          </div>
    </div>
  );
}

export default SignUp;
