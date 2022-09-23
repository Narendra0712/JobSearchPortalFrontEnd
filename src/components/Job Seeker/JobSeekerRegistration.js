import React, { useState } from "react";


export const JobSeekerRegistration = () => {
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [emailid, setEmailid] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const student = { fname, mname, lname, emailid,mobilenumber,dob,age, gender,address,username,password };
    console.log(student);
    fetch("http://localhost:9009/addjobseekers", {
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
          <h2 className="text-uppercase text-center">Registration form</h2>
          <div className="row">
            <div className="mb-3">
              <label>First Name</label>
              <input
                type="text"
                className="input-field"
                required
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Middle Name</label>
              <input
                type="text"
                className="input-field"
                required
                value={mname}
                onChange={(e) => setMname(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Last Name</label>
              <input
                type="text"
                className="input-field"
                required
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="mb-3">
            <label>Email Id</label>
            <input
              type="text"
              className="input-field"
              required
              value={emailid}
              onChange={(e) => setEmailid(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Mobile Number</label>
            <input
              type="text"
              className="input-field"
              required
              value={mobilenumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Date Of Birth</label>
            <input
              type="text"
              className="input-field"
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Age</label>
            <input
              type="text"
              className="input-field"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Gender</label>
            <input
              type="text"
              className="input-field"
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
              <label>Address</label>
              <input
                type="text"
                className="input-field"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></input>
            </div>
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

export default JobSeekerRegistration;