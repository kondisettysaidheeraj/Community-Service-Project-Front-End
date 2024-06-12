import React from "react";
import { Link } from "react-router-dom";
import "./Csp.css"
 const NavBar = () => {
  return (
    <>
    
      <nav id="navbar">
       
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/csp">
            <li>Csp</li>
          </Link>

          <Link to="/airPollution">
            <li>AirPollution</li>
          </Link>

          <Link to="/solutions">
            <li>Solutions</li>
          </Link>

          <Link to="/eventsConducted">
            <li>Events Conducted</li>
          </Link>
          <Link to="/survey">
            Survey Conducted
          </Link>

          <Link to="/aboutUs">
            <li>AboutUs</li>
          </Link>

          <Link to="/contractUs">
            <li>ContcactUs</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;