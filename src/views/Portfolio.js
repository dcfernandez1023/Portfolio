/*********
react imports
**********/
import React, { useState, useEffect } from 'react';

/*********
css imports
**********/

/**********
local component imports
/**********/
import AboutMe from './AboutMe.js';
import Contact from './Contact.js';
import Resume from './Resume.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import PortfolioBar from './PortfolioBar.js';
import ItemBar from './ItemBar.js';


function Portfolio() {

  const[showAbout, setShowAbout] = useState(false);
  const[showResume, setShowResume] = useState(false);
  const[showProjects, setShowProjects] = useState(false);
  const[showContact, setShowContact] = useState(false);
  const[showSkills, setShowSkills] = useState(false);

  const MODALTOGGLERS = {
    aboutMe: setShowAbout,
    resume: setShowResume,
    projects: setShowProjects,
    contact: setShowContact,
    skills: setShowSkills
  }

  // list items to display in taskbar
  const ITEMS = [
    {
      value: "aboutMe",
      displayName: "About",
      icon: "progman_37_32x32_4bit",
      onClick: null
    },
    {
      value: "resume",
      displayName: "Resume",
      icon: "mailnews_20_32x32_4bit",
      onClick: null
    },
    {
      value: "projects",
      displayName: "Projects",
      icon: "qfecheck_111_32x32_4bit",
      onClick: null
    },
    {
      value: "contact",
      displayName: "Contact",
      icon: "mapi32_501_32x32_4bit",
      onClick: null
    },
    {
      value: "skills",
      displayName: "Skills",
      icon: "joy_102_32x32_4bit",
      onClick: null
    }
  ];

  return (
    <div>
      <AboutMe
        show = {showAbout}
        handleClose = {setShowAbout}
      />
      <Contact
        show = {showContact}
        handleClose = {setShowContact}
      />
      <Resume
        show = {showResume}
        handleClose = {setShowResume}
      />
      <Projects
        show = {showProjects}
        handleClose = {setShowProjects}
      />
      <Skills
        show = {showSkills}
        handleClose = {setShowSkills}
      />
      <ItemBar
        modalTogglers = {MODALTOGGLERS}
        items = {ITEMS}
      />
      <PortfolioBar
        modalTogglers = {MODALTOGGLERS}
        items = {ITEMS}
      />
    </div>
  );
}

export default Portfolio;
