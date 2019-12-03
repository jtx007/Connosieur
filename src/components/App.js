import React, { useState } from 'react'
import { Router } from '@reach/router'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Sneakers from './Sneakers'
import Profile from './Profile'
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