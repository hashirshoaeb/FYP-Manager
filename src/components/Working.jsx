import React, { Component } from "react";
import img_collab from "../asserts/collaboration.svg";
import img_scrum from "../asserts/scrum_board.svg";
import img_version from "../asserts/version_control.svg";

class Working extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 text-center">
            <h1 className="display-4 my-5">Step 1</h1>
            <p className="lead">Chooose your favourite project.</p>
            <p className="lead">Get Signed up.</p>
            <p className="lead">make your team.</p>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src={img_collab}
              alt="collaboration"
            ></img>
          </div>
          <div className="col-md-6">
            {" "}
            <img
              className="img-fluid"
              src={img_scrum}
              alt="collaboration"
            ></img>
          </div>
          <div className="col-md-6 text-center">
            <h1 className="display-4 my-5">Step 2</h1>
            <p className="lead">Request Supervisor.</p>{" "}
            <p className="lead">Wait for approval.</p>
            <p className="lead">Set Timline.</p>
            <p className="lead">set milestones.</p>
          </div>
          <div className="col-md-6 text-center">
            <h1 className="display-4 my-5">Step 1</h1>
            <p className="lead">Start working on your FYP.</p>
            <p className="lead">Collaborate remotly with your team.</p>
            <p className="lead">Set meeting with your supervisor.</p>
            <p className="lead">Get Grades.</p>
          </div>
          <div className="col-md-6">
            {" "}
            <img
              className="img-fluid"
              src={img_version}
              alt="collaboration"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Working;
