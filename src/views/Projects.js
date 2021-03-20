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

/**********
local component imports
/**********/
const PROJECTS = require('../models/projects.js');


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
            {PROJECTS.projects.map((project) => {
              return (
                <div>
                  <div> <strong> {project.name} </strong> - <i> {project.timeline.start} to {project.timeline.end} </i> </div>
                  <div> <a href = {project.repoLink} target = "_blank"> GitHub Repo</a>  |  <a href = {project.appLink} target = "_blank"> {project.name} </a> </div>
                  <p></p>
                  <div> 📝 <u> Description </u> </div>
                  <div> {project.description} </div>
                  <p></p>
                  <div> 💼 <u> Role </u> </div>
                  <div> {project.role} </div>
                  <p></p>
                  <div>
                    <div> ⚙️ <u> Technologies Used </u> </div>
                    {project.technologies.map((tech) => {
                      return (
                        <li> {tech} </li>
                      );
                    })}
                  </div>
                  <p></p>
                  <hr style = {{border: "1px solid lightGray"}} />
                  <p></p>
                </div>
              );
            })}
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
