import React, { useState } from "react";
import { userCreate } from "../api/adapters";
import "../styles/form.css";

const Login = () => {
  const [values, setValues] = useState({ username: "", password: "" });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    userCreate(values);
  };

  console.log(values.password);

  return (
    <>
      <section className="hero is-transparent is-bold is-small">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1">Login</h1>
          </div>
        </div>
      </section>
      <form onSubmit={handleFormSubmit} className="container form is-large">
        <div className="field">
          <label className="label is-medium">Enter Username</label>
          <div className="control has-icons-left">
            <input
              onChange={handleInputChange}
              className="input is-medium"
              type="text"
              name="username"
              value={values.username}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label is-medium">Enter Password</label>
          <div className="control has-icons-left">
            <input
              onChange={handleInputChange}
              className="input is-medium"
              type="password"
              name="password"
              value={values.password}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link is-medium">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
