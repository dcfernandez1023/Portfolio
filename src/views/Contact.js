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


function Contact(props) {

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
        title = "Contact.exe"
        closeModal = {handleClose}
        icon = "mapi32_501_32x32_4bit"
        defaultPosition = {{
          x: 0,
          y: 100
        }}
        style = {{maxHeight: "500px", maxWidth: "500px", margin: "10px"}}
      >
        <Frame
          bg = "white"
          style = {{overflowY: "auto", maxWidth: "500px", maxHeight: "475px"}}
        >
          <div style = {{margin: "5px"}}>
            <p> 📧 dominic.fernandez1023@gmail.com </p>
            <p> 📱 1 (650) 534-7403 </p>
            <p> 💻 <a href = 'https://github.com/dcfernandez1023' target = "_blank"> GitHub </a> </p>
            <p> 💼 <a href = 'https://www.linkedin.com/in/dominic-fernandez-480a20192' target = "_blank"> Linkedin </a> </p>
          </div>
        </Frame>
      </Modal>
    );
  }
  return (
    <div></div>
  );
}

export default Contact;
