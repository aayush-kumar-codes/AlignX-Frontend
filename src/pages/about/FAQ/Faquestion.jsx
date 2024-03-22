import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaQuestion = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "1380px",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "20px", sm: "30px" },
          padding: { xs: "20px", sm: "30px" },
          textAlign: "center",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            fontWeight="600"
            sx={{ fontSize: { xs: "30px", md: "40px" } }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" my={1}>
            Answers To Your Common Queries
          </Typography>
        </Box>
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          sx={{ display: "flex", width: "100%", flexFlow: "row wrap" }}
        >
          <Stack
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: { xs: "100%", md: "50%" },
              margin: "auto",
            }}
          >
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{ margin: "10px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{ fontWeight: "bold", fontSize: "18px" }}
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  General settings
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  I am an accordion
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              sx={{ margin: "10px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                sx={{ fontWeight: "bold", fontSize: "18px" }}
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Users
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  You are currently not an owner
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat
                  lectus, varius pulvinar diam eros in elit. Pellentesque
                  convallis laoreet laoreet.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              sx={{ margin: "10px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                sx={{ fontWeight: "bold", fontSize: "18px" }}
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Advanced settings
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Filtering has been entirely disabled
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              sx={{ margin: "10px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                sx={{ fontWeight: "bold", fontSize: "18px" }}
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Advanced settings
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Filtering has been entirely disabled
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: { xs: "100%", md: "50%" },
              margin: "auto",
            }}
          >
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
              sx={{ margin: "10px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
                sx={{ fontWeight: "bold", fontSize: "18px" }}
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Advanced settings
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Filtering has been entirely disabled
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
              sx={{ margin: "10px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6bh-content"
                id="panel6bh-header"
                sx={{ fontWeight: "bold", fontSize: "18px" }}
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Advanced settings
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Filtering has been entirely disabled
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
              sx={{ margin: "10px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel7bh-content"
                id="panel7bh-header"
                sx={{ fontWeight: "bold", fontSize: "18px" }}
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Advanced settings
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Filtering has been entirely disabled
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
              sx={{ margin: "10px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel8bh-content"
                id="panel8bh-header"
                sx={{ fontWeight: "bold", fontSize: "18px" }}
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Advanced settings
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Filtering has been entirely disabled
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
export default FaQuestion;
