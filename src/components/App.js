import React, { useState } from 'react'
import { Router } from '@reach/router'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Sneakers from '../pages/Sneakers'
import Profile from '../pages/Profile'
import '../styles/App.css'
import { LoginContext } from "../context/loginContext"
const App = () => {

    const [token, setToken] = useState(localStorage.getItem('token') || " ")
    const [user_id, setUser ] = useState(localStorage.getItem('user_id') || "")

    return (
                <LoginContext.Provider
                value={{
                    token,
                    user_id,
                    setToken,
                    setUser
                }}
                >
                <Navbar />
            <Router>

                <Home path="/"  />
                <Profile path="profile"   />
                <Register path="register"   />
                <Login path="login"  />
                <Sneakers path="sneakers/page/:number"/> 
            </Router>
                <Footer />
                </LoginContext.Provider>
        
    )
}

export default App