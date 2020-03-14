import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Data from "../projects.json";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data.Fyp
    };
  }

  render() {
    return (
      <div className="jumbotron my-5">  
        <div className="container-fluid">
          <h1 className="display-4 text-center">
            {" "}
            Recent Projects
          </h1>
          <div className="card-deck my-5">
            {this.state.data.map(d => (
              <ProjectCard key={d.id} data={d}>
                {" "}
              </ProjectCard>
            ))}
          </div>
        </div>
      </div> 
    );
  }
}

export default Project;
