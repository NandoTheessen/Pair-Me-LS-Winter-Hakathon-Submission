import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, register } from '../actions/index'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',

      password1: '',
      password2: '',
      email: ''
    }
  }

  handleInput = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = event => {
    event.preventDefault()
    const user = {
      username: this.state.username,
      password: this.state.password1
    }
    // TODO: BUILD OUT LOGIN ACTION
    this.props.login(user)
  }

  handleRegistration = event => {
    event.preventDefault()
    let user = {
      username: this.state.username,
      password1: this.state.password1,
      password2: this.state.password2,
      email: this.state.email
    }
    this.props.register(user)
    //TODO: don't forget to make a register action
  }

  showLogin = () => {
    return (
      <div className="login-container">
        <form onSubmit={this.handleLogin}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
            placeholder="Username"
          />
          <input
            type="password"
            name="password1"
            value={this.state.password1}
            onChange={this.handleInput}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }

  showRegister = () => {
    return (
      <div className="register-container">
        <form onSubmit={this.handleRegistration}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
            placeholder="Username"
          />
          <input
            type="password"
            name="password1"
            value={this.state.password1}
            onChange={this.handleInput}
            placeholder="Password"
          />
          <input
            type="password"
            name="password2"
            value={this.state.password2}
            onChange={this.handleInput}
            placeholder="Verify Password"
          />
          <button type="submit">Register yourself!</button>
        </form>
      </div>
    )
  }

  render() {
    // Login check that redirects if user is logged in
    // if(localStorage.getItem('uuid') || this.props.isLoggedIn){
    //     this.props.history.push('/dashboard')
    // }
    return this.props.isLogin ? this.showLogin() : this.showRegister()
  }
}

export default withRouter(
  connect(
    () => {},
    {
      login,
      register
    }
  )(Login)
)
