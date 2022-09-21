import axios from "axios";
import React, { useState } from "react";
import { toast } from 'react-toastify'


const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const handleApi = () => {
    console.log({ username, password });
    if (username.length === 0) {
      toast.error("please enter email");
    } else if (password.length === 0) {
      toast.error("please enter password");
    } else {
      axios
        .post("http://localhost:9009/admin/login", { username, password })
        .then((response) => {
          const result = response.data

          if (result['status'] === 'error') {
            toast.error('invalid email or password')
          } else {
            sessionStorage['token'] = result['data']['token']
            sessionStorage['username'] = result['data']['name']

            alert("Login  !");
            
        }
      })
        .catch((error) => {
          console.log(error);
          alert("Login Succesful !");
        });
    }
  };
  return (
    <>
      <section className="wrapper">
        <form className="form-right">
          <h2 className="text-center text-dark">Wel Come to Jobs Adda</h2>
          <h2 className="text-uppercase">Log in</h2>

          <div className="mb-3">
            <label>User Name</label>
            <input
              type="text"
              className="input-field"
              required
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="input-field"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <p className="text-left">
            Click
            <a href="SignUp"> Here </a>
            to Register
          </p>
          <div className="form-field">
            <input
              type="submit"
              value="Login"
              className="register"
              name="login"
              onClick={handleApi}
            ></input>
          </div>
          
        </form>
      </section>
      <footer className="container">
        <br></br>
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>
          © 2022 Jobs Adda, Inc. · <a href="#">Privacy</a> ·
          <a href="#">Terms</a>
        </p>
      </footer>
    </>
  );
};

export default Login;
