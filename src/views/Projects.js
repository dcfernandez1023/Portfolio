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


function Projects(props) {

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
        title = "Projects.exe"
        closeModal = {handleClose}
        icon = "mapi32_501_32x32_4bit"
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
          Projects go here !
          </div>
        </Frame>
      </Modal>
    );
  }
  return (
    <div></div>
  );
}

export default Projects;
