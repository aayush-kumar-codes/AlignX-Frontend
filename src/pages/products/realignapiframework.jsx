import { Box, Typography } from "@mui/material";
import React from "react";
import { navbarProductList } from "../../utils/StaticData/productPageData";

const ReAlignAPIFramework = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  return (
    <Box bgcolor="#fff" mb={3} p={4}>
      <Box maxWidth={"1250px"} m={"auto"}>
      <Typography variant="h3" textAlign={"center"}>{navbarProductList[0].title}</Typography>
      </Box>
    </Box>
  );
};

export default ReAlignAPIFramework;
