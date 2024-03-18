import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Stack, flexbox, useMediaQuery } from "@mui/system";

const FaQuestion = () => {
  const [expanded, setExpanded] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 400px)");
  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: isSmallScreen ? "100%" : "90%",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: "20px", sm: "30px" },
        padding: { xs: "20px", sm: "30px" },
        textAlign:"center"
      }}
    >
      <Box>
        <Typography variant="h3" fontWeight="600">Frequently Asked Questions</Typography>
        <Typography variant="body1" my={1}>Answers To Your Common Queries</Typography>
      </Box>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          margin: "auto",
        }}
      >
        <Accordion onClick={handleChange}>
          <AccordionSummary
            className="Accordion-heading"
            expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
            sx={{ fontWeight: "bold", fontSize: "18px" }}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            what is Corewelink and how can it benefit my business?
          </AccordionSummary>
          <AccordionDetails className="detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion onClick={handleChange}>
          <AccordionSummary
            className="Accordion-heading"
            expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
            sx={{ fontWeight: "bold", fontSize: "18px" }}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            what is Corewelink and how can it benefit my business?
          </AccordionSummary>
          <AccordionDetails className="detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion onClick={handleChange}>
          <AccordionSummary
            className="Accordion-heading"
            expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
            sx={{ fontWeight: "bold", fontSize: "18px" }}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            what is Corewelink and how can it benefit my business?
          </AccordionSummary>
          <AccordionDetails className="detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion onClick={handleChange}>
          <AccordionSummary
            className="Accordion-heading"
            expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
            sx={{ fontWeight: "bold", fontSize: "18px" }}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            what is Corewelink and how can it benefit my business?
          </AccordionSummary>
          <AccordionDetails className="detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          margin: "auto",
        }}
      >
        <Accordion onClick={handleChange}>
          <AccordionSummary
            className="Accordion-heading"
            expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
            sx={{ fontWeight: "bold", fontSize: "18px" }}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            what is Corewelink and how can it benefit my business?
          </AccordionSummary>
          <AccordionDetails className="detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion onClick={handleChange}>
          <AccordionSummary
            className="Accordion-heading"
            expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
            sx={{ fontWeight: "bold", fontSize: "18px" }}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            what is Corewelink and how can it benefit my business?
          </AccordionSummary>
          <AccordionDetails className="detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion onClick={handleChange}>
          <AccordionSummary
            className="Accordion-heading"
            expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
            sx={{ fontWeight: "bold", fontSize: "18px" }}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            what is Corewelink and how can it benefit my business?
          </AccordionSummary>
          <AccordionDetails className="detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion onClick={handleChange}>
          <AccordionSummary
            className="Accordion-heading"
            expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
            sx={{ fontWeight: "bold", fontSize: "18px" }}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            what is Corewelink and how can it benefit my business?
          </AccordionSummary>
          <AccordionDetails className="detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Box>
  );
};
export default FaQuestion;
