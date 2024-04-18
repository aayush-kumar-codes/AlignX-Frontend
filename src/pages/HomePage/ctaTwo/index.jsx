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
            letterSpacing: { lg: "2px", xs: "0px" },
            padding: "4px",
            lineHeight: { lg: "60px", xs: "auto" },
            width: "90%",
          }}
          fontFamily={"Urbanist"}
          fontSize={{ xs: "22px", md: "45px" }}
          textAlign={{ xs: "center", md: "start" }}>
          Explore Our AI Capabilities - Try our sample APIs now!
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={3}
        margin={{ xs: "10px 15px", md: "10px 0px" }}>
        <Box display="flex" justifyContent={"center"} ml={1}>
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
