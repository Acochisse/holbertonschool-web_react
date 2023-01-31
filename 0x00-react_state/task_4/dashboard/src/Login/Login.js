import logo from '../assets/holberton_logo.jpg';
import year from '../utils/utils';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { App}  from '../App/App';


class Login extends React.Component{
  constructor(props){
  super(props);
  this.state = {
    email: '',
    password: '',
    enableSubmit: true
  }
}
  handleLoginSubmit() {
    this.props.logIn(this.state.email, this.state.password)
  }

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value});
    if (this.state.password !== '' & this.state.email !== '') {
      this.setState({enableSubmit:false})
    }
  }
  handleChangePassword = (event) => {
    this.setState({password: event.target.value});
    if (this.state.password !== '' & this.state.email !== '') {
      this.setState({enableSubmit:false})
    }
  }

  render(){
    const styles = StyleSheet.create({
      login: {
        '@media (max-width: 900px)': {
          display: 'flex',
          flexDirection: 'column'
        }
      }
    })
  return (
    <React.Fragment>
      <div className={`${css(styles.login)}`} >
        <p>Login to access the full dashboard</p>
        <form className={`${css(styles.login)}`}>
          <label id='email'>email</label>
          <input type='text' value={this.state.email} onChange={this.handleChangeEmail} id='email'></input>
          <label id='password'>password</label>
          <input type='text' value={this.state.password} onChange={this.handleChangePassword} id='password'></input>
          <input disabled={this.state.enableSubmit} onClick={() => {this.handleLoginSubmit()}} type='button'></input>
        </form>
      </div>
      </React.Fragment>
  )}
}

export default Login;