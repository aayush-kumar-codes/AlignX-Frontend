import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import './Product.css';
import { NavLinkData } from "../../components/StaticData/navLinkData";

const RaaSDataPlatform = () => {
  const productData = NavLinkData?.find(item => item.name === "Products");

  if (!productData || !productData?.list) {
    return null; // Render nothing if the product data is not found
  }

  const raasPlatform = productData?.list?.find(item => item.path === "RaaSDataPlatform");

  if (!raasPlatform) {
    return null; // Render nothing if the RaaS Data Platform data is not found
  }

  const { title, shortDescription, description1, description2, processOverview, processOverviewContent } = raasPlatform;

  return (
      <Box display="flex" flexDirection="column" mx="auto" width="full">
        <Box pt={6}
          pb={3}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          textAlign={"center"} className="AnimationOfProduct1">
          <Typography variant="h6" fontSize={{ xs: "16px", md: "18px" }} fontFamily="Urbanist" color="grey" fontWeight="700">
            {title}
          </Typography>
          <Typography variant="h2" color="#022422" mt="8px" mb="18px" fontWeight="600" fontFamily="Urbanist" fontSize={{ xs: "24px", md: "40px" }}>
            {shortDescription}
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: "#155EEF", display: "flex", alignItems: "center", width: { xs: "303px", md: "auto" }, ":hover": { backgroundColor: "#3876f2",borderRadius:"25px" } }}>
            Schedule Demo
            <img src="images/img_ic_arrow_right_white_a700.svg" alt="ic_arrow right" style={{ height: "14px", width: "14px" }} />
          </Button>
        </Box>
        <Box py={3} textAlign="start" className="AnimationOfProduct1"  >
          <Typography variant="h4" color= "#333336" mt="8px" mb="18px" fontWeight="700" fontFamily="Urbanist" fontSize={{ xs: "20px", md: "30px" }}>
            {description1}
          </Typography>
          <Typography variant="subtitle2" fontWeight="400" fontFamily="DM Sans" textAlign="start" paddingBottom="20px" color="#384e4c">
            {description2}
          </Typography>
        </Box>
        <Box className="AnimationOfProduct1">
          <Typography variant="h6" fontWeight="500" fontFamily="DM Sans" textAlign="start" paddingBottom="20px" color="#384e4c" margin="auto">
            {processOverview}
          </Typography>
        </Box>
        <Grid container spacing={2} justifyContent="center" alignItems="stretch">
          {processOverviewContent?.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Box bgcolor="white" border="2px solid #e6eceb" p={2} sx={{ height: "250px", boxShadow: "2px 2px 2px", borderRadius: "10px" }} textAlign="center">
                <Typography variant="h5" sx={{ fontFamily: "Urbanist", padding: "20px 0px", fontWeight: "600" }}>
                  {feature?.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontFamily: "DM Sans" }}>
                  {feature?.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
  );
};

export default RaaSDataPlatform;
