import React from "react";
import ProjectCard from "./ProjectCard";
import Data from "../projects.json";

export default () => {
  const state = { data: Data.Fyp };
  const numberOfCards = 3
  return (
    <div className="jumbotron my-5">
      <div className="container-fluid">
        {" "}
        <h1 className="display-4 text-center"> Recent Projects</h1>{" "}
        <div className="row">
          {state.data.map(d => (
            d.id <= numberOfCards &&
            <div className="col-md-4">
              <ProjectCard key={d.id} data={d}>
                {" "}
              </ProjectCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
