/*********
react imports
**********/
import React, { useState, useEffect } from 'react';

/*********
css imports
**********/
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/*********
react-bootstrap imports
**********/
import {
  Container,
  Navbar,
  Nav
} from 'react-bootstrap';

/*********
react-router-dom imports
**********/
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/*********
local imports
**********/
import Home from './views/Home.js';
import Projects from './views/Projects.js';
import Blog from './views/Blog.js';
import ProjectPage from './views/ProjectPage.js';
import Experience from './views/Experience.js';
import AboutMe from './views/AboutMe.js';
import Coursework from './views/Coursework';
import NotFound from './views/NotFound';

function App() {
  return (
    <body>
      <Navbar collapseOnSelect expand="lg" bg="#E9F7EF" className="portfolio-color-theme">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/portfolio.png"
              style={{marginRight: "5px", marginBottom: "3px"}}
            />
            dom-portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link className="portfolio-nav-link" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="portfolio-nav-link" href="/projects">
                Projects
              </Nav.Link>
              <Nav.Link className="portfolio-nav-link" href="/experience">
                Experience
              </Nav.Link>
              <Nav.Link className="portfolio-nav-link" href="/blog">
                Blog
              </Nav.Link>
              <Nav.Link className="portfolio-nav-link" href="/coursework"> Coursework </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br/>
      <br/>
      <Container>
      <Router>
        <Switch>
          <Route path="/projects/:projectId">
            <ProjectPage />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/coursework">
            <Coursework />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      </Container>
    </body>
  );
}

export default App;
