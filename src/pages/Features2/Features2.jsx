import React from "react";
import { Box, Typography } from "@mui/material";

const Features2 = () => {
  return (
    <Box
      height={"100%"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <Box
        marginTop={{ xs: "320px", md: "120px" }}
        order={{ xs: 1, md: 0 }}
        marginRight={"20px"}
        display={{ xs: "none", md: "block" }}
      >
        <img src={"/images/img_features (1).png"} alt="image" />
      </Box>
      <Box
        marginTop={{ xs: "320px", md: "120px" }}
        order={{ xs: 1, md: 0 }}
        marginRight={"20px"}
        display={{ xs: "block", md: "none" }}
      >
        <img src={"/images/img_features (1).png"} alt="image" width={"343px"} />
      </Box>
      <Box
        maxWidth={{ xs: "343px", md: "587px" }}
        maxHeight={"500px"}
        order={{ xs: 0, md: 1 }}
        marginTop={"70px"}
      >
        <Typography
          variant="h5"
          color="#3ea19d"
          fontWeight="700"
          fontSize="16px"
        >
          Embrace Mobility
        </Typography>
        <Typography
          variant="h3"
          fontWeight="700"
          fontSize={{ xs: "22px", md: "46px" }}
          color="#022422"
          marginTop={"20px"}
          marginBottom={"28px"}
        >
          Work Your Way, Anywhere, Anytime
        </Typography>
        <Typography
          variant="subtitle2"
          maxWidth="587px"
          minWidth="343px"
          height="78px"
          fontWeight="400"
          fontSize={{ xs: "14px", md: "16px" }}
          color="#384e4c"
          marginBottom={"28px"}
        >
          Work from anywhere, anytime. Our cloud-based SaaS template liberates
          you from the confines of the office. Stay connected on the road, at
          home, or while sipping coffee at your favorite café.
        </Typography>
        <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }}>
          <Box marginRight={"25px"}>
            <img src="/images/image7.png" alt="image7" />
            <Typography
              variant="h5"
              fontWeight={600}
              marginTop={{ xs: "16px", md: "20px" }}
              marginBottom={{ xs: "16px", md: "12px" }}
            >
              Anywhere, Anytime Access
            </Typography>
            <Typography variant="subtitle1">
              Enjoy the freedom to work or access your tools from virtually
              anywhere, on any device, as long as you have an internet
              connection.
            </Typography>
          </Box>
          <Box>
            <img src="/images/image8.png" alt="image8" />
            <Typography
              variant="h5"
              fontWeight={600}
              marginTop={"20px"}
              marginBottom={"12px"}
            >
              Cross-Device Compatibility
            </Typography>
            <Typography variant="subtitle1">
              Seamlessly switch between desktops, laptops, tablets, and
              smartphones, ensuring your workflow remains uninterrupted on your
              preferred device.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Features2;
