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
    "Blog",
    "Coursework"
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
    else if(val === "Coursework") {
      window.location.pathname = "/coursework";
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={5} style={{marginBottom: "15px"}}>
          <h1 style={{marginBottom: "20px"}}> Hey there! 👋 </h1>
          <p className="portfolio-description-text">
            This website is the more fun and interactive version of my
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
              <Button style={{width: "100%"}} size="lg" variant="info"
                onClick={() => {
                  window.location.pathname="/about";
                }}
              >
                About Me
              </Button>
            </Col>
          </Row>
          <Row>
            <Col style={{textAlign: "center"}}>
              <a href="https://github.com/dcfernandez1023" target="_blank" style={{marginRight: "10px"}}>
                <i class="nes-octocat animate"></i>
              </a>
              <a href="https://www.linkedin.com/in/dominic-fernandez-480a20192/" target="_blank" style={{marginRight: "10px"}}>
                <i class="nes-icon linkedin is-large"></i>
              </a>
              <a href="mailto:dominic.fernandez1023@gmail.com" target="_blank" style={{marginRight: "10px"}}>
                <i class="nes-icon gmail is-large"></i>
              </a>
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
      <br/>
      <br/>
    </Container>
  );
}

export default Home
