/*********
react imports
**********/
import React, { useState, useEffect } from 'react';

/*********
react-bootstrap imports
**********/
import {
  Row,
  Col,
  Card,
  Spinner
} from 'react-bootstrap';

const CONTROLLER = require('../controllers/portfolioController.js');


const Projects = (props) => {
  const [projects, setProjects] = useState();

  useEffect(() => {
    CONTROLLER.getProjects(setProjects);
  }, []);


  if(projects === undefined) {
    return (
      <div>
        <br/>
        <Row>
          <Col className="center-align">
            <Spinner animation="border" />
          </Col>
        </Row>
      </div>
    );
  }
  return (
    <div>
      <Row>
        <Col>
          <h2> 💡 Projects </h2>
        </Col>
      </Row>
      <br/>
      <Row>
        {projects.map((project) => {
          return (
            <Col md={3} style={{marginBottom: "20px"}}>
              <a
                className="clickable-card"
                style={{textDecoration:"none",color:"black"}}
                onClick={() => {
                  window.location.pathname = "/projects/" + project.id;
                }}
              >
                <Card className="card-equal-height clickable-card">
                  <Card.Img className="project-card-image" variant="top" src={project.showImage} />
                  <Card.Body>
                    <Card.Title> {project.name} </Card.Title>
                    <div> <small> <i> {project.startDate} - {project.endDate} </i> </small> </div>
                    <Card.Text>
                      {project.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          );
        })}
      </Row>
      <br/>
      <br/>
    </div>
  );
}

export default Projects;
