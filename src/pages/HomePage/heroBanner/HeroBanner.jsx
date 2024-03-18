import React from "react";
import "./HeroBanner.css";
import { Box, Button, Stack } from "@mui/material";

const HeroBanner = () => {
  return (
    <>
      <Stack sx={{ height: "600px", bgcolor: "#034844", position: "relative" }}>
        <div className="home-dashboard-containersss">
          <Box className="home-business-content">
            Real time production grade AI for your enterprise
          </Box>
          <Box className="home-user-content">
            Empowering businesses with safe, transparent, and secure AI
            solutions
          </Box>

          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="center"
            gap={3}
            m={"20px"}
          >
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3EA19D",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  width: { xs: "303px", md: "auto" },
                  ":hover": { backgroundColor: "#12807c" },
                }}
              >
                Explore Our Products
                <img
                  src="images/img_ic_arrow_right_white_a700.svg"
                  alt="ic_arrow right"
                  style={{ height: "14px", width: "14px" }}
                />
              </Button>
            </Box>

            <Box>
              <Button
                variant="text"
                sx={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  width: { xs: "303px", md: "auto" },
                }}
              >
                Explore Our Services
                <img
                  src="images/img_ic_arrow_right_white_a700.svg"
                  alt="ic_arrow right"
                  style={{ height: "14px", width: "14px" }}
                />
              </Button>
            </Box>
          </Box>
          <div className="dashboard-input-box">
            <input
              type="text"
              className="home-input-box"
              placeholder="Enter your Email Address"
            />
            <button className="dashboard-input-button">Get Started</button>
          </div>
        </div>
        <Stack
          sx={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: { md: "auto", sm: "100px", xs: "120px" },
          }}
        >
          <img
            src="images/backgroundFream.png"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </Stack>
        <Stack
          sx={{
            height: { lg: "600px", md: "462px", sm: "378px", xs: "260px" },
            width: { sm: "80%", xs: "100%" },
            position: "absolute",
            bottom: { lg: "-66%", md: "-50%", sm: "-40%", xs: "-19.2%" },
            left: { lg: "9%", md: "8%", sm: "8%", xs: "0" },
          }}
        >
          <img
            src="images/HomeDashboard.png"
            style={{ width: "100%", height: "100%" }}
            alt=""
          />
        </Stack>
      </Stack>
      {/* </Box> */}
      <img src="images/Company_Logo.png" alt="" className="companyLogo" />
    </>
  );
};

export default HeroBanner;
