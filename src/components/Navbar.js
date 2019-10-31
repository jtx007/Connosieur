import React from 'react'
import { Link } from 'react-router-dom'
import dunk from '../assets/dunkpic.png'

const Navbar = () => {
    return (
        <nav  className="navbar is-light" role="navigation" aria-label="main-navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src={dunk} alt="nike dunk"/>
                    <h1 className="is-size-3">Connosieur</h1>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar