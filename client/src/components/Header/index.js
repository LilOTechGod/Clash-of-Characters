import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import './index.css';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="header-container">
          <Link className="clash-title" to="/">
            Clash of Characters
          </Link>
        <div className="logInOut-container">
          {Auth.loggedIn() ? (
            <>
              <button className="logInOut" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="logInOut" to="/login">
                Login
              </Link>
              <Link className="logInOut" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
    </header>
  );
};

export default Header;
