import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import jobproviderservices from "../../services/jobproviderservices";

export const UpadateJobProviderProfile = () => {
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [emailid, setEmailid] = useState("");
  const [mobileno, setMobileNumber] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;

  useEffect(() => {
    jobproviderservices
      .getJobProviderById(id)
      .then((response) => {
        setFname(response.data.fname);
        setMname(response.data.mname);
        setLname(response.data.lname);
        setCompanyName(response.data.companyname);
        setEmailid(response.data.emailid);
        setMobileNumber(response.data.mobileno);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const UpdateJobProvider = (e) => {
    e.preventDefault();
    const jobprovider = { fname, mname, lname, companyname, emailid, mobileno };

    if (id) {
      jobproviderservices
        .updateJobProvider(jobprovider)
        .then((response) => {
          console.log(response.data);
          toast.success("Updated Successfully");
          navigate("/JobProviderProfile");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Updation Failed");
        });
    }
  };

  return (
    <>
      <section className="wrapper">
        <form className="form-right">
          <h2 className="text-center text-dark">Wel Come to Jobs Adda</h2>
          <h2 className="text-uppercase text-center">
            Job Provider Registration
          </h2>
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
            <label>Company Name</label>
            <input
              type="text"
              className="input-field"
              required
              value={companyname}
              onChange={(e) => setCompanyName(e.target.value)}
            ></input>
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
              value={mobileno}
              onChange={(e) => setMobileNumber(e.target.value)}
            ></input>
          </div>
          <div className="form-field">
            <input
              type="submit"
              value="Update"
              className="register"
              name="register"
              onClick={UpdateJobProvider}
            ></input>
          </div>
        </form>
      </section>
    </>
  );
};

export default UpadateJobProviderProfile;
