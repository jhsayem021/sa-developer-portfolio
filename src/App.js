
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import ProjectDetails from './component/ProjectDetails/ProjectDetails';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import Navber from './component/Navber/Navber';
import Projects from './component/Projects/Projects';


function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Navber></Navber>
        <Switch>
          <Route exact path = "/">
          <Home></Home>
          </Route>
          <Route path = "/home">
          <Home></Home>
          </Route>
          <Route path = "/projects">
          <Projects></Projects>
          </Route>
          <Route exact path = "/project/:projectId">
          <ProjectDetails></ProjectDetails>
          </Route>
          <Route path = "/about">
          <About></About>
          </Route>
          <Route path = "/contacts">
          <Contact></Contact>
          </Route>
          
          
        </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
