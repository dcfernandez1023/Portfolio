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
  Figure,
  Button
} from 'react-bootstrap';

/*********
local imports
**********/
import RecentActivity from './RecentActivity.js';


const Home = (props) => {
  const BUTTON_TEXTS = [
    "Projects",
    "Experience",
    "Blog"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log("here");
    toggleButtonText();
  },[index]);

  const toggleButtonText = () => {
    setTimeout(() => {
      var button = document.getElementById("toggle-button");
      button.style.color = "transparent";
      setTimeout(() => {
        button.style.color = 'black';
        if(index == BUTTON_TEXTS.length - 1) {
          setIndex(0);
        }
        else {
          setIndex(index + 1);
        }
      }, 200);
    }, 3000);
  }

  const onClickToggleButton = () => {
    var val = BUTTON_TEXTS[index];
    if(val === "Projects") {
      window.location.pathname = "/projects";
    }
    else if(val === "Experience") {
      window.location.pathname = "/experience";
    }
    else if(val === "Blog") {
      window.location.pathname = "/blog";
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={5}>
          <h1 style={{marginBottom: "20px"}}> Welcome to my portfolio website! </h1>
          <p className="portfolio-description-text">
            Basically, this is the more fun and interactive version of my
            resume or Linkedin.  Here lies info about my
            experience, side projects, and some articles, websites, and technologies
            that I find interesting.
          </p>
          <br/>
          <Row>
            <Col className="center-align" style={{marginBottom: "20px"}}>
              <Button
                size="lg"
                id="toggle-button"
                variant="info"
                style={{transition: "color .2s ease-out", width: "100%"}}
                onClick={onClickToggleButton}
              >
                See {BUTTON_TEXTS[index]}
              </Button>
            </Col>
            <Col className="center-align">
              <Button style={{width: "100%"}} size="lg" variant="info">
                About Me
              </Button>
            </Col>
          </Row>
        </Col>
        <Col lg={7} className="center-align">
          <Figure>
            <Figure.Image
              width={500}
              height={500}
              src="hello_computer.gif"
            />
          </Figure>
        </Col>
      </Row>
      <br/>
      <br/>
      <Row>
        <Col>
          <h3> Recent Activity </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <RecentActivity />
        </Col>
      </Row>
    </Container>
  );
}

export default Home
