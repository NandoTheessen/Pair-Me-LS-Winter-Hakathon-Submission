import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../actions/index';

class Login extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin = event => {
        event.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        // TODO: BUILD OUT LOGIN ACTION
        this.props.login(user);
    }

    render(){
        // Login check that redirects if user is logged in
        // if(localStorage.getItem('uuid') || this.props.isLoggedIn){
        //     this.props.history.push('/dashboard')
        // }
        return(
            <div className = 'login-container'>
            <h1>Login</h1>
            <form onSubmit={this.handleLogin}>
            <input type = 'text' name = 'username' value={this.state.username} onChange={this.handleInput} placeholder='Username'></input>
            <input type = 'password' name = 'password' value={this.state.password} onChange={this.handleInput} placeholder='Password'></input>
            <button type = 'submit'>Login</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
    }
}

export default withRouter(connect(mapStateToProps, {
    login,
})(Login));