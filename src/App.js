import React from "react";
import "./App.css";
import Signin from "./components/signin";
import "bootstrap/dist/css/bootstrap.css";
// import Login from "./components/Login";
import MainBody from "./components/MainBody";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Working from "./components/Working";
function App() {
  return (
    <div>
      <MainBody></MainBody>
      <div className="jumbotron">
        <div className="card-deck">
          <Project></Project>
        </div>
      </div>
      <Working></Working>
      <Signin></Signin>
      <Footer></Footer>
    </div>
  );
}

export default App;
