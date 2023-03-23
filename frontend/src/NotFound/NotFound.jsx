import React from "react";
import { Link } from "react-router-dom";
import "./notFound.scss";
const NotFound = () => {
  return (
    <div className='error'>
      <div>
        <h1>Oops! Page not Found.</h1>
        <span>
          Return to home page.{" "}
          <Link to='/' style={{ textDecoration: "none" }}>
            Home
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NotFound;
