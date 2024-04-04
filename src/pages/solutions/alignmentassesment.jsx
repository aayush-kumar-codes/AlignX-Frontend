import { 
  Stack,
  Toolbar,Box,  AppBar,Typography, Button, Grid,Accordion,
  AccordionDetails,
  AccordionSummary, } from "@mui/material";
import React from "react";
import { navbarSolutionList } from "../../utils/StaticData/solutionPageData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useOutletContext } from "react-router";

const AlignmentAssesment = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const Animation=useOutletContext()
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "20px", sm: "30px" },
          textAlign: "center",
        }}
      >

        <Box px={1} className="AnimationOfProduct1">
          <Typography
            variant="body1"
            textAlign={"start"}
            fontFamily={"Urbanist"}
          color="grey"
            sx={{ fontSize: "18px" }}
          >
            {navbarSolutionList[2].title}
          </Typography>
          <Typography variant="h5" my={1} fontFamily={"DM Sans"} fontSize={"28px"} textAlign={"start"} fontWeight={600}>
            {navbarSolutionList[2].shortDescription}
          </Typography>
          <Typography variant="body1" my={1}   textAlign={"start"}>
            {navbarSolutionList[2].description}
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
              width: { xs: "100%" },
              margin: "auto",
            }}
          >
            {navbarSolutionList[2].content.map((details,index)=>(
              <Accordion
              key={index}
              expanded={expanded === `panel${index+1}`}
              onChange={handleChange(`panel${index+1}`)}
              sx={{ my: "5px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{ fontWeight: "bold", fontSize: "18px" }}
              >
                <Typography sx={{ color: "black",fontWeight:"600" }}>
                 {details.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography textAlign={"start"}>
                {details.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
            ))}
          </Stack>
         
        </Stack>
        <Typography variant="body1" my={1}   textAlign={"start"}>
            {navbarSolutionList[2].conclusion}
          </Typography>
      </Box>
    </Box>
  );
};

export default AlignmentAssesment;
