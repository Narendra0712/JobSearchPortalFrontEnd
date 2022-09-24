import axios from "axios";
import React, { useState } from "react";
import { JOBPROVIDERLOGIN } from "../../services/jobproviderservices";
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

const JobProviderLogin = () => {
  const [username,setUserName]=useState ("")
  const [password,setPassword]=useState ("")
  const navigate =useNavigate()
 function handleClick(e)
 {
   e.preventDefault();
   if (username.length === 0 ) {
    toast.warning("Enter User Name")
  }
  else if (password.length === 0) {
    toast.warning("Enter Password")
  }
  else {
   const postdata ={
    username,
    password,
   };
   axios.post(JOBPROVIDERLOGIN,postdata,)
   .then((response) =>{

    const result = response.data
    console.log(result["data"])

    if (result["status"] === "success") {
      toast.success("Login Succesfull !")

      const { username,password} = result["data"];
      sessionStorage["Admin UserName"] = username;
      sessionStorage["Admin Password"] = password;
      
      navigate("/JobProviderHome")
    }
    else {
      toast.error("Login Failed !")
    }
   });

  }
};
  return (
    <>
      <section className="wrapper">
        <form className="form-right">
          <h2 className="text-center text-dark">Wel Come to Jobs Adda</h2>
          <h2 className="text-uppercase">Job Provider Login</h2>

          <div className="mb-3">
            <label>User Name</label>
            <input
              type="text"
              className="input-field"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <p className="text-left">
            Click
            <a href="JobProviderRegistration"> Here </a>
            to Register
          </p>
          <div className="form-field">
          <input
              type="submit"
              value="Login"
              className="register"
              name="register"
              onClick={handleClick}
            ></input>
          </div>
        </form>
      </section>
    </>
  );
};

export default JobProviderLogin;
