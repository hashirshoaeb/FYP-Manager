// Deprecate
//
//
//
// will use Read project instead // with same search functionality
import React, { useState } from "react";
import { project } from "../../mock-model/projects";
import ProjectCard from "../webapp-components/Project/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const ProjectShow = props => {
  const [data, setData] = useState(project);
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleChange = e => {
    const searchString = e.target.value;
    var newresult = "";
    var newdata = data.filter((value, index) => {
      return value.tags.includes(searchString);
    });
    if (!newdata.length) {
      newdata = project;

      newresult = "0 Match";
    } else {
      newresult = newdata.length + " Match";
    }

    setValue(e.target.value);
    setData(newdata);
    setResult(newresult);
  };

  return (
    <div className="bg-light">
      <div className="container-lg">
        <h1 className="display-4 text-center">All Projects</h1>{" "}
        <div className=" d-flex justify-content-center my-5">
          <FontAwesomeIcon icon={faSearch} size="3x" />
          <input
            className="form-control form-control-lg w-75 mx-3"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={value}
            onChange={handleChange}
          />
          <small className="form-text text-muted">{result}</small>
        </div>
        <div className="row ">
          {data.map((d, i) => (
            <div key={i} className="col-md-6 ">
              <Link className="btn" to={`projects/${i}`}>
                <ProjectCard project={d}> </ProjectCard>{" "}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShow;
