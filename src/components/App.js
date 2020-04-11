import React, { useState } from "react";
import { Router } from "@reach/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Sneakers from "../pages/Sneakers";
import Profile from "../pages/Profile";
import Posts from "../pages/Posts";
import NewPost from "../pages/NewPost";
import Post from "../pages/Post";
import AnotherProfile from "../pages/AnotherProfile";
import "../styles/App.css";
import { LoginContext } from "../context/loginContext";
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || " ");
  const [user_id, setUserId] = useState(localStorage.getItem("user_id") || "");
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");
  const [user, setUser] = useState(localStorage.getItem("user") || "");

  return (
    <div className="content-container">
      <LoginContext.Provider
        value={{
          token,
          user_id,
          avatar,
          user,
          setToken,
          setUserId,
          setAvatar,
          setUser,
        }}
      >
        <Navbar />
        <Router primary={false}>
          <Home path="/" />
          <Profile path="profile" />
          <Register path="register" />
          <Login path="login" />
          <Sneakers path="sneakers/page/:number" />
          <Posts path="posts" />
          <Post path="/post/:number" />
          <NewPost path="/posts/new" />
          <AnotherProfile path="/profile/:username" />
        </Router>
      </LoginContext.Provider>
        <Footer />
    </div>
  );
};

export default App;
