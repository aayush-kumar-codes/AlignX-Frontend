import { Box, Grid, Typography } from "@mui/material";
import { featuresData } from "../../../utils/StaticData/featureData";

const FeatureOne = () => {
  return (
    <Box bgcolor={"white"} p={2}>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth="1250px"
        mx={"auto"}
        width={"full"}>
        <Box py={3} textAlign={"center"}>
          <Typography
            variant="h6"
            fontFamily={"Urbanist"}
            color="grey"
            fontWeight="700">
            FEATURES
          </Typography>
          <Typography
            variant="h4"
            color="#022422"
            sx={{
              mt: "8px",
              mb:"18px",
              fontWeight: "700",
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontSize: { xs: "16px", md: "44px" },
            }}
            margin={"auto"}>
            Discover the array of game-changing features
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight="400"
            fontFamily={"DM Sans"}
            textAlign="center"
            paddingBottom={"20px"}
            color="#384e4c"
            margin={"auto"}>
            Revolutionize the way you work and set your business on the path to
            success with our all-encompassing SaaS solution.
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          px={4}
          // sx={{ height: { xs: "100%", sm: "300px", md: "880px" } }}
          justifyContent="center"
          alignItems="stretch">
          {featuresData.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Box
                bgcolor={"white"}
                border={"2px solid #e6eceb"}
                p={3}
                sx={{ height: { xs: "350px", sm: "360px", md: "330px" } }}
                textAlign={"center"}
                borderRadius={"10px"}>
                <img
                  src={feature.imageSrc}
                  alt={`featurespic${index + 1}`}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily:"Urbanist",
                    padding: "20px 0px",
                    fontWeight: "600",
                  }}>
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
    </Box>
  );
};

export default FeatureOne;