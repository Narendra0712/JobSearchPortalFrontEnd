import React, { useState } from "react";

export const UpdateJobs = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [totalVacancy, setTotalVacancy] = useState("");
  const [postDate, setPostDate] = useState("");
  const [postStatus, setPostStatus] = useState("");
  
  const handleClick = (e) => {
    e.preventDefault();
    const updatejob = { jobid, jobTitle, salary,location,jobCategory,jobDescription,totalVacancy,postDate,postStatus};
    console.log(updatejob);
    fetch("http://localhost:9009/jobprovider/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatejob),
    }).then(() => {
      console.log("New Student added");
    });
  };
  return (
    <>
      <section className="wrapper">
        <form className="form-right">
          <h2 className="text-uppercase text-center">Update Jobs</h2>
          <div className="row">
            <div className="mb-3">
              <label>Job Titile</label>
              <input
                type="text"
                className="input-field"
                required
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Salary</label>
              <input
                type="text"
                className="input-field"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label>Job Location</label>
              <input
                type="text"
                className="input-field"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="mb-3">
            <label>Job Category</label>
            <input
              type="text"
              className="input-field"
              required
              value={jobCategory}
              onChange={(e) => setJobCategory(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Job Description</label>
            <input
              type="text"
              className="input-field"
              required
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Total Vacancy</label>
            <input
              type="text"
              className="input-field"
              required
              value={totalVacancy}
              onChange={(e) => setTotalVacancy(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Post Date</label>
            <input
              type="text"
              className="input-field"
              required
              value={postDate}
              onChange={(e) => setPostDate(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label>Post Status</label>
            <input
              type="text"
              className="input-field"
              required
              value={postStatus}
              onChange={(e) => setPostStatus(e.target.value)}
            ></input>
          </div>
          <div className="form-field">
            <input
              type="submit"
              value="Update Job"
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

export default UpdateJobs;
