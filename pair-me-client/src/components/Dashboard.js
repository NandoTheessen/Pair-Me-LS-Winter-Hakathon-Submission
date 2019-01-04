import React from 'react'
import '../App.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasBeacon: false
    }
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-banner">
          <h1 className="title">Dashboard</h1>
        </div>

        <div className="beacon-container">
          <div className="ask-beacons">[TOPICS ON OFFER]</div>
          <div className="badges-container">
            <div className="badges-header">YOUR BADGES</div>
            <div className="badges-text">Here are the badges you earned!</div>
            {this.props.badges.map(badge => (
              <div className="badge-container" key={badge.id}>
                <img className="badge" src={badge.imageUrl} alt={badge.name} />
                <p className="badge-description">{badge.description}</p>
              </div>
            ))}
            <div />
          </div>
        </div>

        <div className="active-meetings">[ACTIVE MEETINGS]</div>
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
      // actions go here
    }
  )(Dashboard)
)
