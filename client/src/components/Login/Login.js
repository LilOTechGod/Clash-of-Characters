import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutation';
import './index.css';

import Auth from '../../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="main-container">
        <div className="login-container">
        <h4 className="login-class">Login</h4>
        </div>
          {data ? (
            <p>
              LETS PLAY!!!!{' '}
              <Link to="/battleScreen"></Link>
            </p>
          ) : (
            <div class="container">
              <form onSubmit={handleFormSubmit} id='form_style'>
                <label className="lname">Emal: </label>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <label className="lname">Password: </label>
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <label className="lname">Submit: </label>
                <button
                  className="login-button"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          )}

          {error && (
            <div>
              {error.message}
            </div>
          )}
      
    </main>
  );
};

export default Login;

  // <form action="action_page.php">

  //
  //   <input type="text" id="fname" name="firstname" placeholder="Your name..">

  //
  //   <input type="text" id="lname" name="lastname" placeholder="Your last name..">

  //   <input type="submit" value="Submit">

  // </form>
