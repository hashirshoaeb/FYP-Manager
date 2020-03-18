import React, { Component } from "react";
import img_process from "../../asserts/process.svg";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="about" className="container my-5">
        <div className="row">
          <div className="col-md-7">
            <h1 className="display-4 my-5">About FYP Manager</h1>
            <p className="lead">
              FYP Manager is an open source Project managing tool.{" "}
            </p>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              alias eius, accusantium laborum perspiciatis laboriosam ullam
              officiis, omnis aspernatur, facere ad perferendis exercitationem
              nostrum qui minima repellat repellendus dolorum iure?{" "}
            </p>
            <p className="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              quia praesentium accusantium aspernatur iure voluptates suscipit
              at exercitationem, nam tenetur eius alias provident eveniet, esse
              necessitatibus.{" "}
            </p>
          </div>
          <div className="col-md-5 my-auto">
            <img className="img-fluid" src={img_process} alt="about fyp"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
