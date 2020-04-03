import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "./Project/ProjectCard";
import image from "../../asserts/collaboration.svg";
import { project } from "../../mock-model/projects";
import { user } from "../../mock-model/users";
import { request } from "../../mock-model/requests";
import { notification } from "../../mock-model/notifications";
// import ProjectCard from "../website-components/ProjectCard";
const UserProfile = ({ location, match }) => {
  const { tab } = queryString.parse(location.search);

  return (
    <div className="container-xl">
      <div className="row">
        <div className="col-lg-4 my-3">
          <ProfileCard />
        </div>
        <div className="col-lg-8 my-3">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link text-dark" to={`profile?tab=projects`}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                to={`profile?tab=notifications`}
              >
                Notifications
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to={`profile?tab=requests`}>
                Requests
              </Link>
            </li>
          </ul>
          {
            {
              undefined: <ProjectTab project={project} />,
              projects: <ProjectTab project={project} />,
              notifications: <NotificationTab notification={notification} />,
              requests: <RequestTab request={request} />
            }[tab]
          }
        </div>
      </div>
    </div>
  );
};
const RequestTab = ({ request }) => {
  return (
    <div>
      {request.map((value, index) => {
        return <RequestCard key={index} request={value} />;
      })}
    </div>
  );
};

const RequestCard = ({ request }) => {
  return (
    <div>
      <div className="card m-3 shadow">
        <div className="card-body">
          <h5 className="card-title">"request"</h5>
          <p className="text-muted">{`${request.from} send request for ${request.for}`}</p>
          <button className="btn btn-primary mx-3">Accept</button>
          <button className="btn btn-danger mx-3">Reject</button>
        </div>
      </div>
    </div>
  );
};
const NotificationTab = ({ notification }) => {
  return (
    <div>
      {notification.map((value, index) => {
        return <NotificationCard key={index} notification={value} />;
      })}
    </div>
  );
};

const NotificationCard = ({ notification }) => {
  return (
    <Link className="text-decoration-none text-dark" to={notification.link}>
      <div className="card m-3 shadow">
        <div className="card-body">
          <h5 className="card-title">"notification"</h5>
          <p className="text-muted">{notification.description}</p>
          <div className="d-flex justify-content-end">
            <FontAwesomeIcon icon={faArrowRight} size="2x" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const ProjectTab = ({ project }) => {
  return (
    <div>
      <Link
        className="btn btn-primary text-decoration-none text-light"
        to="/new"
      >
        New Project
      </Link>
      <Link className="btn btn-primary text-decoration-none text-light" to="">
        Search Projects
      </Link>
      {project.map((value, index) => {
        return <ProjectCard key={index} project={value} />;
      })}
    </div>
  );
};

const ProfileCard = props => {
  return (
    <div className="">
      <div className="card m-3">
        <div className="row">
          <div className="col-4 col-lg-12">
            <img src={image} className="card-img" alt="..." />
          </div>
          <div className="col-8 col-lg-12">
            <div className="card-body">
              <h5 className="card-title">Hashir Shoaib</h5>
              <p>
                <b>Category: </b> My category
              </p>
              <p>
                <b>Qualification: </b> My Qualification
              </p>
              <p>
                <b>Bio:</b> My Bio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
