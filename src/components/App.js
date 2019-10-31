import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history' 
import Navbar from './Navbar'
import Footer from './Footer/Footer'
import Home from './Home/Home'

const App = () => {
    return (
            <Router history={history}>
                <Navbar />
                <>
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </>
                <Footer />
            </Router>
        
    )
}

export default App