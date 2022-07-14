import { useState } from "react";
import Swal from 'sweetalert2'
import "./login.scss";
import { useNavigate } from 'react-router-dom'

const userDatas = require("../data/users.json");
let oneUserData = {};

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e, type) => {
    const val = e.target.value;

    if (val.length >= 4) {
      if (type === "username") {
        setUsername(val);
      } else if (type === "password") {
        setPassword(val);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username.length >= 4) {
      const loginData = {
        username : username,
        password : password
      }
      console.log(loginData)
      oneUserData = userDatas.find((data) => {
        return (data.username === loginData.username) && (data.password === loginData.password)
      })
      if(oneUserData) {
        Swal.fire({
          icon: 'success',
          title: 'Login Successfully',
          text: 'Continue as this user!',
          confirmButtonText: 'OK!',
          showCancelButton : true
        }).then((resp) => {
          if(resp.isConfirmed){
            if(oneUserData.role.length > 1){
              Swal.fire({
                title : 'Select the user type',
                input : 'select',
                inputOptions : oneUserData.role,
                confirmButtonText : 'Login!',
                showCancelButton : true
              }).then((resp) => {
                if(resp.isConfirmed){
                  navigate('/dashboard')
                }
              })
            } else {
              navigate('/dashboard')
            }
          }
        })
      } else {
        oneUserData = {}
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text : 'Please input correct username or password!',
          cancelButtonText: 'OK!',
          showCancelButton : true,
          showConfirmButton : false
        })
      }
    } else {
      oneUserData = {}
      Swal.fire({
        icon : 'info',
        title : 'Invalid Input!',
        text: 'Please input greater than 3 character',
        cancelButtonText : 'Understand!',
        showCancelButton : true,
        showConfirmButton : false
      })
    }
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
