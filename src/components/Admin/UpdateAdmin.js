import React, { useState } from "react";

export const UpdateAdmin = () => {
   
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    
    const handleClick = (e) => {
      e.preventDefault();
      const updateadmin = { username, password};
      console.log(updateadmin);
      fetch("http://localhost:9009/admin/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateadmin),
      }).then(() => {
        console.log("Admin Updated Successfully !");
      });
    };
    return (
      <>
        <section className="wrapper">
          <form className="form-right">
            <h2 className="text-uppercase text-center">Update Admin Details</h2>
            <div className="row">
              <div className="mb-3">
                <label>User Name</label>
                <input
                  type="text"
                  className="input-field"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="text"
                  className="input-field"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="form-field">
              <input
                type="submit"
                value="Update"
                className="register"
                name="register"
                onClick={handleClick}
              ></input>
            </div>
          </form>
        </section>
      </>
    );
}

export default UpdateAdmin
