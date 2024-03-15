import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Contact.css";

const Contact = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <div className="main-container">
      <div className="div1">
        <h1 className="main-heading">Frequently Asked Questions</h1>
        <h5 className="main-detail">Answers to Your Common Queries</h5>
        <div className="accordion-container">
          <div className="accordion-container-child">
            <Accordion className="accordion" onClick={handleChange}>
              <AccordionSummary
                className="Accordion-heading"
                expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                what is Corewelink and how can it benefit my business?
              </AccordionSummary>
              <AccordionDetails className="detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion" onClick={handleChange}>
              <AccordionSummary
                className="Accordion-heading"
                expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                what is Corewelink and how can it benefit my business?
              </AccordionSummary>
              <AccordionDetails className="detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion" onClick={handleChange}>
              <AccordionSummary
                className="Accordion-heading"
                expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                what is Corewelink and how can it benefit my business?
              </AccordionSummary>
              <AccordionDetails className="detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion" onClick={handleChange}>
              <AccordionSummary
                className="Accordion-heading"
                expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                what is Corewelink and how can it benefit my business?
              </AccordionSummary>
              <AccordionDetails className="detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="accordion-container-child">
            <Accordion className="accordion" onClick={handleChange}>
              <AccordionSummary
                className="Accordion-heading"
                expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                what is Corewelink and how can it benefit my business?
              </AccordionSummary>
              <AccordionDetails className="detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion" onClick={handleChange}>
              <AccordionSummary
                className="Accordion-heading"
                expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                what is Corewelink and how can it benefit my business?
              </AccordionSummary>
              <AccordionDetails className="detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion" onClick={handleChange}>
              <AccordionSummary
                className="Accordion-heading"
                expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                what is Corewelink and how can it benefit my business?
              </AccordionSummary>
              <AccordionDetails className="detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion" onClick={handleChange}>
              <AccordionSummary
                className="Accordion-heading"
                expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                what is Corewelink and how can it benefit my business?
              </AccordionSummary>
              <AccordionDetails className="detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
