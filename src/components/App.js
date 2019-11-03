import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history' 
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home/Home'
import Register from './Register'
import Login from './Login'
import Sneakers from './Sneakers'
import './App.css'
const App = () => {
    return (
            <Router history={history}>
                <Navbar />
                <>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/sneakers" exact component={Sneakers} />
                    </Switch>
                </>
                <Footer />
            </Router>
        
    )
}

export default App