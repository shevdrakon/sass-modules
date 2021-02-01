import React from "react";
import './App.css';

import "./styles/globals.scss";

import ProjectsCard from "./ProjectsCard/ProjectsCard";
import TwProjectsCard from "./ProjectsCard/Tw/TwProjectsCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectsCard/>
        <hr/>
        <TwProjectsCard/>
      </header>
    </div>
  );
}

export default App;
