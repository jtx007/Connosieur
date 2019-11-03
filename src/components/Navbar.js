import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import dunk from '../assets/dunk.ico'

const Navbar = () => {
    return (
        <nav style={{paddingRight: "10px"}}  className="navbar is-dark" role="navigation" aria-label="main-navigation">
            <div className="navbar-brand is-large">
                <Link to="/" className="navbar-item">
                    <img src={dunk} alt="nike dunk"/>
                    <h1 className="is-size-3 has-text-weight-semibold">Connosieur</h1>
                </Link>
            </div>
            <div className="navbar-end">
                <div className="buttons">
                    <NavLink exact to="/" className="button is-dark is-light" activeClassName="is-warning is-light">
                        Home
                    </NavLink>
                    <NavLink exact to="/sneakers" className="button is-dark is-light" activeClassName="is-warning is-light">
                        Sneakers
                    </NavLink>
                    <NavLink exact to="/login" className="button is-dark is-light" activeClassName="is-warning is-light">
                        Login
                    </NavLink>
                    <NavLink exact to="/register" className="button is-dark is-light" activeClassName="is-warning is-light">
                        Register
                    </NavLink>
                </div>

            </div>
        </nav>
    )
}

export default Navbar