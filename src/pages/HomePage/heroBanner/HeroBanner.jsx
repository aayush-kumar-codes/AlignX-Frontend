import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

const HeroBanner = () => {
  return (
    <>
      <Stack
        sx={{
          height: "640px",
          bgcolor: "#fff",
          position: "relative",
          paddingTop: { xs: "10px", md: "30px" },
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              width: { xs: "90%", md: "90%" },
              fontSize: { xs: "30px", md: "44px" },
              fontFamily: "Urbanist",
              fontWeight: "bold",
              color: "#000",
              margin: "auto",
              paddingTop: { xs: "10px", md: "20px" },
            }}
          >
            Real Time Production Grade AI For Your Enterprise
          </Typography>
          <Typography
          variant="body1"
            sx={{
              fontFamily: "DM Sans",
              width: {
                sm: "50%",
                md: "90%",
                marginTop: {
                  sm: "30px",
                  md: "40px",
                },
                margin: "auto",
                paddingTop: "20px",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                fontSize: "17px",
                color: "#000 ",
              },
            }}
          >
            Empowering businesses with safe, transparent, and secure AI
            solutions
          </Typography>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="center"
            gap={3}
            m={"20px"}
          >
            <Box
              sx={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#155EEF",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  width: { xs: "303px", md: "auto" },
                  ":hover": { backgroundColor: "#3876f2" },
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
            <Box
              sx={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="text"
                sx={{
                  backgroundColor: "transparent",
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                  width: { xs: "303px", md: "auto" },
                  ":hover": { color: "blue" },
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
          <Box
            sx={{
              width: { xs: "90%", sm: "80%", md: "60%", lg: "40%" },
              margin: "auto",
              marginTop: { sx: "30px", md: "50px" },
              border: "1px solid white",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              height: "60px",
              padding: { xs: "8px" },
              border: "1px solid gray",
            }}
          >
            <input
              type="text"
              style={{
                width: "70%",
                border: "none",
                backgroundColor: "transparent",
                color: "#000",
                outline: "none",
                // fontSize:"20px"
                // fontSize: { xs: "10px", md: "30px" },
              }}
              placeholder="Enter your Email Address"
            />
            <Button
              sx={{
                width: "30%",
                borderRadius: "10px",
                backgroundColor: "#155EEF",
                color: "white",
                cursor: "pointer",
                border: "none",
                ":hover": { backgroundColor: "#3876f2" },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
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
            bottom: { lg: "-60%", md: "-50%", sm: "-40%", xs: "-10.2%" },
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
      <Box
        sx={{
          width: "80%",
          overflow: "clip",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: { xs: "125px", md: "35%", lg: "38%" },
        }}
      ></Box>
    </>
  );
};
export default HeroBanner;
