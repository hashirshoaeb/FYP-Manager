import React, { Component } from "react";
import Data from "../projects.json";
import ProjectCard from "./ProjectCard";
class ProjectShow extends Component {
  constructor(props) {
    super(props);
    this.state = { data: Data.Fyp };
  }
  render() {
    return (
      <div className="jumbotron my-5">
        <div className="container-fluid">
          <h1 className="display-4 text-center">All Projects</h1>{" "}
          <div className="row ">
            {this.state.data.map(d => (
              <div className="col-md-4 ">
                <ProjectCard key={d.id} data={d}>
                  {" "}
                </ProjectCard>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectShow;
