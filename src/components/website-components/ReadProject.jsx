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
            {" "}
            <h4 className="my-5 text-center"> All Projects</h4>
            <div className="   mx-1">
              <table className="table table-hover">
                <tbody>
                  {this.state.data.map((d, i) => (
                    <Link
                      to={`/projects/${i}`}
                      key={i}
                      onClick={this.handleClick}
                    >
                      <tr>
                        <td>
                          <div className=" btn btn-outline my-2 text-left">
                            <b> {i + 1}. </b>
                            {d.Fyp_title}
                          </div>
                        </td>
                      </tr>
                    </Link>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className=" col-md-9">
            <div className="card shadow p-5 jumbotron">
              <div className="display-4 my-5 text-center">
                {this.state.data[id].Fyp_title}
              </div>
              <div className="btn btn-outline-dark mx-5">
                <a href="/#mainbody">{this.state.data[id].Supervisor}</a>
              </div>

              <h5 className="display-5 my-3">Introducation</h5>
              <p className="lead my-3 mx-2">
                {this.state.data[id].Fyp_inBrief}
              </p>
              <div className="mx-auto">
                {" "}
                <img className="img-fluid" alt="collaboration"></img>
              </div>
              <div>
                <h5 className="display-5 my-3">Areas of Scope:</h5>
                <div className="mx-5">
                  {this.state.data[id].Fyp_tag.map(t => (
                    <div key={t} className=" btn btn-outline-dark  m-2">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="btn btn-primary my-3 mx-auto">
                <b>Request</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReadProject;
