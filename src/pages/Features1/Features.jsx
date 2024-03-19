import { Box, Typography } from "@mui/material";
import React from "react";
import ButtonComponent from "../../components/Button/Button";

const Features1 = () => {
  return (
    <Box
      display=" flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-around"
      height="100%"
      overflow="auto"
    >
      <Box
        maxWidth="587px"
        minWidth="300px"
        maxHeight="366px"
        marginTop={{ xs: "70px", md: "237px" }}
        marginLeft={{ xs: "16px", md: "0px" }}
      >
        <Typography
          variant="h5"
          width=" 229px"
          fontWeight="700"
          fontSize="16px"
          color="#3ea19d"
        >
          Tailored to Perfection
        </Typography>
        <Typography
          variant="h3"
          maxWidth=" 587px"
          minWidth="343px"
          fontWeight="700"
          fontSize={{ xs: "22px", md: "46px" }}
          color="#022422"
          margin={{ xs: "16px 0px", md: "20px 0px" }}
        >
          Crafting Solutions for Your Unique Needs
        </Typography>
        <Typography
          variant="subtitle2"
          maxWidth="587px"
          minWidth="343px"
          height="78px"
          fontWeight="400"
          fontSize={{ xs: "14px", md: "16px" }}
          color="#384e4c"
          marginBottom={{ xs: "16px", md: "50px" }}
        >
          Tailor your SaaS template effortlessly to match your business's unique
          identity. Customize layouts, color schemes, and branding elements with
          an easy-to-use interface.
        </Typography>
        <Box marginTop={"16px"}>
          <ButtonComponent
            styles={{
              border: "1px solid #6E79FF",
              borderRadius: "8px",
              display: { xs: "none", md: "block" },
            }}
            gap="10px"
            width=" 151px"
            height="48px"
            icon={<img src="/images/rightarrow.png" alt="rightarrow" />}
            text={"Learn More"}
          />
          <ButtonComponent
            styles={{
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#6E79FF",
              display: { xs: "block", md: "none" },
              color: "white",
            }}
            gap="10px"
            width=" 151px"
            height="48px"
            icon={<img src="/images/whitearrow.png" alt="whitearrow" />}
            text={"Learn More"}
          />
        </Box>
      </Box>
      <Box marginTop={"120px"} display={{ xs: "none", md: "block" }}>
        <img src={"/images/img_features.png"} alt="image" />
      </Box>
      <Box
        display={{ xs: "block", md: "none" }}
        marginTop="90px"
        marginRight="16px"
        marginLeft="16px"
      >
        <img src={"/images/Frame 37271 (1).png"} alt="image" />
      </Box>
    </Box>
  );
};

export default Features1;
