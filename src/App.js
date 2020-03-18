import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import Login from "./components/Login";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";
import Project from "./components/Project";
import Signin from "./components/Signin";
import Working from "./components/Working";
import Footer from "./components/Footer";
import About from "./components/About";
import ProjectShow from "./components/ProjectShow"

const Home = () => {
  return (
    <Fragment>
      <MainBody></MainBody>
      <About></About>
      <Project></Project>
      <Working></Working>
      <Signin></Signin>
      <Footer></Footer>
    </Fragment>
  )
};

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <div>
        <Navbar></Navbar>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={ProjectShow} />
      </div>
    </BrowserRouter>
  );
}

export default App;
