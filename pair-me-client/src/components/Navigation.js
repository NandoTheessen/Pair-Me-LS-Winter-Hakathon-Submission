import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/index'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    // set a dummy current user in state
    this.state = {
      currentUser: 'CurrentUser'
    }
  }

  // logout is handled from the navigation bar via call to logout action
  handleLogout = event => {
    event.preventDefault()
    this.props.logout()
  }

  render() {
    return (
      <div className="navigation">
        <NavLink to="/">
          <span className="nav-link">Home</span>
        </NavLink>
        <NavLink to="/login">
          <span className="nav-link">Login</span>
        </NavLink>
        <NavLink to="#">
          <span className="nav-link" onClick={this.handleLogout}>
            Logout
          </span>
        </NavLink>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      logout
    }
  )(Navigation)
)
