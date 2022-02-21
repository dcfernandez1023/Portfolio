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
} from 'react-bootstrap';


const AboutMe = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <h2> 👀 About Me </h2>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
          <p>
             Hello 👋.
             My name is Dominic Fernandez. I am currently a student at the University of San Francisco pursuing a B.S. in Computer Science.
             Software Development fascinates me, and I find myself consistently combining the concepts learned at university with new
             technologies that I explore independently on many different projects.
             I'm always excited to learn more and meet new people, so feel free to contact me!
          </p>
        </Col>
      </Row>
      <Row>
        <Col style={{textAlign: "right"}}>
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
    </Container>
  );
}

export default AboutMe;
