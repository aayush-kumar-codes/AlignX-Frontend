import { Box, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import React from "react";
import { navbarSolutionList } from "../../utils/StaticData/solutionPageData";
import FullWidthTabs from "../../components/tabbar";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useOutletContext } from "react-router";
import ParticlesBackground from "../../components/particlesBackground";


const AiCenter = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
const Animation=useOutletContext()
  return (
    <Box bgcolor="#fff"  >
      <Box  m={"auto"}>
        <Box   mb={2} className="AnimationOfProduct1">
          <Typography
            variant="body1"
            textAlign={"start"}
            fontFamily={"Urbanist"}
            color="grey"
            sx={{ fontSize: "18px" }}
          >
            {navbarSolutionList[3].title}
          </Typography>
          <Typography
            variant="h5"
            my={1}
            fontFamily={"DM Sans"}
            fontSize={"28px"}
            textAlign={"start"}
            fontWeight={600}
          >
            {navbarSolutionList[3].shortDescription}
          </Typography>
          <Typography variant="body1" my={1} textAlign={"start"}>
            {navbarSolutionList[3].description}
          </Typography>
        </Box>
        <Box sx={{position:"relative", height:"300px",display:"flex",flexDirection:"column",alignItems:"center",my:3}}>
        <ParticlesBackground/>
        <Box sx={{position:"absolute", top:"30%",display:"flex",justifyContent:"center",alignItems:"center",}}>
        <Typography variant="caption" maxWidth={"900px"} textAlign={"center"} fontWeight={600} my={"auto"} fontSize={{xs:"20px",md:"35px"}}>Augment your AI capabilities with AI Centers of Excellence</Typography>

        </Box>
       </Box>
        <Box  mb={4}>
          <Typography
            variant="body1"
            textAlign={"start"}
            fontFamily={"Urbanist"}
            sx={{ fontSize: "18px" }}
          >
            {navbarSolutionList[3].description1}
          </Typography>
          {navbarSolutionList[3].description1Points.map((details, i) => (
            <Box sx={{ display: "flex", mx: 1, py: 1 }} key={i}>
              <Box>
                <KeyboardDoubleArrowRightIcon />
              </Box>
              <Typography> {details}</Typography>
            </Box>
          ))}
        </Box>
        <FullWidthTabs />
      </Box>
    </Box>
  );
};

export default AiCenter;
