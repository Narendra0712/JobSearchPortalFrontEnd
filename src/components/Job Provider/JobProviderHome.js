import React from "react";

export const JobProviderHome = () => {
  return (
    <>
      <div id="page-content-wrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
          <div class="d-flex align-items-center">
            <i
              class="fas fa-align-left primary-text fs-4 me-3"
              id="menu-toggle"
            ></i>
            <h2 class="fs-2 m-0">Job Provider Dashboard</h2>
          </div>
        </nav>

        <div class="container-fluid px-4">
          <div class="row g-3 my-2">
            <div class="col-md-3">
              <div class="p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2 text-dark">View Profile</h3>
                  <a
                    href="JobProviderProfile"
                    class="btn btn-danger active"
                    role="button"
                    aria-pressed="true"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="p-3 bg-secondary shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2 text-white">View Job Seekers</h3>
                  <a
                    href="ViewAllJobSeeker"
                    class="btn btn-danger active"
                    role="button"
                    aria-pressed="true"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="p-3 bg-info shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2 text-dark">View All Jobs</h3>
                  <a
                    href="ViewAllPostedJobs"
                    class="btn btn-danger active"
                    role="button"
                    aria-pressed="true"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="p-3 bg-danger shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2 text-white">Manage Employees</h3>
                  <a
                    href="ManageJobProvider"
                    class="btn btn-dark active"
                    role="button"
                    aria-pressed="true"
                  >
                    Manage
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="p-3 bg-secondary shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2 text-white">Post New Jobs</h3>
                  <a
                    href="PostJobs"
                    class="btn btn-danger active"
                    role="button"
                    aria-pressed="true"
                  >
                    Post
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobProviderHome;
