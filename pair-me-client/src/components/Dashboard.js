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
          <h1>Dashboard</h1>
        </div>

        <div className="beacon-container">
          <div className="ask-beacons">
            <div>[ASK BEACONS]</div>
          </div>
          <div className="offer-beacons">
            <div className="offer-beacons">[OFFER BEACONS]</div>
          </div>
        </div>
        <div className="active-meetings">
          <div>[ACTIVE MEETINGS]</div>
        </div>
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
