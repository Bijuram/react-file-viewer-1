// Copyright (c) 2017 PlanGrid, Inc.

import React, {useState} from 'react';
// import VisibilitySensor from 'react-visibility-sensor';

// import { Document, Page, pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

// setOptions({ workerSrc: '/pdf.worker.min.js', })
function PDFDriver(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  // pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
  

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={props.filePath}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default PDFDriver;
