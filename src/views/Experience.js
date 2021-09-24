/*********
react imports
**********/
import React, { useState, useEffect } from 'react';

/*********
react-bootstrap imports
**********/
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Accordion
} from 'react-bootstrap';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const CONTROLLER = require('../controllers/portfolioController.js');


const Experience = (props) => {
  const [experience, setExperience] = useState();

  useEffect(() => {
    CONTROLLER.getExperience(setExperience);
  }, []);

  const parseExperienceDescription = (description) => {
    var bullets = description.split("<break>");
    return (
      <div>
        {bullets.map((bullet) => {
          return (
            <div style={{marginBottom: "10px"}}>
              ⭐ {bullet}
            </div>
          );
        })}
      </div>
    );
  }

  if(experience === undefined) {
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
          <h2> 💼 Experience </h2>
        </Col>
      </Row>
      <br/>
      <VerticalTimeline>
        {experience.map((experience) => {
          return (
            <VerticalTimelineElement
              key={"experience-" + experience.id}
              date={experience.startDate + " - " + experience.endDate}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h5 className="vertical-timeline-element-title" style={{marginBottom: "5px"}}> {experience.title} </h5>
              <div style={{marginBottom: "5px"}}>
                🏢 {experience.company}
                <a
                  style={{textDecoration:"none",color:"black", marginLeft: "3px"}}
                  className="clickable-card"
                  onClick={() => {
                    window.open(experience.companyUrl, "_blank");
                  }}
                >
                  <img style={{marginBottom: "3px", width: "20px", height: "20px"}} src="/external-link.png" />
                </a>
              </div>
              <div style={{marginBottom: "10px"}}> 📍 {experience.location} </div>
              <Accordion defaultActiveKey={experience.id}>
                <Accordion.Item eventKey={experience.id}>
                  <Accordion.Header> Role Description </Accordion.Header>
                  <Accordion.Body> {parseExperienceDescription(experience.description)} </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <br/>
      <br/>
      {/*
      <Row class="row-eq-height">
        {experience.map((item, index) => {
          return (
            <Col xl={6}>
              <Card style={{height: "100%"}}>
                <Card.Body>
                  <Card.Title> {item.title} </Card.Title>
                  <Card.Text>
                    <div> <i> {item.startDate} - {item.endDate} </i> </div>
                    <div>
                      🏢 {item.company}
                      <a
                        style={{textDecoration:"none",color:"black", marginLeft: "3px"}}
                        className="clickable-card"
                        onClick={() => {
                          window.open(item.companyUrl, "_blank");
                        }}
                      >
                        <img style={{marginBottom: "3px", width: "20px", height: "20px"}} src="/external-link.png" />
                      </a>
                    </div>
                    <hr/>
                    {parseExperienceDescription(item.description)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>*/}
      <br/>
    </Container>
  );
}

export default Experience;
