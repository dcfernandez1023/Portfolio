/*********
react imports
**********/
import React, { useState, useEffect } from 'react';

/*********
css imports
**********/
import '@react95/icons/icons.css';

/**********
react95/core imports
/**********/
import { Icon, Modal, Frame } from '@react95/core';


function AboutMe(props) {

  const[show, setShow] = useState(false);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const handleClose = () => {
    setShow(false);
    props.handleClose();
  }

  if(show) {
    const lineBreak = <div style = {{height: "1px"}}> </div>
    return (
      <Modal
        title = "About.exe"
        closeModal = {handleClose}
        icon = "progman_37_32x32_4bit"
        defaultPosition = {{
          x: 0,
          y: 0
        }}
        style = {{maxHeight: "500px", maxWidth: "500px", margin: "10px"}}
      >
        <Frame
          bg = "white"
          style = {{overflowY: "auto", maxWidth: "500px", maxHeight: "475px"}}
        >
          <div style = {{margin: "5px"}}>
            <h2> Hello 👋 </h2>
            <p>
              My name is Dominic Fernandez. I am currently a student at the University of San Francisco pursuing a B.S. in Computer Science.
              Software Development fascinates me, and I find myself consistently combining the concepts learned at university with new technologies
              that I explore independently on many different projects.
            </p>
            {lineBreak}
            <p> I'm always excited to learn more and meet new people, so feel free to contact me! </p>
            {/*
            <p>
              As a result, I have built a few applications aligned with my interests and hobbies such as:
                <li>🏋️ A fitness diary web app that tracks and analyzes user inputted workout data at a personal and customizable level </li>
                <li>🏕️ A backpacking gear management app to gather gear to pack and to determine how expensive and heavy the gear will be </li>
                <li>🚗 An automobile management platform that allows users to conveniently manage, analyze, and log maintenance, cost, and scheduled services for their cars </li>
            </p>
            */}
          </div>
        </Frame>
      </Modal>
    );
  }
  return (
    <div></div>
  );
}

export default AboutMe;
