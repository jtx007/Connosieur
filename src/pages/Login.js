import React, { useState } from "react";
import { userLogin, getCurrentUser } from "../api/adapters";
import "../styles/form.css";
import { navigate, Redirect } from '@reach/router'
import { LoginContext } from '../context/loginContext'
import { ToastContainer } from 'react-toastify'
import * as toastNotifications from '../utils/toastNotifications'
import "react-toastify/dist/ReactToastify.css";

const Login = (props) => {
  const [values, setValues] = useState({ username: "", password: "" });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value.trim() });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const response = await (await userLogin(values)).json()
      localStorage.setItem("token", response.jwt);
      props.setToken(response.jwt);
      const currentUser = await (await getCurrentUser()).json()
      localStorage.setItem("user_id", currentUser.id);
      localStorage.setItem("avatar", currentUser.avatarUrl);
      localStorage.setItem("user", currentUser.username);
      props.setUserId(currentUser.id);
      props.setAvatar(currentUser.avatarUrl);
      props.setUser(currentUser.username);
      navigate("profile")
    } catch (error) {
      toastNotifications.errorNotification("Invalid Credentials, please try again")
    }
    
  }

  const renderFormOrRedirect = () => {
    if (props.token && props.user_id) {
      return <Redirect  to="profile" noThrow/>
    } else {
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
              required
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
                required
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
        <ToastContainer />
        </>
      )
    }
  }


  return (
      <>
        {renderFormOrRedirect()}
      </>
  );
};


const LoginWithContext = () => {
  return (
    <LoginContext.Consumer>
        {value => {
          return <Login {...value} />
        }}
    </LoginContext.Consumer>
  )
}

export default LoginWithContext;
