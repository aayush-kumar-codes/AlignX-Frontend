import { Box, Grid, Typography } from "@mui/material";
import "./Product.css";
import { NavLinkData } from "../../components/StaticData/navLinkData";

import ParticlesBackground from "../../components/particlesBackground";
import ButtonComponent from "../../components/Button/Button";

const RaaSDataPlatform = () => {
  const productData = NavLinkData?.find((item) => item.name === "Products");

  if (!productData || !productData?.list) {
    return null; // Render nothing if the product data is not found
  }

  const raasPlatform = productData?.list?.find(
    (item) => item.path === "RaaSDataPlatform"
  );

  if (!raasPlatform) {
    return null; // Render nothing if the RaaS Data Platform data is not found
  }

  const {
    shortDescription,
    description1,
    description2,
    processOverview,
    processOverviewContent,
  } = raasPlatform;

  return (
    <Box display="flex" flexDirection="column" width="full">
      <Box
        pt={6}
        pb={3}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        textAlign={"center"}
        className="AnimationOfProduct1"
        zIndex={3}
      >
        {/* <Typography
          variant="h6"
          fontSize={{ xs: "16px", md: "18px" }}
          fontFamily="Urbanist"
          color="grey"
          fontWeight="700"
        >
          RAGx: A RaaS Data Platform
        </Typography> */}
        <Typography
          variant="h2"
          color="#022422"
          mt="8px"
          mb="18px"
          fontWeight="600"
          fontFamily="Urbanist"
          fontSize={{ xs: "24px", md: "40px" }}
        >
          {shortDescription}
        </Typography>
        <ButtonComponent
          text={"Schedule Demo"}
          variant="contained"
          styles={{ backgroundColor: "#155EEF", fontWeight: "600", zIndex: 3 }}
          icon={"images/img_ic_arrow_right_white_a700.svg"}
        />
      </Box>

      <Box
        sx={{
          position: "relative",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 3,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "blue",
          }}
        >
          <ParticlesBackground />
          <Typography
            variant="caption"
            maxWidth={"900px"}
            textAlign={"center"}
            zIndex={3}
            fontWeight={600}
            my={"auto"}
            fontSize={{ xs: "20px", md: "35px" }}
          >
            Elevate your AI journey with Modular RAG for Production grade AI
            solutions
          </Typography>
        </Box>
      </Box>
      {/* <Box
          mt={{ xs: "0", md: "1" }}
          p={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            pt: 4,
          }}
          
        >
           <img
            src="images/particleslogo2.png"
            style={{ maxWidth: "80%" }}
            alt=""
          />
        </Box> */}

      <Box
        py={3}
        textAlign="start"
        className="AnimationOfProduct1"
        sx={{ zIndex: 3 }}
      >
        <Typography
          variant="h4"
          color="#333336"
          mt="8px"
          mb="18px"
          fontWeight="700"
          fontFamily="Urbanist"
          fontSize={{ xs: "20px", md: "30px" }}
        >
          {description1}
        </Typography>
        <Typography
          variant="body1"
          fontSize="18px"
          fontWeight="400"
          fontFamily="DM Sans"
          textAlign="start"
          paddingBottom="20px"
          color="#384e4c"
        >
          {description2}
        </Typography>
        <Box>
        <img src="images/XY-graph-v01.png" width={'100%'} alt="xy-graph"/>
        </Box>
      </Box>
      <Box className="AnimationOfProduct1">
        <Typography
          variant="h6"
          fontWeight="500"
          fontFamily="DM Sans"
          textAlign="start"
          paddingBottom="20px"
          color="#384e4c"
          margin="auto"
        >
          {processOverview}
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center" alignItems="stretch">
        {processOverviewContent?.map((feature, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box
              bgcolor="white"
              p={2}
              boxShadow=" rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
              sx={{ height: "250px", borderRadius: "10px" }}
              textAlign="center"
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Urbanist",
                  padding: "20px 0px",
                  fontWeight: "600",
                }}
              >
                {feature?.title}
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "DM Sans" }}>
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
