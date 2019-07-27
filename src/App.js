import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar'
import Threads from './components/Threads/Threads'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Login  from './components/Login/Login'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'
import otherUser from './components/Profile/otherUser'
import Shoes from './components/Shoes/Shoes'
import PostForm from './components/PostForm/PostForm'
import meAction from './components/Profile/Me'
import adapters from './components/adapters'
import Footer from './components/Footer/Footer'
import './App.css';


class App extends Component {

  componentDidMount() {
    this.checkIfUserLogin()
  }

  checkIfUserLogin = () => {
    if (localStorage.token) {
       adapters.getCurrentUser()
       .then(r => r.json())
       .then(data => this.props.meAction(data))

    }
  }

  


  render() {
    
    return (
      <div className="App">
        <NavBar/>
        
        <Route exact path='/' component={Home} />
        <Route exact path='/login' render={() => <Login/>}/>
        <Route exact path='/shoes' component={Shoes} />
        <Route exact path='/threads' component={Threads} />

        <Route exact path='/register' component={Register}/>
        <Route exact path='/postform' component={PostForm}/>
        <Route exact path='/anotheruser' component={otherUser} />
        <Route exact path='/profile' component={Profile} />
        <Footer/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      loggedIn: state.login_user.loggedIn,
      currentUser: state.login_user.current_user.attributes
  }

}

export default withRouter(connect(mapStateToProps, { meAction })(App));
