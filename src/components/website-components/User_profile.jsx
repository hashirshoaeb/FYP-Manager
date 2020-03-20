import React, { Component } from "react";

class User_profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="col-md-3">
          <div className="profile-sidebar">
            <div className="profile-userpic">
              <img className="img-responsive" alt="" />
            </div>

            <div className="profile-usertitle">
              <div className="profile-usertitle-name">khizar</div>
              <div className="profile-usertitle-job">Developer</div>
            </div>

            <div className="profile-userbuttons">
              <button type="button" className="btn btn-success btn-sm">
                Follow
              </button>
              <button type="button" className="btn btn-danger btn-sm">
                Message
              </button>
            </div>

            <div className="profile-usermenu">
              <ul className="nav">
                <li className="active">
                  <a href="/">
                    <i className="glyphicon glyphicon-home"></i>
                    Overview{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="glyphicon glyphicon-user"></i>
                    Account Settings{" "}
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <i className="glyphicon glyphicon-ok"></i>
                    Tasks{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="glyphicon glyphicon-flag"></i>
                    Help{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User_profile;
