import axios from "axios";
import React, { useState } from "react";
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()

  const handleApi = () => {
    console.log({ username, password });
    if (username.length === 0) {
      toast.error("please enter email");
    } else if (password.length === 0) {
      toast.error("please enter password");
    } else {
      const body={username, password}
      axios
        .post("http://localhost:9009/admin/login", body)
        .then((response) => {
         
        const result = response.data

          if (result['status'] === 'error') {
            toast.error('invalid email or password')
          } else {
            sessionStorage['token'] = result['data']['token']
            sessionStorage['username'] = result['data']['username']

            console.log("Narendra1")
            alert("Login Succesful !");
            navigate("/About")
        }
      })
        .catch((error) => {
          console.log(error);
          console.log("Kane")

          alert("Login Failed !");
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
            <button onClick={handleApi}>Login</button>
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

export default AdminLogin;
