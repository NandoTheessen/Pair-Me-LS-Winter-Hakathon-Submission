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

      <div className = 'toolbar'>
      <div className = 'toolbar-link'>Profile</div>
      <div className = 'avatar-container'><div className = 'avatar' style = {{backgroundImage: `url(${this.props.avatar})`}}></div><p>{this.props.username}</p></div>
      <div className = 'toolbar-link' onClick = {this.handleLogout}>Logout</div>

      </div>

        <div className="beacon-container">
          <div className="ask-beacons">
            <h1>Awaiting Assistance</h1>
            {/* {this.props.students} */}
            <div className = 'user-card'>Adam Reid - Git</div>
            <div className = 'user-card'>Kai L. - React</div>
          </div>
          <div className="offer-beacons">
            <h1>Offering Assistance</h1>
            {/* {this.props.teachers} */}
            <div className = 'user-card'>Nando Theessen - Node</div>
          </div>
        </div>

        <div className="active-meetings">
          <h1>Active Meetings</h1>
          <div className = 'user-card'>Amy Shackles with Ronald Libago - Python</div>
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
  const { userReducer } = state
  console.log('state, you lift bro?', state)
  return {
    isLoggedIn: userReducer.isLoggedIn,
    email: userReducer.email,
    access_token: userReducer.access_token,
    name: userReducer.name,

    teacher: userReducer.teacher,
    student: userReducer.student,

    username: userReducer.username,
    avatar: userReducer.avatar
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
