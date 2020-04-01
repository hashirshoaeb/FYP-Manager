import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  return (
    <div style={{ borderRadius: "20px" }} className="card shadow my-5">
      <div className="card-body p-4">
        <h5 className="card-title text-center">{project.title}</h5>
        <hr />
        <h5 className="">Desctiption:</h5>
        <p className="card-text">{project.description}</p>
        <hr />
        <h5 className="h5">Tags:</h5>

        {project.tags.map(t => (
          <div key={t} className=" btn btn-outline-dark  m-2">
            {t}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
