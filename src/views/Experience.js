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
  Spinner
} from 'react-bootstrap';

const CONTROLLER = require('../controllers/portfolioController.js');


const Experience = (props) => {
  const [experience, setExperience] = useState();

  useEffect(() => {
    CONTROLLER.getExperience(setExperience);
  }, []);

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
      <Row>
        {experience.map((item, index) => {
          return (
            <Col xl={6}>
              <Row>
                <Col>
                  <h5> {item.title} </h5>
                </Col>
              </Row>
              <Row style={{marginBottom: "8px"}}>
                <Col>
                  <i> {item.startDate} - {item.endDate} </i>
                </Col>
              </Row>
              <Row style={{marginBottom: "8px"}}>
                <Col>
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
                </Col>
              </Row>
              <Row>
                <Col>
                  📝 {item.description}
                </Col>
              </Row>
              <hr/>
            </Col>
          );
        })}
      </Row>
      <br/>
    </Container>
  );
}

export default Experience;
