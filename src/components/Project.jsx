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
     

        {/* <div className="card-deck">
            {this.state.data.map(d => (
              <ProjectCard key={d.id} data={d}>
                {" "}
              </ProjectCard>
            ))}
          </div> */}
      </div>
    );
  }
}

export default Project;
