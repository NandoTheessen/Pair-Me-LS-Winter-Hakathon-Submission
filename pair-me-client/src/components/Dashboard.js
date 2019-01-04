import React from 'react'
import '../App.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/index'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasBeacon: false
    }
  }

  handleLogout = event => {
    event.preventDefault()
    this.props.logout()
    this.props.history.push('/')
  }

  render() {
    console.log(this.props)
    return (
      <div className="dashboard-container">
        <div className="dashboard-banner">
          <h1 className="title">Dashboard</h1>
        </div>

        <div className="toolbar">
          <div className="toolbar-link">Profile</div>
          <div className="avatar-container">
            <div className="avatar">
              <img src={this.props.avatar} alt="user avatar" />
            </div>
            <p>{this.props.username}</p>
          </div>
          <div className="toolbar-link" onClick={this.handleLogout}>
            Logout
          </div>
        </div>
        <div className="beacon-container">
          <div className="ask-beacons">
            <h1>Awaiting Assistance</h1>
            {this.props.students}
          </div>
          <div className="offer-beacons">
            <h1>Offering Assistance</h1>
            {this.props.teachers}
          </div>
        </div>

        <div className="active-meetings">
          <h1>Active Meetings</h1>
        </div>
        <div className="badges-container">
          <div className="badges-header">YOUR BADGES</div>
          <div className="badges-text">Here are the badges you earned!</div>

          {this.props.badges.map(badge => (
            <div className="badge-container" key={badge.id}>
              <img className="badge" src={badge.imageUrl} alt={badge.name} />
              <p className="badge-description">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    email: state.email,
    access_token: state.access_token,
    name: state.name,
    teachers: state.teachers,
    students: state.students,
    username: state.username,
    avatar: state.avatar
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      // actions go here
      logout
    }
  )(Dashboard)
)
