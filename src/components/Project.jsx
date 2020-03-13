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
<<<<<<< HEAD
    return (
     

        {/* <div className="card-deck">
=======
    return {
      /* <div className="card-deck">
>>>>>>> frontend
            {this.state.data.map(d => (
              <ProjectCard key={d.id} data={d}>
                {" "}
              </ProjectCard>
            ))}
<<<<<<< HEAD
          </div> */}
      </div>
    );
=======
          </div> */
    };
>>>>>>> frontend
  }
}

export default Project;
