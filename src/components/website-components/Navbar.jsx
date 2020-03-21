import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsLogin: true
    };
  }

  renderTags(IsLogin) {
    return IsLogin ? (
      <div class="dropdown">
        <button
          class="btn btn-outline-dark dropdown-toggle my-2 my-sm-0 "
          type="profile"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Profile
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button class="dropdown-item" type="button">
            <Link to={`/profile`}>profile</Link>
          </button>
          <button class="dropdown-item" type="button">
            Settings
          </button>
          <button class="dropdown-item" type="button">
            Help
          </button>
        </div>
      </div>
    ) : (
      <Link to={`/Signin`}>
        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
          Signin/Login
        </button>
      </Link>
    );
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          className="navbar-brand"
          href={process.env.PUBLIC_URL + "/#mainbody"}
        >
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a
                className="nav-link"
                href={process.env.PUBLIC_URL + "/#mainbody"}
              >
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={process.env.PUBLIC_URL + "/#about"}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={process.env.PUBLIC_URL + "/#projects"}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={process.env.PUBLIC_URL + "/#working"}
              >
                Working
              </a>
            </li>
          </ul>
          {this.renderTags(this.state.IsLogin)}
        </div>
      </nav>
    );
  }
}

export default Navbar;
