import React, { Component } from "react";

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="card shadow">
          <div className="card-title text-center display-3">Add Projects</div>
          <div className="card-body">
            <label for="exampleInputEmail1">Tittle of Project</label>
            <div>
              {" "}
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="1"
              ></textarea>
            </div>
          </div>
          <div className="card-body">
            <label for="exampleInputEmail1">Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="mx-3">
            <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
              Areas of Project
            </label>
            <select
              className="custom-select my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
            >
              <option selected>Choose...</option>
              <option value="1">Operating System</option>
              <option value="2">Computer Sceiences</option>
              <option value="3">Artifical intelligence</option>
            </select>
            <div className="btn btn-primary mx-4">Add</div>
          </div>
          <button type="submit" className="btn btn-primary mx-5 my-1">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default AddProject;
