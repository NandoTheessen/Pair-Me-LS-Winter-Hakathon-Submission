import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../actions/index'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: ''
    }
  }

  handleInput = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleRegister = event => {
    event.preventDefault()
    if (this.state.password1 === this.state.password2) {
      const user = {
        username: this.state.username,
        password: this.state.password1,
        email: this.state.email
      }
      // TODO: BUILD OUT register ACTION
      this.props.register(user)
    } else {
      window.alert('Your passwords much match exactly!')
    }
  }

  render() {
    return (
      <div className="register-container">
        <h1>Join Us!</h1>

        <a
          rel="noopeneder noreferrer"
          // eslint-disable-next-line
          href="https://slack.com/oauth/authorize?scope=identity.basic identity.email identity.avatar&client_id=154966377728.516246535895"
        >
          <img
            src="https://api.slack.com/img/sign_in_with_slack.png"
            alt="slack logo"
          />
        </a>
        <form onSubmit={this.handleRegister}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInput}
            placeholder="E-mail"
            autoComplete="email"
          />
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
            placeholder="Username"
            autoComplete="username"
          />
          <input
            type="password"
            name="password1"
            value={this.state.password1}
            onChange={this.handleInput}
            placeholder="Password"
            autoComplete="new-password"
          />
          <input
            type="password"
            name="password2"
            value={this.state.password2}
            onChange={this.handleInput}
            placeholder="Confirm Password"
            autoComplete="new-password"
          />
          <button type="submit">Register</button>
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
    isLoggedIn: state.isLoggedIn
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      register
    }
  )(Register)
)
