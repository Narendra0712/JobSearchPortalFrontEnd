import React, { useEffect, useState } from "react";

export const ManageJobProvider = () => {
  return (
    <>
      <div id="page-content-wrapper">
      <div className="wrapper">
        <h2 class="fs-2 m-0 py-5 px-5">Manage Profile</h2>
      </div>

        <div class="container-fluid px-4">
          <div class="row g-3 my-2">
            <div class="col-md-3">
              <div class="p-3 bg-warning shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2 text-dark">Update Profile</h3>
                  <a
                    href="UpadateJobProviderProfile"
                    class="btn btn-danger active"
                    role="button"
                    aria-pressed="true"
                  >
                    Update
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="p-3 bg-danger shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <h3 class="fs-2 text-light">Delete Profile</h3>
                  <a
                    href="DeleteJobProvider"
                    class="btn btn-dark active"
                    role="button"
                    aria-pressed="true"
                  >
                    Delete
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

export default ManageJobProvider;
