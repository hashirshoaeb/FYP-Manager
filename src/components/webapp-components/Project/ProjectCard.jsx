import React, { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ project }) => {
  return (
    <div className="card m-3 shadow">
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="text-muted">{project.description}</p>
        {project.tags.map(t => (
          <div key={t} className=" btn btn-outline-dark btn-sm  m-2">
            {t}
          </div>
        ))}
        <div className="d-flex justify-content-end">
          <FontAwesomeIcon icon={faArrowRight} size="2x" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
