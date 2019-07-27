import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import loginAction from  './loginAction'
import meAction from '../Profile/Me'
import adapters from '../adapters'


class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  handleSubmit = (e) => {
    e.preventDefault()
    let user = Object.assign({...this.state})

    adapters.userLogin(user)
    .then(r => r.json())
    .then(data => localStorage.setItem('token', data.jwt))
    .then(() => adapters.getCurrentUser())
    .then(r => r.json())
    .then(data => this.props.meAction(data))
    .then(() => this.props.loginAction(user))
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to='/profile'/>
    } else {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className="row input1">
        <h1 className="form-title2">Login</h1>

        <div className="input-field col s12">
          <input
          onChange={this.handleChange}
          value={this.state.username}

          name="username"
          id="email" type="text" className="validate"/>
          <label htmlFor="email">Enter Username</label>
        </div>
      </div>
      <div className="row input2">
        <div className="input-field col s12">
          <input
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
          id="password" type="password" className="validate"/>
          <label htmlFor="password">Enter Password</label>
      </div>
    </div>
    <div className="row login-btn">
      <button type="submit" className="btn-large red pulse">Login</button>
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

export default connect(mapStateToProps, { loginAction, meAction })(Login)
