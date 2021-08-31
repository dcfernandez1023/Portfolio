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
                    <div>
                      📝 {item.description}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <br/>
    </Container>
  );
}

export default Experience;
