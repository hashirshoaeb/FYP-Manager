import React from "react";
import "./App.css";
import Signin from "./components/Signin";
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
      <Project></Project>    
      <Working></Working>
      <Signin></Signin>
      <Footer></Footer>
    </div>
  );
}

export default App;
