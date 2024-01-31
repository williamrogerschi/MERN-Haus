// import { useLocation } from 'react-router-dom'

// const Header = () => {

//     const location = useLocation()


//     let headerImage
//     let headerImageStyle = {}

//     if( location.pathname === '/') {
//         headerImage = 'multiplepizza.jpg'
//         headerImageStyle = {
//             height: '40vh',
//             width: '100%',
//             backgroundImage: `url(${headerImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: '50% 60%',
//             borderBottom: '2px solid black'
//         }
//     } else if(location.pathname === '/Pizza') {
//         headerImage = '2x.jpg'
//         headerImageStyle = {
//             height: '40vh',
//             width: '100%',
//             backgroundImage: `url(${headerImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: '50% 80%',
//             borderBottom: '2px solid black'
//         }
//     } else {
//         null
//     }


//     return (
//         <div className="header" style={{ height: headerImageStyle.height}}>
//             <div className='header-image' style={headerImageStyle}></div>
//         </div>
//     )
// }

// export default Header

import React from "react";

const Header = () => {
  return <div className="header"></div>;
};

export default Header;
