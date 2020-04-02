import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../../asserts/collaboration.svg";
import { project } from "../../mock-model/projects";
import { user } from "../../mock-model/users";
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
              requests: <ProjectCard project={project[2]} />
            }[tab]
          }
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
      {project.map((value, index) => {
        return <ProjectCard key={index} project={value} />;
      })}
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="card m-3 shadow">
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="text-muted">{project.description}</p>
        {project.tags.map(t => (
          <div key={t} className=" btn btn-outline-dark btn-sm  m-2">
            {t}
          </div>
        ))}
        <div className="d-flex justify-content-end">
          <FontAwesomeIcon icon={faArrowRight} size="2x" />
        </div>
      </div>
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
