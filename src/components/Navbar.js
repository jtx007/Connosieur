import React from 'react'
import { Link } from '@reach/router'
import Navlink from './Navlink'
import dunk from '../assets/dunk.ico'
import { LoginContext } from '../context/loginContext'
const Navbar = ({token, user_id, setUser, setToken, setAvatar}) => {
    
    
    
    const logout = () => {
        localStorage.clear()
        setToken('')
        setUser('')
        setAvatar('') 
        setUser('')
    }
    
   

    

    const renderNavLinks = () => {
        if (token && user_id) {
            return (
                <>
                <Navlink  to="profile" >
                    Profile
                </Navlink>
                <button onClick={logout} className="button is-dark">Logout</button>
                
                </>
            )
        } else {
            return (
                <>
                    <Navlink  to="login" >
                            Login
                    </Navlink>
                    <Navlink  to="register" >
                        Register
                    </Navlink>
                </>
            )
        }
    }

    
    return (
        <nav style={{paddingRight: "10px"}}  className="navbar is-dark" role="navigation" aria-label="main-navigation">
            <div className="navbar-brand is-large">
                <Link to="/" className="navbar-item">
                    <img src={dunk} alt="nike dunk"/>
                    <h1 style={{paddingLeft: "10px"}} className="is-size-3 has-text-weight-semibold">Connosieur</h1>
                </Link>
            </div>
            <div className="navbar-end">
                <div className="buttons">
                    <Navlink  to="/" >
                        Home
                    </Navlink>
                    <Navlink  to={`sneakers/page/1`} >
                        Sneakers
                    </Navlink>
                    <Navlink to="posts">
                        Posts
                    </Navlink>
                    {renderNavLinks()}
                </div>

            </div>
        </nav>
    )
}

const NavbarWithContext = () => {
    return (
        <LoginContext.Consumer>

            {value => {
                return <Navbar {...value} />
            }}
        </LoginContext.Consumer>
    )
}

export default NavbarWithContext