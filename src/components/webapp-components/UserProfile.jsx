import React, { Component } from "react";
import data from "../../projects.json";
import { Link } from "react-router-dom";
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { data: data.Fyp };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <ProfileCard />
          <div className="col-md-8 my-5">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <Link to="/profile" class="nav-link">
                  Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/profile?tab=requests" class="nav-link">
                  Requests
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/profile?tab=link" class="nav-link">
                  Link
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/profile?tab=disable" class="nav-link">
                  Disabled
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-md-4  my-5">
        <div className="card shadow">
          <div className="card-body mx-auto">
            <img className="img-responsive" alt="" />
            <div className="lead">
              <div className="display-4 text-center ">khizar</div>
              <div className="text-center">Supervisor</div>
            </div>
            <div className="my-3">
              <button type="button" className="btn btn-success btn-sm mx-2">
                Follow
              </button>
              <button type="button" className="btn btn-danger btn-sm mx-2">
                Message
              </button>
            </div>
          </div>
          <div className="card-body text-center mx-1">
            <table className="table table-hover">
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <a href="/">Account Settings </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <a href="/">Tasks </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <a href="/">help </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
