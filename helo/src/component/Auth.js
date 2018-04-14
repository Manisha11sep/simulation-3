import React, { Component } from 'react';
import axios from 'axios';


class Auth extends Component {
  constructor() {
    super();

    this.state = {
      user:null,
      username: '',
      password: '',
      message:[],
    };

    this.login = this.login.bind( this );
   this.username = this.username.bind(this);
   this.password = this.password.bind(this);


  }

  username(event){
    this.setState({username:event.target.value});
    console.log(this.state.username);

}
password(event){
    this.setState({password:event.target.value});
    console.log(this.state.password);
}


  login() {
    this.setState({ message: null });
    const { username, password } = this.state;
    console.log("inside createpost", {username,password})
    axios.post('/api/login',{username,password}).then(response => {
      this.setState({ user: response.data });
      console.log(response.data);
    }).catch(error => {
      this.setState({ message: 'Something went wrong: ' + this.getMessage(error) });
    });
  };

logout = () => {
  axios.post('/api/logout').then(response => {
    this.setState({ user: null });
  }).catch(error => {
    this.setState({ message: 'Something went wrong: ' + this.getMessage(error) });
  });
};





  render() {
    return (
      <div className="main">
    Inside Auth
    <div>
          <input className="Login__input" type="text" placeholder="Username"  value ={this.state.username}
             onChange={this.username}/>
          <input className="Login__input" type="password" placeholder="Password" value ={this.state.password}
             onChange={this.password}/>
          <div>
            <button onClick={ this.login }>Login </button>

          


            <button  onClick={ this.logout }>Logout </button>
            <br />
            <span> Status is :  {this.state.message}</span>
          </div>
          </div>
      </div>
    );
  }
}

export default Auth;
