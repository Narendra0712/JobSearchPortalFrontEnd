import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/about">
            Jobs Adda
          </Link>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="JobProvider"
                >
                  Job Provider
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="ViewAllJobSeeker"
                >
                  Job Seekers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="JobInfo"
                >
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="JobseekerProfile"
                >
                  Jobseeker Profile
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="AdminLogin"
                >
                  Admin 
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="JobProvider"
                >
                  Job Provider
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="JobProvider"
                >
                  Job Seeker
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="AdminHome"
                >
                  Admin Home
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-success text-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
