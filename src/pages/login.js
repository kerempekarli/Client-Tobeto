import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '../store/actions/authActions';

export default function Login() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
    const [username, setUsername] = useState('');
  
    const handleLogin = () => {
      dispatch(loginUser({ username }));
    };
  
    const handleLogout = () => {
      dispatch(logoutUser());
    };
  
    return (
      <div>
        {isAuthenticated ? (
          <div>
            <p>Welcome, {username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
  );
};