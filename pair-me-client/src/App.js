import React, { Component } from 'react'
import './App.css'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import Navigation from './components/Navigation'
import Welcome from './components/Welcome'
import Dashboard from './components/Dashboard'
// Temporary dummy image files
import certificate_solid from './assets/certificate_solid.svg'
import ribbon_solid from './assets/ribbon_solid.svg'
import react_badge from './assets/react_badge.svg'
import js_square from './assets/js_square.svg'
import {storeLocally} from './actions/index'

class App extends Component {
  componentDidMount() {
    const { search } = this.props.location
    if (search) {
      const token = search.slice(6, -7)
      axios
        .post(`https://evening-refuge-39471.herokuapp.com/api/users/login`, {
          token
        })
        .then(res => {
          // do redux stuff here
          this.props.storeLocally(res.data)
          console.log(res.data)
          console.log(res.data.data)
          // this is our schema: res.data.data.whatever
          console.log(res.data.data.access_token)
          console.log(res.data.user.name)
        })
        .catch(e => console.log(e))
    }
  }

  componentWillReceiveProps(newProps){
    if(newProps.queues_stored !== this.props.queues_stored){
      this.props.history.push('/dashboard')
    }
  }

  render() {
    const badges = [
      {
        id: 0,
        imageUrl: certificate_solid,
        name: 'consecutive_5',
        description:
          'Great job logging in 5 days in a row! You are super duper!'
      },
      {
        id: 1,
        imageUrl: ribbon_solid,
        name: 'good_sherpa_5',
        description:
          'Wow, you helped 5 people! You have a heart of gold. Thanks for being you.'
      },
      {
        id: 2,
        imageUrl: react_badge,
        name: 'helper_react_2',
        description:
          'React is hard. Very hard. You made it easier for two others. Go you.'
      },
      {
        id: 3,
        imageUrl: js_square,
        name: 'helper_js_2',
        description:
          'Javascript is confusing. You made it less confusing for two others. We commend your service.'
      }
    ]
    /*
      `good_sherpa_5`,
      `consecutive_5`,
      `helper_react_2`,
      `helper_js_2`
    */
    return (
      <div className="App">
        
        <div className="app-container">
          <Switch>
            <Route exact path = "/" component={Welcome} />
            <Route exact path = '/' component={Dashboard} />
            
            {/* <Route
              exact
              path="/dashboard"
              render={props => <Dashboard badges={badges} {...props} />}
            /> */}
            {/* Routes go here */}
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // state goes here
    isLoggedIn: state.isLoggedIn,
    username: state.username,
    queues_stored: state.queues_stored,
  }
}

export default withRouter(connect(mapStateToProps, {
  storeLocally,
})(App))
