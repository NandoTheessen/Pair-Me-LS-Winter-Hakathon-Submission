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
        <div className="welcome-left">
          <h1>Welcome to PairMe!</h1>
          <div>
            <p>To get started, login here: </p>
            <NavLink to="/login">
              <span className="nav-link">Login</span>
            </NavLink>
          </div>
          <NavLink to="/register">Sign up here!</NavLink>
        </div>
        <img
          className="pair-programming-img"
          src={pairprogramming}
          alt="Logo"
        />
      </div>
      <Footer />
    </>
  )
}

export default withRouter(Welcome)
