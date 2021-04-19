import React from "react";
import { NavLink } from "react-router-dom";

const ViewUser = () => {
  return (
    <>
      <div className="view-section">
        <div className="container">
          <div className="view-wrapper py-5">
            <NavLink to="/" className="btn btn-primary my-5 ">
              Back to Home
            </NavLink>
            <h1>User Details</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewUser;
