import React, { useState } from "react";
import queryString from "query-string";
import { project } from "../../../mock-model/projects";
import { Link } from "react-router-dom";
const ReadProject = ({ location, match }) => {
  console.log(match);
  const [data, setData] = useState(project);
  const id = match.params.id;
  const { tab } = queryString.parse(location.search);

  const handleClick = (e) => {};

  return (
    <div className="container-xl">
      <div className="">
        <h3>Title</h3>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link text-dark" to={`profile?tab=overview`}>
              Overview
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to={`profile?tab=threads`}>
              Threads
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to={`profile?tab=shared`}>
              Shared
            </Link>
          </li>
        </ul>
        {
          {
            undefined: <Overview />,
            overview: <Overview />,
            threads: <div>2</div>,
            shared: <div>3</div>,
          }[tab]
        }
      </div>
    </div>
  );
};

const Overview = ({}) => {
  return (
    <div>
      <div>Hashir</div>
      <p>Description</p>
      <p>Link</p>
      <p>Tags</p>
      <div>Timeline Later</div>
      <p>details</p>
    </div>
  );
};
export default ReadProject;
