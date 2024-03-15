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
      overflow={"auto"}
    >
      <Box
        marginTop={{ xs: "320px", md: "120px" }}
        order={{ xs: 1, md: 0 }}
        marginRight={"20px"}
      >
        <img
          src={"/images/img_features (1).png"}
          alt="image"
          className="image"
        />
      </Box>
      <Box
        maxWidth={{ xs: "343px", md: "587px" }}
        maxHeight={"500px"}
        order={{ xs: 0, md: 1 }}
      >
        <Typography variant="h5" className="title">
          Embrace Mobility
        </Typography>
        <Typography
          variant="h3"
          className="description"
          marginTop={"20px"}
          marginBottom={"28px"}
        >
          Work Your Way, Anywhere, Anytime
        </Typography>
        <Typography
          variant="subtitle2"
          className="shortDescription"
          marginBottom={"28px"}
        >
          Work from anywhere, anytime. Our cloud-based SaaS template liberates
          you from the confines of the office. Stay connected on the road, at
          home, or while sipping coffee at your favorite café.
        </Typography>
        <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }}>
          <Box marginRight={"25px"}>
          <img src="/images/image7.png" alt="image7"/>
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
          <img src="/images/image8.png" alt="image8"/>
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
