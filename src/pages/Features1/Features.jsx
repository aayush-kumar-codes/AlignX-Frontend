import { Box, Typography } from "@mui/material";
import React from "react";
import "./Features.css";
import ButtonComponent from "../../components/Button/Button";


const Features1 = () => {
  return (
    <Box className="mainConatainer">
      <Box className="card">
        <Typography variant="h5" className="title">
          Tailored to Perfection
        </Typography>
        <Typography variant="h3" className="description">
          Crafting Solutions for Your Unique Needs
        </Typography>
        <Typography variant="subtitle2" className="shortDescription">
          Tailor your SaaS template effortlessly to match your business's unique
          identity. Customize layouts, color schemes, and branding elements with
          an easy-to-use interface.
        </Typography>
        <Box className="buttonCard">
          <ButtonComponent
            styles={{
              border: "1px solid #6E79FF",
              borderRadius: "8px",
            }}
            classname="buttonStyle"
            icon={
              <img src="/images/rightarrow.png" alt="rightarrow"/>
            }
            text={"Learn More"}
          />
          <ButtonComponent
            styles={{
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#6E79FF",
              color: "white",
            }}
            classname="buttonStyle1"
            icon={
              <img src="/images/whitearrow.png" alt="whitearrow"/>
            }
            text={"Learn More"}
          />
        </Box>
      </Box>
      <Box className="imageCard" display={{ xs: "none", md: "block" }}>
        <img src={"/images/img_features.png"} alt="image" className="image" />
      </Box>
      <Box
        className="imageCard"
        display={{ xs: "block", md: "none" }}
        marginTop="90px"
        marginRight="16px"
        marginLeft="16px"
      >
        <img src={"/images/Frame 37271 (1).png"} alt="image" className="image" />
      </Box>
    </Box>
  );
};

export default Features1;
