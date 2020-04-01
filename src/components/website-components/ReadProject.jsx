import React, { useState } from "react";
import { project } from "../../mock-model/projects";
import { Link } from "react-router-dom";
const ReadProject = ({ match }) => {
  console.log(match);
  const [data, setData] = useState(project);
  const id = match.params.id;

  const handleClick = e => {};

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 ">
          {" "}
          <h4 className="my-5 text-center"> All Projects</h4>
          <div className="   mx-1">
            <table className="table table-hover">
              <tbody>
                {data.map((d, i) => (
                  <Link to={`/projects/${i}`} key={i} onClick={handleClick}>
                    <tr>
                      <td>
                        <div className=" btn btn-outline my-2 text-left">
                          <b> {i + 1}. </b>
                          {d.title}
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
            <div className="display-4 my-5 text-center">{data[id].title}</div>

            <h5 className="display-5 my-3">Details</h5>
            <p className="lead my-3 mx-2">{data[id].detail}</p>
            <div className="mx-auto">
              {" "}
              <img className="img-fluid" alt="collaboration"></img>
            </div>
            <div>
              <h5 className="display-5 my-3">Areas of Scope:</h5>
              <div className="mx-5">
                {data[id].tags.map(t => (
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
};

export default ReadProject;
