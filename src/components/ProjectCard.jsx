import React, { Component } from "react";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render() {
    return (
      <div style={{ borderRadius: "20px" }} className="card shadow my-5">
        <div className="card-body p-4">
          <h5 className="card-title text-center">{this.state.data.Fyp_title}</h5>
          <hr />
          <p className="lead">
            <b>Supervisor: </b>{" "}
            <div className="btn btn-outline-dark">
              {" "}
              {this.state.data.Supervisor}
            </div>
          </p>
          <h5 className="">Desctiption:</h5>
          <p className="card-text">{this.state.data.Fyp_desc}</p>
          <hr />
          <h5 className="h5">Tags:</h5>
          {this.state.data.Fyp_tag.map(t => (
            <div key={t} className="btn btn-outline-dark  m-2">
              {t}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectCard;
