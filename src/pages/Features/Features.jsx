import * as React from "react";
import "./Features.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";

const Features = () => {
  return (
    <>
      <div className="container">
        <div className="left-container">
          <div className="sub-text">Ironclad Security</div>
          <div className="sub-heading">Protecting Your Digital Fortress</div>
          <div className="sub-content">
            Your data's security is our priority. With robust safeguards in
            place, you can focus on your business without fretting about cyber
            threats.
          </div>
          <Divider sx={{ bgcolor: "white" }} />
          <div className="accordion-box">
            <Accordion className="Accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="accordion-box-heading"
              >
                Multi-Factor Authentication (MFA)
              </AccordionSummary>
              <AccordionDetails>
                Enjoy the freedom to work or access your tools from virtually
                anywhere, on any device, as long as you have an internet
                connection.
              </AccordionDetails>
            </Accordion>
            <Accordion className="Accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                className="accordion-box-heading"
              >
                Data Encryption
              </AccordionSummary>
              <AccordionDetails>
                Enjoy the freedom to work or access your tools from virtually
                anywhere, on any device, as long as you have an internet
                connection.
              </AccordionDetails>
            </Accordion>
            <Accordion className="Accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                className="accordion-box-heading"
              >
                User Activity Monitoring
              </AccordionSummary>
              <AccordionDetails>
                Enjoy the freedom to work or access your tools from virtually
                anywhere, on any device, as long as you have an internet
                connection.
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="right-container">
          <img src="images/FeatureScanner.png" alt="" className="scanner-img" />
        </div>
      </div>
    </>
  );
};

export default Features;
