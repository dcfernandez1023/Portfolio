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
react-pdf imports
/**********/
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume(props) {

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
        title = "Resume.exe"
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
            <Document
              file = 'resume.pdf'
              onLoadError = {console.error}
              onLoadSuccess = {onDocumentLoadSuccess}
            >
              <Page pageNumber = {pageNumber} />
            </Document>
          </div>
        </Frame>
      </Modal>
    );
  }
  return (
    <div></div>
  );
}

export default Resume;
