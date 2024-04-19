import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../../../components/Button/Button";

const CtaTwo = () => {
  const handleClick = () => {
    fetch("http://52.15.155.31:8000/api/FetchChatAssessments")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Box
      py={8}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}>
      <Box>
        <Typography
          variant="h4"
          color="#333336"
          fontWeight={"600"}
          sx={{
            padding: { lg: "20px", xs: "2px" },
            lineHeight: { lg: "60px", xs: "auto" },
            width: "100%",
          }}
          fontFamily={"Urbanist"}
          fontSize={{ xs: "2.25 rem", lg: "45px" }}
          textAlign={{ xs: "center", md: "start" }}>
          Explore Our AI Capabilities Try our sample APIs now!
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={3}
        margin={{ xs: "10px 15px", md: "10px 0px" }}>
        <Box display="flex" justifyContent={"center"} ml={3}>
          <Link to="http://52.15.155.31:8000/docs#/" target="_blank">
            <ButtonComponent
              text={"Try Here"}
              variant="contained"
              styles={{ backgroundColor: "#155EEF", color: "#fff" }}
              icon={"images/img_ic_arrow_right_white_a700.svg"}
              onClick={handleClick}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default CtaTwo;
