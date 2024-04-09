import React from "react";
import AboutUs from "./AboutUs";
import OurTeam from "./ourteam/OurTeam";
import FaQuestion from "./FAQ/Faquestion";
import { Box } from "@mui/material";

const About = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <Box sx={{ maxWidth: "1250px",  }}>
      <AboutUs />
      <OurTeam />
      <FaQuestion />
    </Box>
  );
};

export default About;
