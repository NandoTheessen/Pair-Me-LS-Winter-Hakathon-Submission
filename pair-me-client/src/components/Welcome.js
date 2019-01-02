import React from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../actions/index';
import Login from './Login';

const Welcome = props => {
    return(
    <div className = 'welcome-container'>
        Welcome to PairMe!

        To get started, login here:
        <Login></Login>

        Need an account? <NavLink to = '/register'>Sign up here!</NavLink>
    </div>
    )
}

export default withRouter(Welcome);