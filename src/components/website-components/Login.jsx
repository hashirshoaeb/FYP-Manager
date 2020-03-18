import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const card = {
      margin: "200px",
      border: "5px solid lightblack",
      cardAlign: "center"
    };
    // const pStyle = {
    //   background_color: "Blue",
    //   fontSize: "15px",
    //   textAlign: "center"
    // };
    return (
      <div className="justify-content-md-center  bgstyle min-vh-100 bg-transparent  d-flex  align-items-center ">
        <div
          className="card shadow-lg p-3 mb-5 bg-transparent rounded"
          style={card}
        >
          <form className="px-4 py-3">
            <h1> Login</h1>
            <div className="form-group">
              <label for="expamelefor email">Email:</label>
              <input
                type="email"
                className="form-control "
                placeholder="Email@com.com"
              ></input>
            </div>
            <div className="form-group">
              <label for="password">password:</label>
              <input
                type="password"
                className="form-control "
                placeholder="Password"
              ></input>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input type="checkbox" className="form-check-input"></input>
                <label className="form-check-label" for="check">
                  Remember me
                </label>
              </div>
            </div>
            <button className="btn btn-secondary btn-sm ">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
