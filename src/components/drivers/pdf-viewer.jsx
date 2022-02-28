// Copyright (c) 2017 PlanGrid, Inc.

import React, { useState } from "react";
import { Document, Page } from "react-pdf";

function PDFDriver(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={props.filePath}
        options={{ workerSrc: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.js"}}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default PDFDriver;
