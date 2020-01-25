import React, { useState } from "react";
import { userCreate } from "../api/adapters";
import "../styles/form.css";
import { LoginContext } from "../context/loginContext";
import { Redirect, navigate } from '@reach/router'
const Register = ({ user_id, token }) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    age: "",
    city: "",
    avatar: "",
    bio: ""
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    userCreate(values)
    .catch(error => console.log(error));
    navigate("login");
  };

  const renderFormOrRedirect = () => {
    if (user_id && token) {
      return <Redirect  to="/profile" noThrow/>;
    } else {
      return (
        <>
          <section className="hero is-transparent is-bold is-small">
            <div className="hero-body">
              <div className="container">
                <h1 className="title is-size-1">Register</h1>
              </div>
            </div>
          </section>
          <form onSubmit={handleFormSubmit} className="container form is-large">
            <div className="field">
              <label className="label is-medium">Create Username</label>
              <div className="control has-icons-left">
                <input
                  required
                  onChange={handleInputChange}
                  className="input is-medium"
                  type="text"
                  name="username"
                  value={values.username}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label is-medium">Create Password</label>
              <div className="control has-icons-left">
                <input
                  required
                  onChange={handleInputChange}
                  className="input is-medium"
                  type="password"
                  name="password"
                  value={values.password}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label is-medium">Enter Age</label>
              <div className="control">
                <input
                  required
                  onChange={handleInputChange}
                  className="input is-medium"
                  type="text"
                  name="age"
                  value={values.age}
                />
              </div>
            </div>
            <div className="field">
              <label className="label is-medium">Enter City</label>
              <div className="control has-icons-left">
                <input
                  required
                  onChange={handleInputChange}
                  className="input is-medium"
                  type="text"
                  name="city"
                  value={values.city}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-building" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label is-medium">Enter Avatar URL</label>
              <div className="control has-icons-left">
                <input
                  required
                  onChange={handleInputChange}
                  className="input is-medium"
                  type="text"
                  name="avatar"
                  value={values.avatar}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user-secret" />
                </span>
              </div>
            </div>
            <label className="label is-medium">Enter Bio</label>
            <textarea
              required
              onChange={handleInputChange}
              className="textarea"
              type="text"
              name="bio"
              value={values.bio}
            ></textarea>
            <br />
            <div className="field">
              <div className="control">
                <button
                  className="button is-link is-light is-medium"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </>
      );
    }
  };

  return <>{renderFormOrRedirect()}</>;
};

const RegisterWithContext = () => {
    return (
        <LoginContext.Consumer>
        {value => {
        return <Register {...value} />;
        }}
    </LoginContext.Consumer>
    );
};

export default RegisterWithContext;
