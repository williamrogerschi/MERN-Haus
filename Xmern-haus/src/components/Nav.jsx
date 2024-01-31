// import React, { useState } from "react"
// import Login from "./Login/Login"
// import { Link } from "react-router-dom"

// const Nav = (props) => {
//   const [showContainer, setShowContainer] = useState(false)

//   const openContainer = () => {
//     setShowContainer(true)
//   }

//   const closeContainer = () => {
//     setShowContainer(false)
//   }

//   const handleLogout = () => {
//     props.setUserData(null)
//   }

//   return (
//     <div className="navbar">
//       <Link className="nav-a-logo" to="/">
//         <img
//           height="100px"
//           width="100px"
//           src="mern_logo_black.png"
//           alt="pizza-logo"
//         />
//       </Link>
//       <Link className="nav-a" to="/Pizza">
//         {" "}
//         Pizzas{" "}
//       </Link>
//       <Link className="nav-a" to="/CYOP">
//         {" "}
//         CYOP{" "}
//       </Link>
//       <a
//         className="nav-a"
//         onClick={props.userData ? handleLogout : openContainer}
//       >
//         {props.userData ? `${props.userData.user_name} Logout` : "Login"}
//       </a>
//       {showContainer && (
//         <Login
//           onClose={closeContainer}
//           userData={props.userData}
//           setUserData={props.setUserData}
//         />
//       )}
//     </div>
//   )
// }

// export default Nav

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "./Login/Login";

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

  let headerImage;
  let headerImageStyle = {};

  if (location.pathname === "/") {
    headerImage = "multiplepizza.jpg";
    headerImageStyle = {
      height: "40vh",
      width: "100%",
      backgroundImage: `url(${headerImage})`,
      backgroundSize: "cover",
      backgroundPosition: "50% 60%",
      borderBottom: "2px solid black",
      position: "relative",
    };
  } else if (location.pathname === "/Pizza") {
    headerImage = "2x.jpg";
    headerImageStyle = {
      height: "40vh",
      width: "100%",
      backgroundImage: `url(${headerImage})`,
      backgroundSize: "cover",
      backgroundPosition: "50% 80%",
      borderBottom: "2px solid black",
      position: "relative",
    };
  }

  return (
    <div className="nav-header">
      <div className="header" style={headerImageStyle}>
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
              {props.userData
                ? `${props.userData.user_name} Logout`
                : "Login"}
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
    </div>
  );
};

export default Nav;

