import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import Login from "./components/Login";
import Navbar from "./components/website-components/Navbar";
import MainBody from "./components/website-components/MainBody";
import Project from "./components/website-components/Project";
import SignUp from "./components/webapp-components/SignUp";
import Working from "./components/website-components/Working";
import Footer from "./components/website-components/Footer";
import About from "./components/website-components/About";
import ProjectShow from "./components/website-components/ProjectShow";
import ReadProject from "./components/website-components/ReadProject";
import UserProfile from "./components/webapp-components/UserProfile";
import NewProject from "./components/webapp-components/Project/NewProject";
import UpdateProject from "./components/webapp-components/Project/UpdateProject";
import Setting from "./components/webapp-components/Setting";
import Milestone from "./components/webapp-components/Milestone";

const Home = () => {
  return (
    <Fragment>
      <MainBody></MainBody>
      <About></About>
      <Project></Project>
      <Working></Working>
      <SignUp></SignUp>
      <Footer></Footer>
    </Fragment>
  );
};

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <div>
        <Navbar></Navbar>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={ProjectShow} />
        <Route path="/projects/:id" component={ReadProject} />
        {/* Dymanic Stuff now */}
        <Route path="/signup" component={SignUp} />
        <Route path="/new" component={NewProject} />
        <Route path="/update/:id" component={UpdateProject} />
        <Route path="/setting" component={Setting} />
        <Route path="/milestone" component={Milestone} />
        <Route path="/profile" component={UserProfile} />
      </div>
    </BrowserRouter>
  );
}

export default App;
