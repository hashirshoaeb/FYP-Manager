import React, { Component } from "react";
import { project } from "../../mock-model/projects";
import { EditProject } from "./ProjectInputField";
const UpdateProject = ({ match }) => {
  const { id } = match.params;
  const handleSubmit = data => {
    console.log(data);
  };
  return (
    <div className=" container">
      <EditProject
        value={project[id]}
        _handleSubmit={handleSubmit}
      ></EditProject>
    </div>
  );
};

export default UpdateProject;
