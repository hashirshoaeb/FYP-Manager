import React, { useState, useEffect } from "react";
import { EditProject } from "./ProjectInputField";
import { milestone } from "../../../mock-model/milestones";

const NewProject = ({ value }) => {
  const handleSubmit = data => {
    console.log(data);
  };
  return (
    <div className=" container">
      <EditProject _handleSubmit={handleSubmit}></EditProject>
    </div>
  );
};

export default NewProject;
