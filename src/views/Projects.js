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
  Card
} from 'react-bootstrap';

const CONTROLLER = require('../controllers/portfolioController.js');


const Projects = (props) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    CONTROLLER.getProjects(setProjects);
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <h3> 💡 Projects </h3>
        </Col>
      </Row>
      <br/>
      <Row>
        {projects.map((project) => {
          return (
            <Col md={3}>
              <Card className="card-equal-height">
                <Card.Img className="project-card-image" variant="top" src={project.showImage} />
                <Card.Body>
                  <Card.Title> {project.name} </Card.Title>
                  <div> <small> <i> {project.startDate} - {project.endDate} </i> </small> </div>
                  <Card.Text>
                    {project.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Projects;
