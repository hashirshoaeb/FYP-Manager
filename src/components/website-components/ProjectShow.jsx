import React, { Component } from "react";
import Data from "../../projects.json";
import ProjectCard from "./ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
class ProjectShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data.Fyp,

      value: "",
      result: ""
    };
  }

  handleChange = e => {
    const searchString = e.target.value;
    var newresult = "";
    var newdata = Data.Fyp.filter((value, index) => {
      return value.Fyp_tag.includes(searchString);
    });
    if (!newdata.length) {
      newdata = Data.Fyp;

      newresult = "0 Match";
    } else {
      newresult = newdata.length + " Match";
    }
    this.setState({
      value: e.target.value,
      data: newdata,

      result: newresult
    });
  };

  handleClick = () => {};
  render() {
    return (
      <div className="bg-light">
        <div className="container">
          <h1 className="display-4 text-center">All Projects</h1>{" "}
          <div className=" d-flex justify-content-center my-5">
            <FontAwesomeIcon icon={faSearch} size="3x" />
            <input
              className="form-control form-control-lg w-75 mx-3"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <small className="form-text text-muted">{this.state.result}</small>
          </div>
          <div className="row ">
            {this.state.data.map(d => (
              <div key={d.id} className="col-md-4 ">
                <Link className="btn" to="/Read_Detail">
                  <ProjectCard data={d}> </ProjectCard>{" "}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectShow;
