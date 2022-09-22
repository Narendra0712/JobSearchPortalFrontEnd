import React, { useState } from "react";

export const DeleteJobs = () => {
  const [jobid, setJobId] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const deletejob = { jobid };
    console.log(deletejob);
    fetch("http://localhost:9009/jobprovider/delete?adminid=1", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deletejob),
    }).then(() => {
      console.log("New Student added");
    });
  };
  return (
    <>
      <section className="wrapper">
        <form className="form-right">
          <h2 className="text-uppercase text-center">Delete Job Details</h2>
          <div className="row">
            <div className="mb-3">
              <label>Enter Job Id</label>
              <input
                type="text"
                className="input-field"
                required
                value={jobid}
                onChange={(e) => setJobId(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form-field">
            <input
              type="submit"
              value="Delete Job"
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

export default DeleteJobs;
