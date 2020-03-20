import React, { Component } from "react";

class User_profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-3  my-5">
          <div className="card shadow">
            <div className="card-body mx-auto">
              <img className="img-responsive" alt="" />

              <div className="lead">
                <div className="display-4 text-center ">khizar</div>
                <div className="text-center">Developer</div>
              </div>

              <div className="my-3">
                <button type="button" className="btn btn-success btn-sm mx-2">
                  Follow
                </button>
                <button type="button" className="btn btn-danger btn-sm mx-2">
                  {" "}
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
        <div className="col-md-6    my-5">
          <div className="card shadow">
            <div className="card-body mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default User_profile;
