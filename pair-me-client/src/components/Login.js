import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions/index'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = event => {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    // TODO: BUILD OUT LOGIN ACTION
    this.props.login(user)
  }

  render(){
      return(
        <div className="register-container">
        <h1>Log In</h1>
        <form onSubmit={this.handleLogin}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
            placeholder="Username"
            autoComplete='username'
          />
          <input
            type="password"
            name="password"
            value={this.state.password1}
            onChange={this.handleInput}
            placeholder="Password"
            autoComplete='current-password'
          />
          <button type="submit">Login</button>
        </form>
      </div>
      )
  }
}
    // Login check that redirects if user is logged in
    // if(localStorage.getItem('uuid') || this.props.isLoggedIn){
    //     this.props.history.push('/dashboard')
    // }
  

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
    }
}

export default withRouter(connect(mapStateToProps, {
    login,
})(Login));
