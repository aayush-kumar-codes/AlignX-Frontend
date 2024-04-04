import { Box, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import React from "react";
import { navbarSolutionList } from "../../utils/StaticData/solutionPageData";
import FullWidthTabs from "../../components/tabbar";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useOutletContext } from "react-router";


const AiCenter = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
const Animation=useOutletContext()
  return (
    <Box bgcolor="#fff" mb={3} p={4}>
      <Box maxWidth={"1250px"} m={"auto"}>
        <Box px={1} mb={2} className="AnimationOfProduct1">
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
        <Box px={1} mb={4}>
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
