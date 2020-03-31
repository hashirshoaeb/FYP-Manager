import React, { Component } from "react";
import { Link } from "react-router-dom";
class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = { val: "Profile" };
    this.click = this.click.bind(this);
    this.click1 = this.click1.bind(this);
    this.click2 = this.click2.bind(this);
  }
  handleClick(val) {
    return val === "Profile" ? (
      <div className="my-1 my-sm-0">
        <div className="col-md-2">
          <img
            src="\asserts\scrum_board.svg"
            alt="..."
            class="rounded-circle"
          />
          <div className="btn btn-outline-dark">change pic</div>
        </div>
        <div className="col-md-5">
          {" "}
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control "
              placeholder="John Doe"
            ></input>
          </div>
          <div className="form-group">
            <label>Bio:</label>
            <input
              type="text"
              className="form-control "
              placeholder="Born for something to Born"
            ></input>
          </div>
          <div className="form-group">
            <label>Qualification:</label>
            <input
              type="text"
              className="form-control "
              placeholder="Phd"
            ></input>
          </div>
          <br></br>
          <button className="btn btn-dark btn-lg"> Update </button>
        </div>{" "}
      </div>
    ) : val === "Security" ? (
      <div className="my-1 my-sm-0">
        <div className="col-md-5">
          {" "}
          <div className="form-group">
            <label>Old Password:</label>
            <input
              type="text"
              className="form-control "
              placeholder="********"
            ></input>
          </div>
          <div className="form-group">
            <label>New Password:</label>
            <input
              type="text"
              className="form-control "
              placeholder="*********"
            ></input>
          </div>
          <div className="form-group">
            <label>confirm Password:</label>
            <input
              type="text"
              className="form-control "
              placeholder="*********"
            ></input>
          </div>
          <br></br>
          <button className="btn btn-dark btn-lg"> Update </button>
        </div>{" "}
      </div>
    ) : val === "Password" ? (
      <div></div>
    ) : (
      (this.setstate.val = "Profile")
    );
  }

  click() {
    this.setState({ val: "Profile" });
  }
  click1() {
    this.setState({ val: "Security" });
  }
  click2() {
    this.setState({ val: "Password" });
  }

  render() {
    return (
      <div className="container my-5">
        <div className="row ">
          <div className="card col-sm-2">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Personal Setting</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {" "}
                  <Link className="btn " onClick={this.click}>
                    <td>Profile</td>{" "}
                  </Link>
                </tr>
                <tr>
                  {" "}
                  <Link className="btn " onClick={this.click1}>
                    <td>Sceurity</td>{" "}
                  </Link>
                </tr>{" "}
                <tr>
                  {" "}
                  <Link className="btn " onClick={this.click2}>
                    <td> Password </td>{" "}
                  </Link>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-9 my-5 ">
            <div className="card  my-2">{this.handleClick(this.state.val)}</div>
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default Setting;
