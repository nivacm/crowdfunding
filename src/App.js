import './App.css';
import React from "react";
import Nav from './components/Nav'
//import pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Router>
      <Nav />
      <div id="project-list">
        <Routes>
          <Route  path="/" element={<HomePage/>}/>
          <Route  path="/project/:id" element={<ProjectPage/>}/>
          <Route  path="/login" element={<LoginPage />}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;


