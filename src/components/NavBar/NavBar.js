import React from 'react'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { connect } from 'react-redux'
import  logoutAction from '../Login/logoutAction'

const NavBar = ({loggedIn, logoutAction}) => {


    const logOut = () => {
      logoutAction()
    }

  
  return (
      <nav>
          <div className="nav-wrapper">
          <ul id="nav-mobile" className="center hide-on-med-and-down right">
            <li><Link to='/' className="waves-effect waves-red btn-flat" >Home</Link></li>
            <li><Link to='/shoes' className="waves-effect waves-red btn-flat" >Shoes</Link></li>
            <li><Link to='/threads' className="waves-effect waves-red btn-flat" >Threads</Link></li>        
          {loggedIn ? 
          <Fragment>
          <li><Link to='/profile' className="waves-effect waves-red btn-flat" >Profile</Link></li>
          <li><button onClick={logOut}  className="waves-effect waves-red btn-flat" >Logout</button></li></Fragment> :
          <Fragment>
          <li><Link to='/login' className="waves-effect waves-red btn-flat" >Login</Link></li> 
          <li><Link to='/register' className="waves-effect waves-red btn-flat">Register</Link></li>
          </Fragment>
          }
            
            
          </ul>
        </div>
    </nav>

  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.login_user.loggedIn
  }
}





export default connect(mapStateToProps, { logoutAction })(NavBar)
