import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLinkData } from "../../components/StaticData/navLinkData";
import CtaTwo from "../HomePage/ctaTwo";
// import { NavLinkData } from "./path/to/NavLinkData"; // Import NavLinkData

const ReAlignAPIFramework = () => {
  // Assuming you want to render the first item from NavLinkData
  const product = NavLinkData?.find((item) => item.name === "Products");

  return (
      <Box
        display="flex"
        flexDirection="column"
        // mx={"auto"}
        width={"full"}
      >
        <Box pt={6}
          pb={3}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          textAlign={"center"} className="AnimationOfProduct1" >
          <Box>
          <Typography
            variant="h6"
            fontFamily={"Urbanist"}
            color="grey"
            fontWeight="700"
            fontSize={{ xs: "16px", md: "18px" }}
          >
            reAlign API Framework {/* Access the title */}
          </Typography>
          <Typography
            variant="h2"
            color="#022422"
            sx={{
              mt: "8px",
              mb: "18px",
              fontWeight: "600",
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontSize: { xs: "24px", md: "40px" },
            }}
            margin={"auto"}
          >
            {product.list[0].shortDescription} {/* Access the shortDescription */}
          </Typography>
          </Box>
          {/* <Button variant="contained" sx={{ backgroundColor: "#155EEF", display: "flex", alignItems: "center", width: { xs: "303px", md: "auto" }, ":hover": { backgroundColor: "#3876f2",borderRadius:"25px" } }}>
            Schedule Demo
            <img src="images/img_ic_arrow_right_white_a700.svg" alt="ic_arrow right" style={{ height: "14px", width: "14px" }} />
          </Button> */}
          <Box
          //mt={{ xs: "0", md: "1" }}
          //p={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          // width={"500px"}
          // height={"500px"}
          sx={{
          }}
        >
          <img
            src="images/realignlogo.png"
            style={{ maxWidth: "100%" }}
            alt=""
          />
        </Box> 
        </Box >
        

        <Box py={3} textAlign={"start"} className="AnimationOfProduct1">
          <Typography
            variant="h4"
            color="#022422"
            sx={{
              mt: "8px",
              mb: "18px",
              fontWeight: "700",
              color: "#333336",
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontSize: { xs: "20px", md: "30px" },
            }}
            margin={"auto"}
          >
            {product.list[0].description1} {/* Access the description1 */}
          </Typography>
          <Typography
            variant="body1"
            fontSize="18px"
            fontWeight="400"
            fontFamily={"DM Sans"}
            textAlign="start"
            paddingBottom={"20px"}
            color="#384e4c"
            margin={"auto"}
          >
            {product.list[0].description2} {/* Access the description2 */}
          </Typography>
        </Box>
        <CtaTwo />
        <Grid
        my={2}
          container
          spacing={2}
          justifyContent="center"
          alignItems="stretch"
        >
          {product.list[0].keyFeatuesContent2.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Box
                bgcolor={"white"}
                //border={"2px solid #e6eceb"}
                boxShadow=" rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
                p={2}
                sx={{ height: "280px"}}
                textAlign={"center"}
                borderRadius={"10px"}
              >
                {/* <Box> */}
                <img
                  src={"images/latestlogo1.png"}
                  alt={`featurespic${index + 1}`}
                  style={{ width: "20%", height: "20%",marginTop:"10px" }}
                />
                {/* </Box> */}
                <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Urbanist",
                    padding: "20px 0px",
                    fontWeight: "600",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography sx={{ fontFamily: "DM Sans" }} variant="subtitle2">
                  {feature.description}
                </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box >
          <Typography
            variant="h6"
            fontWeight="500"
            fontFamily={"DM Sans"}
            textAlign="start"
            paddingBottom={"20px"}
            color="#384e4c"
            margin={"auto"}
          >
            {product.list[0].keyfeatues} {/* Access the keyfeatues */}
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="stretch"
        >
          {product.list[0].keyFeatuesContent.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Box
                bgcolor={"white"}
                //border={"2px solid #e6eceb"}
                boxShadow=" rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
                p={2}
                sx={{ height: "280px"}}
                textAlign={"center"}
                borderRadius={"10px"}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Urbanist",
                    padding: "20px 0px",
                    fontWeight: "600",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography sx={{ fontFamily: "DM Sans" }} variant="subtitle2">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
  );
};

export default ReAlignAPIFramework;
