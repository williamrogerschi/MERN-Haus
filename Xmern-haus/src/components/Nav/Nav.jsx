import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "../Login/Login";
import Header from "../Header/Header"; // Import the Header component
import './nav.css';

const Nav = (props) => {
  const [showContainer, setShowContainer] = useState(false);

  const openContainer = () => {
    setShowContainer(true);
  };

  const closeContainer = () => {
    setShowContainer(false);
  };

  const handleLogout = () => {
    props.setUserData(null);
  };

  const location = useLocation();

  return (
    <div className="nav-header">
      {/* Render the Header component */}
      <Header location={location} />

      <div className="navbar-content">
        <Link className="nav-a-logo" to="/">
          <img
            height="100px"
            width="100px"
            src="mern_logo_black.png"
            alt="pizza-logo"
          />
        </Link>
        <div className="navbar-links">
          <Link className="nav-a" to="/Pizza">
            Pizzas
          </Link>
          <Link className="nav-a" to="/CYOP">
            CYOP
          </Link>
          <a
            className="nav-a"
            onClick={props.userData ? handleLogout : openContainer}
          >
            {props.userData ? `${props.userData.user_name} Logout` : "Login"}
          </a>
        </div>
      </div>
      {showContainer && (
        <div className="login-container">
          <Login
            onClose={closeContainer}
            userData={props.userData}
            setUserData={props.setUserData}
          />
        </div>
      )}
    </div>
  );
};

export default Nav;
