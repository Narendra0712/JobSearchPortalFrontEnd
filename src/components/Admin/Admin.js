
import React, { useState } from "react";
import swal from "sweetalert";

export const Admin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = (e) => {
    swal({
      title: "Registration Succesfull !",
      icon: "success",
      button: "Ok",
    });

    e.preventDefault();
    const student = {
      username,
      password,
    };
    console.log(student);
    fetch("http://localhost:9009/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("New Student added");
    });
  };
  return (
    <>
      <section className="wrapper">
        <form className="form-right">
          <h2 className="text-center text-dark">Wel Come to Jobs Adda</h2>
          <h2 className="text-uppercase text-center">Admin Registration </h2>
          <div className="row">
          <div className="mb-3">
            <label>Set User Name</label>
            <input
              type="text"
              className="input-field"
              required
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>

          <div className="mb-3">
            <label>Set Password</label>
            <input
              type="password"
              className="input-field"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="form-field">
            <input
              type="submit"
              value="Register"
              className="register"
              name="register"
              onClick={handleClick}
            ></input>
          </div>
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

export default Admin;
