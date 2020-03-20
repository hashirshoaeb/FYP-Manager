import React, { Component } from "react";
import data from "../../projects.json";
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { data: data.Fyp };
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
                <div className="text-center">Supervisor</div>
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
            <div className="card-body mx-auto">
              My All Projects
              {this.state.data.map(d => (
                <div className="card my-3 p-1">
                  <h5 className="card_title">{d.Fyp_title}</h5>
                  <div className="btn btn-outline-danger">Assign to Umar</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
