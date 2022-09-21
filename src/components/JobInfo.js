
import React, { useEffect, useState } from "react";

export const JobInfo = () => {
  const [job, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9009/getalljobs")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);
  return (
    <>
      <h1 className="text-center mt-5">Avilable Jobs List</h1><hr></hr>
      <section className="intro">
    
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="card shadow-2-strong">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-borderless mb-0">
                          <thead>
                            <tr>
                              <th className="text-dark">Job Id</th>
                              <th className="text-dark">Job Titile</th>
                              <th className="text-dark">Salary</th>
                              <th className="text-dark">Job Location</th>
                              <th className="text-dark">Job Category</th>
                              <th className="text-dark">Job Description</th>
                              <th className="text-dark">Total Vacancies</th>
                              <th className="text-dark">Post Date</th>
                              <th className="text-dark">Post Status</th>

                            </tr>
                          </thead>
                          <tbody>
                            {job.map((job) => (
                              <tr key={job.id}>
                                <td>{job.job_Id}</td>
                                <td>{job.job_Title}</td>
                                <td>{job.salary}</td>
                                <td>{job.location}</td>
                                <td>{job.job_Category}</td>
                                <td>{job.job_Description}</td>
                                <td>{job.total_Vacancy}</td>
                                <td>{job.post_Date}</td>
                                <td>{job.post_Status}</td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-warning btn-sm px-3"
                                  >
                                    Update
                                    <i className="fas fa-times"></i>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger btn-sm px-3"
                                  >
                                    Delete
                                    <i className="fas fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </section>
    </>
  );
};


export default JobInfo
