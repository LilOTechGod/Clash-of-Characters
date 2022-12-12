import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../utils/mutation';

import Auth from '../../utils/auth';

const UserUpdate = (props) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [updateUser, { error, data }] = useMutation(UPDATE_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
     
      const { data } = await updateUser({
        variables: {
          email: formState.email,
          password: formState.password,
        },
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
    <main className="">
      <div className="">
        <h4 className="">UserUpdate</h4>
        <div className="">
          {data ? (
            <p>
              LETS PLAY!!!!{' '}
              <Link to="/battleScreen"></Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className="login-button"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Submit
              </button>
            </form>
          )}

          {error && (
            <div>
              {error.message}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default UserUpdate;