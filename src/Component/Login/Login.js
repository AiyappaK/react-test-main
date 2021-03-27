import React, { Component } from "react";
import './Login.css';

import Dashboard  from '../Dashboard/dashboard';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: "",
            error: "",
            output: "",
            sclicked: false,
            lclicked: true,
           
        };
            this.handleUserChange = this.handleUserChange.bind(this);
            this.handlePasswordChange = this.handlePasswordChange.bind(this);
            this.submit = this.submit.bind(this);
            this.slide = this.slide.bind(this);
    }

    handleUserChange(e) {
        this.setState({
          username: e.target.value,
        });
    }

    handlePasswordChange(e) {
        this.setState({
          password: e.target.value,
        });
      }

      submit(e) {
        e.preventDefault();
        if (!this.state.username || this.state.username !== "ravi") {
          return this.setState({ error: "Invalid username" });
        } else if (!this.state.password || this.state.password !== "12345") {
          return this.setState({ error: "Invalid password" });
        } else {
          console.log(this.state.username);
          <Dashboard
          username = {this.state.username}
          />

          
          this.props.history.push('/dashboard')
          
        }
      }

      slide(){
        if(this.state.sclicked === false){
          this.setState(
            {
              sclicked: true,
              lclicked: false
            })
        }else{
          this.setState({
          sclicked: false,
          lclicked: true
          })
        }
      }


    render() { 
       
        return ( 
            <div>
                <h1> {this.state.output}</h1>
            {this.state.error && <h3>{this.state.error}</h3>}
      <div className="form-structor" >

        <div className={this.state.sclicked ? 'signup slide-up':'signup' }>
          <h2 className="form-title" id="signup" onClick={this.slide}>
            <span>or</span>Sign up
          </h2>
          <div className="form-holder">
            <input type="text" className="input" placeholder="Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button className="submit-btn">Sign up</button>
        </div>
        <div className={this.state.lclicked? "login slide-up" : "login"}>
          <div className="center">
            <h2 className="form-title" id="login" onClick={this.slide}>
              <span>or</span>Log in
            </h2>
            <div className="form-holder">
            <input
            type="text"
            className="input"
            name="username"
            placeholder="Name" 
            value={this.state.username}
            onChange={this.handleUserChange}
            autoComplete="on"/>

          <input
            type="text"
            className="input"
            name="password"
            placeholder="Password" 
            value={this.state.password}
            onChange={this.handlePasswordChange}
            autoComplete="on"
          />
            </div>
            
            <button className="submit-btn"  onClick={this.submit}>Log in</button>
          </div>
        </div>
      </div>
      
    </div>

         );
    }
}
 

export default withRouter(Login);