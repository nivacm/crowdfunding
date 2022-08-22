import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav'
//import pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Router>
      <div id="project-list">
        <Nav />
        <Routes>
          <Route  exact path="/" element={<HomePage/>}/>
          <Route  path="/project/:id" element={<ProjectPage/>}/>
          <Route  path="/login"><LoginPage /></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;


