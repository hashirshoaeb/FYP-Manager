import React from "react";
import ProjectCard from "./ProjectCard";
import Data from "../projects.json";
import { Link } from "react-router-dom";

export default () => {
  const state = { data: Data.Fyp };
  const numberOfCards = 3
  return (
    <div id="projects" className="jumbotron my-5">
      <div className="container-fluid">
        {" "}
        <h1 className="display-4 text-center"> Recent Projects</h1>{" "}
        <div className="row">
          {state.data.map(d => (
            d.id <= numberOfCards &&
            <div key={d.id} className="col-md-4">
              <ProjectCard data={d}>
                {" "}
              </ProjectCard>
            </div>
          ))}
        </div>
        <h1 className="text-center">
          <Link className="btn btn-lg btn-dark" to="/projects"> More Projects</Link>
        </h1>
      </div>
    </div>
  );
};
