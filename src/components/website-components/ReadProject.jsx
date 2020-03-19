import React, { Component } from "react";
import Data from "../../projects.json";
import { Link } from "react-router-dom";
class ReadProject extends Component {
  constructor(props) {
    super(props);
    this.state = { data: Data.Fyp, id: this.props.match.params.id };
  }

  handleClick = e => {
    console.log(e);
  };
  render() {
    const { id } = this.props.match.params;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 ">
            <h4 className="my-5 text-center"> All Projects</h4>
            {this.state.data.map((d, i) => (
              <Link to={`/projects/${i}`} key={i} onClick={this.handleClick}>
                <div className="container-fluid btn btn-outline my-2 text-left">
                  <b> {i + 1}. </b>
                  {d.Fyp_title}
                </div>
              </Link>
            ))}
          </div>
          <div className=" col-md-9">
            <div className="container-fluid">
              <div className="display-2 my-5 text-center">
                {this.state.data[id].Fyp_title}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReadProject;
