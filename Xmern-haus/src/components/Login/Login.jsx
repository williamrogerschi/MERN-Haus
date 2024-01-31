import React, { useState, useEffect } from "react";
import axios from "axios";
import './container.css';
import { BASE_URL } from '../../global'


const Login = (props) => {
  const [userData, setUserData] = useState(null);  
  const [username, setUsername] = useState('');


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}users/`); 
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, []);


  const loginUser = () => {
    console.log('Login Started..')
    
    for (let i = 0; i < userData.length; i++) {
      if (username == userData[i].user_name) {
          console.log('user logged in: ', userData[i])
         
          props.setUserData(userData[i])
          console.log('user State: ', props.userData)
          props.onClose()
          break;
      } else {
          console.log('user not found')
      }
    }
    
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const addUser = async ()  => {
    let existingUser = null
    for (let i = 0; i < userData.length; i++) {
      if (username == userData[i].user_name) {
          console.log('user logged in: ', userData[i])
          existingUser = userData[i]                 
          break;
      } 


    }
    if (existingUser == null) {
      const body = {
        user_name: username,
        points: 0
      }
      const response = await axios.post(`${BASE_URL}users/`, body)
      console.log('new user: ',response.data.user)

      props.setUserData(response.data.user)
      props.onClose()
      return response.data
  } 
  }
  const createUser =  async () => {
    console.log('Create Started..')

        const response = await addUser().then(() => {
          console.log('posted')
        })
        
        
 
    }


  return (
    <div className="centered-container">
      <div className="content">
        <div className="login-header">
          <h2 className="login-h2">Login</h2>
          <div className="x-wrapper">
            <button className="x-btn" onClick={props.onClose}>
              x
            </button>
            </div>
        </div>
        
        
        {userData && (
          <div className="login-username">
              Username {userData.username}
            </div>
        )}
        <div className="input-container">
          <input 
            type="text" 
            id="username" 
            onChange={handleUsernameChange} 
            value={username} 
            placeholder="Your Username" />
        </div>
        <div className="input-container">
          <label className='login-password' htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Your Password" />
        </div>
        <div className="login-btn-container">
          <button className="login-btn" onClick={() => loginUser()}>Login</button>
          <button className="login-btn" onClick={() => createUser()}>Create User</button>
        </div>
      </div>
    </div>
  );
};

export default Login;