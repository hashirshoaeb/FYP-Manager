import React, { Component } from "react";
import { project } from "../../mock-model/projects";
import { Link } from "react-router-dom";
import { user } from "../../mock-model/users";
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { data: project, not: 1, val: "proj", Udata: user };
    this.click = this.click.bind(this);
    this.click1 = this.click1.bind(this);
    this.click2 = this.click2.bind(this);
    this.clear = this.clear.bind(this);
  }

  clear() {
    this.setState({ not: 0 });
  }
  notification(not) {
    return not === 0 ? (
      <div>clear </div>
    ) : (
      <table className="table table-hover">
        {" "}
        <tbody>
          {this.state.data.map((d, i) => (
            <Link to={`/projects/${i}`} key={i}>
              <div className="card shadow ">
                <div className="">icon</div>
                <div className="display-5">Description</div>
              </div>
            </Link>
          ))}
        </tbody>
      </table>
    );
  }
  // handleClick = val => {};
  handleClick(val) {
    return val === "proj" ? (
      <div className="my-1 my-sm-0">
        <Link to={"/AddProject"}>
          {" "}
          <div className="btn btn-success btn-sm mx-5 my-2  ">
            Add New Project
          </div>
        </Link>
        {this.state.data.map((d, i) => (
          <div className="card shadow-sm my-3">
            {" "}
            <div className="btn btn-outline-dark mx-auto rounded-circle ">
              <b> Delete</b>
            </div>
            <div className="card-body p-4">
              {" "}
              <h5 className="card-title text-center">
                {this.state.data[i].Fyp_title}
              </h5>{" "}
              <hr />
              <p className="lead">
                <b>Supervisor: </b>{" "}
                <span className="btn btn-outline-dark">
                  {" "}
                  {this.state.data[i].Supervisor}
                </span>
              </p>
              <h5 className="">Desctiption:</h5>
              <p className="card-text">{this.state.data[i].Fyp_desc}</p>
              <hr />
              <h5 className="h5">Tags:</h5>
              {this.state.data[i].Fyp_tag.map(t => (
                <div key={t} className=" btn btn-outline-dark  m-2">
                  {t}
                </div>
              ))}
            </div>
            <div>
              <Link to={`/projects/${i}`} key={i}>
                <div className="btn btn-primary mx-5 my-1"> More</div>{" "}
              </Link>
              <Link to={`/update/${i}`} key={i}>
                <div className="btn btn-primary mx-5 my-1"> Update</div>{" "}
              </Link>
            </div>
          </div>
        ))}{" "}
      </div>
    ) : val === "req" ? (
      <div>
        <div className="my-4"></div>
        <div className="btn btn-primary btn-sm mx-5   ">Mark All read</div>
        <div className="btn btn-success btn-sm " onClick={this.clear}>
          clear all
        </div>

        {this.notification(this.state.not)}
      </div>
    ) : val === "prog" ? (
      <table className="table table-hover">
        {" "}
        <tbody>
          {this.state.data.map((d, i) => (
            <Link to={`/projects/${i}`} key={i}>
              <div className="card shadow my-1">
                {" "}
                <div className="">icon</div>
                <div className="display-5">Description</div>
              </div>
            </Link>
          ))}
        </tbody>
      </table>
    ) : (
      (this.setstate.val = "proj")
    );
  }
  click() {
    this.setState({ val: "proj" });
  }
  click1() {
    this.setState({ val: "req" });
  }
  click2() {
    this.setState({ val: "prog" });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <ProfileCard data={this.state.Udata} />
          <div className="col-md-8 my-5 ">
            <ul class="nav nav-tabs">
              <li class="nav-item active">
                <Link className="btn " onClick={this.click}>
                  {" "}
                  My Projects{}
                </Link>
              </li>
              <li class="nav-item mx-3">
                <Link className="btn" onClick={this.click1}>
                  {" "}
                  Notification
                </Link>
              </li>
              <li class="nav-item">
                <Link className="btn" onClick={this.click2}>
                  {" "}
                  Request
                </Link>
              </li>
            </ul>{" "}
            <div className="card  my-2">{this.handleClick(this.state.val)}</div>
          </div>{" "}
        </div>
      </div>
    );
  }
}

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: user,
      Udata: user
    };
  }
  render() {
    const { id } = "01";
    return (
      <div className="col-md-4  my-5">
        <div className="card shadow my-5">
          <div className="card-body mx-auto">
            <img src="..." alt="..." class="rounded-circle" />
            <div className="lead">
              <div className="display-4 text-center ">
                {/* {this.state.Udata[id].Name} */}
              </div>
              <div className="text-center">catagories</div>
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
                  <td> qualification</td>
                </tr>
                <tr>
                  <td> bios</td>
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
