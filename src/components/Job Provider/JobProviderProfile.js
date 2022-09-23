import React, { useEffect, useState } from "react";

export const JobProviderProfile = () => {
  const [employer, setJobProviders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9009/jobprovider/viewjobprovider/1")
      .then((res) => res.json())
      .then((result) => {
        setJobProviders(result);
      });
  }, []);
  return (
    <>
      <h1 className="text-center mt-5">Employees</h1>
      <hr></hr>
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
                            <th className="text-dark">Employee Id</th>
                            <th className="text-dark">First Name</th>
                            <th className="text-dark">Middle Name</th>
                            <th className="text-dark">Last Name</th>
                            <th className="text-dark">Mobile Number</th>
                            <th className="text-dark">Email Id</th>
                          </tr>
                        </thead>
                        <tbody>
                          {employer.map((employer) => (
                            <tr key={employer.id}>
                              <td>{employer.jobproviderid}</td>
                              <td>{employer.fname}</td>
                              <td>{employer.mname}</td>
                              <td>{employer.lname}</td>
                              <td>{employer.mobileno}</td>
                              <td>{employer.emailid}</td>
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

}

export default JobProviderProfile