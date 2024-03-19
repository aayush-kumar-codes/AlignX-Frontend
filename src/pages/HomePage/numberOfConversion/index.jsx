import { Box, Typography } from "@mui/material";
import React from "react";

const NoOfConversion = () => {
  return (
    <Box bgcolor={"#FAFAFA"}>
      <Box margin={"auto"} maxWidth={"1380px"} px={1} py={2}>
        <Box>
          <Typography
            margin={"auto"}
            mt={8}
            variant="h5"
            textAlign={"center"}
            fontSize={{ xs: "28px", md: "46px" }}
            color="#000"
            fontWeight={"600"}
            maxWidth={"792px"}
          >
            Experience a huge Increase in Conversions with Corewelink!
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                padding: { xs: "16px", md: "40px" },
                border: "1px solid #E6ECEB",
                filter: "drop-shadow(0px 1px 4px rgba(2, 36, 34, 0.06))",
                borderRadius: "12px",
                marginTop: "26px",
                width: { md: "281px", xs: "162px" },
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  color={"#000"}
                  textAlign={"center"}
                  fontSize={{ xs: "34px", md: "54px" }}
                  fontWeight={600}
                >
                  120%
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={"#768583"}
                  textAlign={"center"}
                  fontSize={{ xs: "13px", md: "18px" }}
                >
                  Company Growth
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                padding: { xs: "16px", md: "40px" },
                border: "1px solid #E6ECEB",
                filter: "drop-shadow(0px 1px 4px rgba(2, 36, 34, 0.06))",
                borderRadius: "12px",
                marginTop: "26px",
                width: { md: "281px", xs: "162px" },
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  color={"#000"}
                  textAlign={"center"}
                  fontSize={{ xs: "34px", md: "54px" }}
                  fontWeight={600}
                >
                  430+
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={"#768583"}
                  textAlign={"center"}
                  fontSize={{ xs: "13px", md: "18px" }}
                >
                  Capital Raised
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                padding: { xs: "16px", md: "40px" },
                border: "1px solid #E6ECEB",
                filter: "drop-shadow(0px 1px 4px rgba(2, 36, 34, 0.06))",
                borderRadius: "12px",
                marginTop: "26px",
                width: { md: "281px", xs: "162px" },
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  color={"#000"}
                  textAlign={"center"}
                  fontSize={{ xs: "34px", md: "54px" }}
                  fontWeight={600}
                >
                  85+
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={"#768583"}
                  textAlign={"center"}
                  fontSize={{ xs: "13px", md: "18px" }}
                >
                  Team Members
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                padding: { xs: "16px", md: "40px" },
                border: "1px solid #E6ECEB",
                filter: "drop-shadow(0px 1px 4px rgba(2, 36, 34, 0.06))",
                borderRadius: "12px",
                marginTop: "26px",
                width: { md: "281px", xs: "162px" },
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  color={"#022422"}
                  textAlign={"center"}
                  fontSize={{ xs: "34px", md: "54px" }}
                  fontWeight={600}
                >
                  99%
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={"#768583"}
                  textAlign={"center"}
                  fontSize={{ xs: "13px", md: "18px" }}
                >
                  Customer Satisfaction
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NoOfConversion;
