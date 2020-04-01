import React, { Component } from "react";
import { project } from "../../mock-model/projects";
class UpdateProject extends Component {
  constructor(props) {
    super(props);
    this.state = { data: project, id: this.props.match.params.id };
  }

  render() {
    const { id } = this.props.match.params;
    return (
      <div className=" container">
        <div className="card shadow p-5 jumbotron">
          <div className="display-4 my-5 text-center ">
            <input
              value={this.state.data[id].Fyp_title}
              id="myText"
              type="text"
            ></input>
          </div>
          <div className="btn btn-outline-dark mx-5">
            <a href="/#mainbody">{this.state.data[id].Supervisor}</a>
          </div>

          <h5 className="display-5 my-3">Introducation</h5>
          <p className="lead my-3 mx-2">{this.state.data[id].Fyp_inBrief}</p>
          <div className="mx-auto">
            {" "}
            <img className="img-fluid" alt="collaboration"></img>
          </div>
          <div>
            <h5 className="display-5 my-3">Areas of Scope:</h5>
            <div className="mx-5">
              {this.state.data[id].Fyp_tag.map(t => (
                <div key={t} className=" btn btn-outline-dark  m-2">
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="btn btn-primary my-3 mx-auto">
            <b>Request</b>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateProject;
