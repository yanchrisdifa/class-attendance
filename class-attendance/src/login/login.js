import { useState } from "react";
import "./login.scss";

const userDatas = require("../data/users.json");

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e, type) => {
    const val = e.target.value;

    if (val.length >= 4) {
      if (type === "username") {
        setUsername(val);
        console.log(username);
      } else if (type === "password") {
        setPassword(val);
        console.log(password);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(username);
    console.log(password);
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="forms-content">
          <div className="logo-image-container"></div>
          <h2>Platform Name</h2>
          <form>
            <div className="form form-login form-login-username">
              <p>Username</p>
              <input type="text" placeholder="Input your username" onChange={(e) => handleOnChange(e, "username")} />
            </div>
            <div className="form form-login form-login-password">
              <p>Password</p>
              <input type="password" placeholder="Input your password" onChange={(e) => handleOnChange(e, "password")} />
            </div>
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="hero-image-container"></div>
    </div>
  );
};

export default Login;
