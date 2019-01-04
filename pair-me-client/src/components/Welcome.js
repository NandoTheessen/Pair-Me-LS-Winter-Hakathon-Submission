import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions/index'
import Login from './Login'
import Footer from './Footer'
import pairprogramming from '../assets/pairprogramming.jpeg'

const Welcome = props => {
  return (
    <>
      <div className="welcome-container">
        <img
          className="pair-programming-img"
          src={pairprogramming}
          alt="Logo"
        />
        <div className="welcome-right">
          <h1>Welcome to PairMe!</h1>
          <div>
            <p>To get started, register here: </p>
            <Login />
          </div>
          <NavLink to="/login">
            Already have an account? Awesome: Login here!
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default withRouter(Welcome)
