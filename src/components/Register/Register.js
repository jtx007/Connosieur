import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from  'react-router-dom'
import { registerAction } from './registerAction'
import   loginAction  from '../Login/loginAction'
import  adapters  from '../adapters'

 class Register extends Component {


  state = {
    username: '',
    password: '',
    age: '',
    city: '',
    avatar: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let user = Object.assign({...this.state})
    adapters.userCreate(user)
    .then(r => r.json())
    .then(json => console.log(json))
    .then(() => this.props.registerAction(user))
    .then(() => adapters.userLogin(user))
    .then(r => r.json())
    .then(data => localStorage.setItem('token', data.jwt))
    .then(() => this.props.loginAction(user))
    .catch(err => console.log(err))    
  }



  render() {
    if (this.props.loggedIn) {
      return <Redirect to='/profile' />
    } else {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <div className="row input1">
      <h1 className="form-title">Register</h1>
      <div className="input-field col s12">
        <input 
        name="username"
        onChange={this.handleChange}
        value={this.state.username}
        type="text" 
        className="validate"/>
        <label htmlFor="email">Create Username</label>
      </div>
    </div>
    <div className="row input2">
      <div className="input-field  col s12">
        <input  
        name="password"      
        onChange={this.handleChange}
        value={this.state.password}
        id="password" 
        type="password" 
        className="validate"/>
        <label htmlFor="password">Create Password</label>
      </div>
    </div>
    <div className="row input2">
      <div className="input-field col s12">
        <input 
        name="age"
        onChange={this.handleChange}
        value={this.state.age}
        type="text" 
        className="validate"/>
        <label htmlFor="email">Your Age</label>
      </div>
    </div>
    <div className="row input2">
      <div className="input-field col s12">
        <input 
        name="city"
        onChange={this.handleChange}
        value={this.state.city}
        type="text" 
        className="validate"/>
        <label htmlFor="email">Your City</label>
      </div>
    </div>
    <div className="row input2">
      <div className="input-field col s12">
        <input 
        name="avatar"
        onChange={this.handleChange}
        value={this.state.avatar}
        type="text" 
        className="validate"/>
        <label htmlFor="email">Your Avatar URL</label>
      </div>
    </div>
    <div className="row register-btn">
      <button type="submit" className="btn-large red pulse">Register</button>
    </div>
    </form>
    </div>
    )
  }
}
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.login_user.loggedIn
  }
}



export default connect(mapStateToProps, { registerAction, loginAction })(Register)