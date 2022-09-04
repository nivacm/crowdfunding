
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'

import './App.css';
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Router>
      <div id="project-list">
        <Nav />
        <Routes>
          <Route exact path='/' element={<HomePage />}/>
          <Route path='/projects/:id' element={<ProjectPage />}/>
          <Route path='/login' element={<LoginPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
