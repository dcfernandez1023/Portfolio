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
  ListGroup,
  Badge,
  Spinner
} from 'react-bootstrap';

const CONTROLLER = require('../controllers/portfolioController.js');

const RecentActivity = (props) => {
  const [activity, setActivity] = useState();

  useEffect(() => {
    CONTROLLER.getRecentActivity(setActivity);
  }, []);

  if(activity === undefined) {
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
    <Row>
      <ListGroup variant="flush">
        {activity.map((item) => {
          if(item.type === "PROJECT") {
            var itemDate = new Date(item.posted);
            return (
              <ListGroup.Item
                action
                onClick={() => {
                  window.location.pathname = "/projects/" + item.id;
                }}
              >
                <Row>
                  <Col>
                    <div>
                      <Badge bg="success" style={{marginRight: "8px"}}> 💡 Project </Badge>
                      {item.name}
                    </div>
                  </Col>
                  <Col style={{textAlign: "right"}}>
                    📅 {itemDate.toLocaleDateString() + " @ " + itemDate.toLocaleTimeString()}
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          }
          else if(item.type === "EXPERIENCE") {
            var itemDate = new Date(item.posted);
            return (
              <ListGroup.Item
               action
               onClick={() => {
                 window.location.pathname = "/experience";
               }}
              >
                <Row>
                  <Col>
                    <div>
                      <Badge bg="secondary" style={{marginRight: "8px"}}> 💼 Experience </Badge>
                      {item.title} @ {item.company}
                    </div>
                  </Col>
                  <Col style={{textAlign: "right"}}>
                    📅 {itemDate.toLocaleDateString() + " @ " + itemDate.toLocaleTimeString()}
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          }
          else if(item.type === "BLOG_POST") {
            var itemDate = new Date(item.posted);
            return (
              <ListGroup.Item
                onClick={() => {
                  window.open(item.link, "_blank")
                }}
               action
              >
                <Row>
                  <Col>
                    <div>
                      <Badge bg="info" style={{marginRight: "8px"}}> 🔗 Blog </Badge>
                      {item.title}
                    </div>
                  </Col>
                  <Col style={{textAlign: "right"}}>
                    📅 {itemDate.toLocaleDateString() + " @ " + itemDate.toLocaleTimeString()}
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          }
        })}
      </ListGroup>
    </Row>
  );
}

export default RecentActivity;
