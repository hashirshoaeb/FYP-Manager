import React, { Component } from "react";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h1>SignIn for Student</h1>

        <h4>Enter Name</h4>

        <input type="text"></input>
        <h4>Email</h4>
        <input type="text"></input>
        <h4>Password</h4>
        <input type="text"></input>
        <br></br>
        <button className="m 12"> Signin </button>
      </div>
    );
  }
}

export default Signin;
