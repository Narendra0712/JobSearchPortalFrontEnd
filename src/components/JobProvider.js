
import React, { useEffect, useState } from "react";

export const JobProvider = () => {
  const [employer, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9009/getallemployer")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);
  return (
    <>
      <h1 className="text-center mt-5">Job Providers List</h1><hr></hr>
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
                              <th className="text-dark">Employer Id</th>
                              <th className="text-dark">First Name</th>
                              <th className="text-dark">Middle Name</th>
                              <th className="text-dark">Last Name</th>
                              <th className="text-dark">Company Name</th>
                              <th className="text-dark">Mobile Number</th>
                              <th className="text-dark">Email Id</th>
                            </tr>
                          </thead>
                          <tbody>
                            {employer.map((employer) => (
                              <tr key={employer.id}>
                                <td>{employer.jobProviderid}</td>
                                <td>{employer.firstName}</td>
                                <td>{employer.middleName}</td>
                                <td>{employer.lastName}</td>
                                <td>{employer.companyName}</td>
                                <td>{employer.mobileNo}</td>
                                <td>{employer.emailid}</td>
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


export default JobProvider
