/*********
react imports
**********/
import React, { useState, useEffect } from 'react';

/*********
react-router-dom imports
**********/
import { useParams } from "react-router-dom";

/*********
react-bootstrap imports
**********/
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Carousel,
  ListGroup
} from 'react-bootstrap';

const CONTROLLER = require('../controllers/portfolioController.js');


const ProjectPage = (props) => {
  let { projectId } = useParams();

  const [project, setProject] = useState();

  useEffect(() => {
    CONTROLLER.getProject(projectId, setProject);
  }, []);

  if(project === undefined) {
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
    <Container>
      <Row>
        <Col>
          <h2> {project.name} </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <small> <i> {project.startDate} - {project.endDate} </i> </small>
          <a
            style={{textDecoration:"none",color:"black"}}
            className="clickable-card"
            onClick={() => {
              window.open(project.application, "_blank");
            }}
          >
            <img src="/website.png" style={{marginLeft: "8px"}} />
          </a>
          <a
            style={{textDecoration:"none",color:"black"}}
            className="clickable-card"
            onClick={() => {
              window.open(project.github, "_blank");
            }}
          >
            <img src="/github-logo.png" style={{marginLeft: "8px"}} />
          </a>
        </Col>
      </Row>
      <Row style={{marginBottom: "15px"}}>
        <Col>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            📝 {project.description}
          </p>
        </Col>
      </Row>
      <Row>
        <p>
          💻 Technologies:
          <ul>
            {project.technologies.map((technology) => {
              return (
                <li>
                  {technology}
                </li>
              );
            })}
          </ul>
        </p>
      </Row>
      <br/>
      <Row>
        <Carousel variant="dark">
          {project.images.map((image) => {
            return (
              <Carousel.Item>
                <img src={image} className="project-carousel-image" />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Row>
      <br/>
    </Container>
  );
}

export default ProjectPage;
