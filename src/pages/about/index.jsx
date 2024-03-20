import React from "react";
import AboutUs from "./AboutUs";
import OurTeam from "./ourteam/OurTeam";
import FaQuestion from "./FAQ/Faquestion";
import { Box } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ maxWidth: "1250px", margin: "0 auto" }}>
      <AboutUs />
      <OurTeam />
      <FaQuestion />
    </Box>
  );
};

export default About;
