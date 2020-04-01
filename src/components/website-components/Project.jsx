import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { project } from "../../mock-model/projects";
import { Link } from "react-router-dom";

const Project = () => {
  const [data, setData] = useState(project);
  const numberOfCards = 3;
  return (
    <div id="projects" className="jumbotron my-5">
      <div className="container-fluid">
        {" "}
        <h1 className="display-4 text-center"> Recent Projects</h1>{" "}
        <div className="row">
          {data.map(
            (d, i) =>
              d.id <= numberOfCards && (
                <div key={d.id} className="col-md-4">
                  <Link className="btn" to={`projects/${i}`}>
                    <ProjectCard project={d}> </ProjectCard>
                  </Link>
                </div>
              )
          )}
        </div>
        <h1 className="text-center">
          <Link className="btn btn-lg btn-dark" to="/projects">
            {" "}
            More Projects
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Project;
