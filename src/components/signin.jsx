import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container my-5">
        <h1 className="display-3 text-center my-5"> Teacher or Student??</h1>
        <div className="row ">
          <div className="col-md-6">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h5 className="card-title">SignIn as Teacher</h5>
                <form>
                  <div className="form-group">
                    <label for="expameleforname">Name:</label>
                    <input
                      type="text"
                      className="form-control "
                      placeholder="etc. Khizar"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="exampleforemail">Email:</label>
                    <input
                      type="email"
                      className="form-control "
                      placeholder="Email@com.com"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="expameleforPassword">Password:</label>
                    <input
                      type="password"
                      className="form-control "
                      placeholder="Password"
                    ></input>
                  </div>
                  <br></br>
                  <button className="btn btn-dark btn-lg"> Signin </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h5 className="card-title">SignIn as Student</h5>
                <form>
                  <div className="form-group">
                    <label for="expameleforname">Name:</label>
                    <input
                      type="text"
                      className="form-control "
                      placeholder="etc. Khizar"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="exampleforemail">Email:</label>
                    <input
                      type="email"
                      className="form-control "
                      placeholder="Email@com.com"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="expameleforPassword">Password:</label>
                    <input
                      type="password"
                      className="form-control "
                      placeholder="Password"
                    ></input>
                  </div>
                  <br></br>
                  <button className="btn btn-dark btn-lg"> Signin </button>
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
