import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import Login from "./components/Login";
import MainBody from "./components/MainBody";
import Project from "./components/Project";
import Signin from "./components/Signin";
import Working from "./components/Working";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div>
      <MainBody></MainBody>  
      <About></About>  
      <Project></Project>    
      <Working></Working>
      <Signin></Signin>
      <Footer></Footer>
    </div>
  );
}

export default App;
