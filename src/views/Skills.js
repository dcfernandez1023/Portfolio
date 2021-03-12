/*********
react imports
**********/
import React, { useState, useEffect } from 'react';

/*********
css imports
**********/
import '@react95/icons/icons.css';
import '../styles/grid.css';

/**********
react95/core imports
/**********/
import { Icon, Modal, Frame } from '@react95/core';

/**********
local component imports
/**********/
const SKILLS = require('../models/skills.js');


function Skills(props) {

  const[show, setShow] = useState(false);
  const[pageNumber, setPageNumber] = useState(1);
  const[numPages, setNumPages] = useState(null);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const handleClose = () => {
    setShow(false);
    props.handleClose();
  }

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  if(show) {
    const lineBreak = <div style = {{height: "1px"}}> </div>
    return (
      <Modal
        title = "Skills.exe"
        closeModal = {handleClose}
        icon = "mapi32_501_32x32_4bit"
        defaultPosition = {{
          x: 0,
          y: 0
        }}
        style = {{maxHeight: "700px", maxWidth: "900px", margin: "10px"}}
      >
        <Frame
          bg = "white"
          style = {{overflowY: "auto", maxWidth: "875px", maxHeight: "675px"}}
        >
          <div style = {{margin: "5px"}}>
            <h4> ✔️ Experienced With: </h4>
              <div class = "row">
                {SKILLS.skills.map((skill) => {
                  return (
                    <div class = "column"> <p> ⭐ {skill.skill} </p> </div>
                  );
                })}
              </div>
            <hr style = {{border: "1px solid lightGray"}} />
            <h4> 🤝 Familiar With: </h4>
              <div class = "row">
                {SKILLS.familiar.map((skill) => {
                  return (
                    <div class = "column"> <p> 💭 {skill.skill} </p> </div>
                  );
                })}
              </div>
          </div>
        </Frame>
      </Modal>
    );
  }
  return (
    <div></div>
  );
}

export default Skills;
