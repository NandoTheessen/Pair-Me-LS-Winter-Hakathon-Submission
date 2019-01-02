import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from '../actions/index';


class Register extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password1: '',
            password2: '',
            email: '',
        }
    }

    handleInput = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleRegistration = event => {
        event.preventDefault();
        let user = {
            username: this.state.username,
            password1: this.state.password1,
            password2: this.state.password2,
            email: this.state.email

        }
        this.props.register(user);
        //TODO: don't forget to make a register action
    }

    render(){
 
        return(
            <div className = 'register-container'>
            <form onSubmit={this.handleLogin}>
            <input type = 'text' name = 'username' value={this.state.username} onChange={this.handleInput} placeholder='Username'></input>
            <input type = 'password' name = 'password1' value={this.state.password1} onChange={this.handleInput} placeholder='Password'></input>
            <input type = 'password' name = 'password2' value={this.state.password2} onChange={this.handleInput} placeholder='Verify Password'></input>
            <button type = 'submit'>Register yourself!</button>
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
    register,
})(Register));