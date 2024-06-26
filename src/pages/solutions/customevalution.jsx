import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { navbarSolutionList } from "../../utils/StaticData/solutionPageData";
import { useOutletContext } from "react-router";
import {
  customEvalutionFeature,
  customEvalutionHowToWorkFeatureData,
  customEvalutionBenifitFeaturesData,
} from "../../utils/StaticData/featureData";

const CustomEvalution = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const Animation = useOutletContext();
  return (
    <Box
      className={`${Animation ? "AnimationOfProduct1" : null}`}
      bgcolor="#fff"
      mb={3}>
      <Box mb={4} className="AnimationOfProduct1">
        <Typography
          variant="h5"
          textAlign={"start"}
          fontFamily={"Urbanist"}
          fontWeight={600}
          sx={{ fontSize: "25px" }}>
          {navbarSolutionList[1].title}
        </Typography>
        <Typography
          variant="h5"
          textAlign={"start"}
          fontFamily={"Urbanist"}
          fontWeight={600}
          sx={{ fontSize: "25px", color: "#226bf7" }}>
          {navbarSolutionList[1]?.title1}
        </Typography>
        <Typography variant="body1" my={1} textAlign={"start"}>
          {navbarSolutionList[1].description}
        </Typography>
      </Box>
      {/* <Box
        mt={4}
        sx={{
          display: "grid",
          paddingTop: "20px",
          gridTemplateColumns: {
            lg: "1fr 1fr",
            md: "1fr 1fr",
            xs: "1fr",
          },
          gap: "10px",
        }}>
        <Box
          sx={{
            boxShadow: "2px 2px 2px 2px #F0F0F0",
            border: "1px solid #d1d1d6",
            borderRadius: "10px",
            p: 2,
          }}>
          <Box mb={4} className="AnimationOfProduct2">
            <Typography
              variant="h5"
              textAlign={"start"}
              fontFamily={"Urbanist"}
              fontWeight={600}
              sx={{ fontSize: "25px", color: "#022422" }}>
              {navbarSolutionList[2].title}
            </Typography>
            <Typography variant="body1" my={1} textAlign={"start"}>
              {navbarSolutionList[2].description}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            boxShadow: "2px 2px 2px 2px #F0F0F0",
            border: "1px solid #d1d1d6",
            borderRadius: "10px",
            p: 2,
          }}>
          <Box className="AnimationOfProduct2">
            <Typography
              variant="h5"
              textAlign={"start"}
              fontFamily={"Urbanist"}
              fontWeight={600}
              sx={{ fontSize: "25px", color: "#022422" }}>
              {navbarSolutionList[3].title}
            </Typography>
            <Typography variant="body1" my={1} textAlign={"start"}>
              {navbarSolutionList[3].description}
            </Typography>
          </Box>
        </Box>
      </Box> */}
      <Box>
        <img src="/images/Custom.png" width={"100%"} alt="realign-api" />
      </Box>
      <Divider sx={{ marginTop: "50px" }} variant="middle" flexItem />
      <img src="/images/IMG_1913.png" width={"100%"} alt="custom" />
      {/* <Box
        mt={4}
        sx={{
          display: "grid",
          paddingTop: "20px",
          gridTemplateColumns: {
            lg: "1fr 1fr",
            md: "1fr 1fr",
            xs: "1fr",
          },
          gap: "10px",
        }}>
        {customEvalutionFeature.map((feature, index) => (
          <Box
            key={index}
            sx={{
              boxShadow: "2px 2px 2px 2px #F0F0F0",
              border: "1px solid #d1d1d6",
              borderRadius: "10px",
              p: 2,
            }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  lg: "auto 1fr",
                  md: "auto 1fr",
                  xs: "1fr",
                },
                gap: 2,
                alignItems: "center",
              }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <img
                  src={"/images/latestlogo1.png"}
                  width={"60px"}
                  alt=""
                  style={{
                    backgroundColor: feature?.bgColor,
                    borderRadius: "15px",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Urbanist",
                    fontWeight: "600",
                  }}>
                  {feature.title}
                </Typography>
                <Typography sx={{ fontFamily: "DM Sans" }} variant="subtitle2">
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Typography
        mt={8}
        variant="h2"
        // color="#022422"
        color="grey"
        sx={{
          textAlign: "center",
          fontWeight: "600",
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontSize: { xs: "24px", md: "40px" },
        }}>
        How it works ?
      </Typography>

      <Box
        sx={{
          display: "grid",
          paddingTop: "20px",
          gridTemplateColumns: {
            lg: "1fr 1fr 1fr",
            md: "1fr 1fr",
            xs: "1fr",
          },
          gap: "10px",
        }}>
        {customEvalutionHowToWorkFeatureData.map((feature, index) => (
          <Box
            key={index}
            sx={{
              boxShadow: "2px 2px 2px 2px #F0F0F0",
              border: "1px solid #d1d1d6",
              borderRadius: "10px",
              p: 2,
            }}>
            <Box
              sx={{
                display: "grid",

                // gridTemplateColumns: {
                //   lg: "auto 1fr",
                //   md: "auto 1fr",
                //   xs: "1fr",
                // },
                gap: 2,
                alignItems: "center",
              }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <img
                  src={"/images/latestlogo1.png"}
                  width={"60px"}
                  alt=""
                  style={{
                    backgroundColor: feature?.bgColor,
                    borderRadius: "15px",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Urbanist",
                    fontWeight: "600",
                    textAlign: "center",
                  }}>
                  {feature.title}
                </Typography>
                <Typography
                  sx={{ fontFamily: "DM Sans", textAlign: "center" }}
                  variant="subtitle2">
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box> */}
      {/* <Typography
        mt={8}
        variant="h2"
        // color="#022422"
        color="grey"
        sx={{
          textAlign: "center",
          fontWeight: "600",
          fontFamily: "Urbanist",
          fontStyle: "normal",
          fontSize: { xs: "24px", md: "40px" },
        }}>
        Benefits
      </Typography> */}
      <Box>
        <img src="/images/Benefits.png" width={"100%"} alt="realign-api" />
      </Box>
      <Box
        sx={{
          display: "grid",
          paddingTop: "20px",
          gridTemplateColumns: {
            lg: "1fr 1fr",
            md: "1fr 1fr",
            xs: "1fr",
          },
          gap: "10px",
        }}>
        {/* {customEvalutionBenifitFeaturesData.map((feature, index) => (
          <Box
            key={index}
            sx={{
              boxShadow: "2px 2px 2px 2px #F0F0F0",
              border: "1px solid #d1d1d6",
              borderRadius: "10px",
              p: 2,
            }}>
            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  lg: "auto 1fr",
                  md: "auto 1fr",
                  xs: "1fr",
                },
                gap: 2,
                alignItems: "center",
              }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <img
                  src={"/images/latestlogo1.png"}
                  width={"60px"}
                  alt=""
                  style={{
                    backgroundColor: feature?.bgColor,
                    borderRadius: "15px",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Urbanist",
                    fontWeight: "600",
                  }}>
                  {feature.title}
                </Typography>
                <Typography sx={{ fontFamily: "DM Sans" }} variant="subtitle2">
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))} */}
        {/* <Box>
          <img src="/images/Benefits.png" width={"100%"} alt="realign-api" />
        </Box> */}
      </Box>
    </Box>
  );
};

export default CustomEvalution;
