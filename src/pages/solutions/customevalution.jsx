import { Box, Typography } from "@mui/material";
import React from "react";
import { navbarSolutionList } from "../../utils/StaticData/solutionPageData";
import { useOutletContext } from "react-router";

const CustomEvalution = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      const Animation=useOutletContext()
  return (
    <Box className={`${Animation?'AnimationOfProduct1':null}`} bgcolor="#fff" mb={3} p={4}>
      
      <Box px={1} className="AnimationOfProduct1">
          <Typography
            variant="h5"
            textAlign={"start"}
            fontFamily={"Urbanist"}
            fontWeight={600}
            sx={{ fontSize: "25px" }}
          >
            {navbarSolutionList[1].title}
          </Typography>
          <Typography variant="body1" my={1}   textAlign={"start"}>
            {navbarSolutionList[1].description}
          </Typography>
        </Box>
      </Box>
   
  );
};

export default CustomEvalution;
