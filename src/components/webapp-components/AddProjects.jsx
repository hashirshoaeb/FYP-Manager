import React, { Component } from "react";
import data from "../../Fields.json";
class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = { field: 1, data: data.fields };
    this.add = this.add.bind(this);
  }
  add(f) {
    this.setState({ field: 1 });
  }
  clear(f) {
    return f === 0 ? <div>select field</div> : <div>{f}</div>;
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
              type="text"
              className="custom-select my-1 "
              id="inlineFormCustomSelectPref"
            >
              {" "}
              <option selected>Choose...</option>
              {this.state.data.map((d, i) => (
                <option value="1">{d}</option>
              ))}{" "}
            </select>{" "}
            <div className="btn btn-primary mx-4" onClick={this.add}>
              Add
            </div>
            {this.clear(this.state.field)}
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
