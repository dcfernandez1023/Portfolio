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
  Route,
  Link
} from "react-router-dom";

/*********
local imports
**********/
import Home from './views/Home.js';

/*********
controller imports
**********/
const LOCATOR = require('./controllers/locator.js');
const NOTIFIER = require('./controllers/notifier.js');

function App() {

  // useEffect(() => {
  //   notifyMeOfVisit();
  // }, []);
  //
  // const notifyMeOfVisit = () => {
  //   const onSuccess = (res) => {
  //     NOTIFIER.notifyVisit(res);
  //   }
  //   const onFailure = (error) => {
  //     console.log(error);
  //   }
  //   LOCATOR.getLocation(onSuccess, onFailure);
  // }

  return (
    <body>
      <Navbar collapseOnSelect expand="lg" bg="#E9F7EF" className="portfolio-color-theme">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="portfolio.png"
              style={{marginRight: "5px", marginBottom: "3px"}}
            />
            dom-portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link className="portfolio-nav-link" href="/about">
                About
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br/>
      <br/>
      <Container>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </Container>
    </body>
  );
}

export default App;
