import React, { Component } from "react";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container my-5">
        <h1 className="display-4 text-center my-5"> Teacher or Student??</h1>
        <div className="row ">
          <div className="col-md-6">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h5 className="card-title">Sign in as Teacher</h5>
                <form>
                  <div className="form-group">
                    <label >Name:</label>
                    <input
                      type="text"
                      className="form-control "
                      placeholder="John Doe"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      type="email"
                      className="form-control "
                      placeholder="name@example.com"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input
                      type="password"
                      className="form-control "
                      placeholder="Password"
                    ></input>
                  </div>
                  <br></br>
                  <button className="btn btn-dark btn-lg"> Sign in </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h5 className="card-title">Sign in as Student</h5>
                <form>
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      type="text"
                      className="form-control "
                      placeholder="John Doe"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      type="email"
                      className="form-control "
                      placeholder="name@example.com"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input
                      type="password"
                      className="form-control "
                      placeholder="Password"
                    ></input>
                  </div>
                  <br></br>
                  <button className="btn btn-dark btn-lg"> Sign in </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signin;
