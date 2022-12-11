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
      <div className="">
        <div>
          <Link className="" to="/">
            <h1 className="clash-title">Clash of Characters</h1>
          </Link>
        </div>
        <div>
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
      </div>
    </header>
  );
};

export default Header;
