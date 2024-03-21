import React from "react";
import TypewriterComponent from "typewriter-effect";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const HeroBanner = () => {
  return (
    <>
      <Stack
        sx={{
          height: "640px",
          bgcolor: "#fff",
          position: "relative",
          paddingTop: { xs: "10px", md: "50px" },
        }}>
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
              fontWeight: "700",
              color: "#000",
              margin: "auto",
              paddingTop: { xs: "10px", md: "20px" },
            }}>
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: true,
                delay: 30,
                strings: [
                  "Data Prepared,",
                  "Data Prepared, Aligned,",
                  "Data Prepared, Aligned, and Delivered to your LLMs in Real Time.",
                ],
              }}
            />
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "DM Sans",
              width: {
                sm: "50%",
                md: "90%",
                marginTop: {
                  sm: "20px",
                  md: "30px",
                },
                margin: "auto",
                paddingTop: "20px",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                fontSize: { xs: "17px", md: "24px" },
                color: "#000 ",
              },
            }}>
            Empowering businesses with safe, transparent, and secure AI
            solutions
          </Typography>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="center"
            gap={3}
            m={"20px"}>
            <Box
              sx={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
              }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#155EEF",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  width: { xs: "303px", md: "auto" },
                  ":hover": { backgroundColor: "#3876f2" },
                }}>
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
              }}>
              <Button
                variant="text"
                sx={{
                  backgroundColor: "#EFF4FF",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  width: { xs: "303px", md: "auto" },
                  ":hover": { backgroundColor: "#D1E0FF" },
                }}>
                Explore Our Services
                <img
                  src="images/img_ic_arrow_right_white_a700.svg"
                  alt="ic_arrow right"
                  
                  style={{ height: "14px", width: "14px", }}
                />
              </Button>
            </Box>
          </Box>
          <Box
            gap={2}
            sx={{
              width: { xs: "90%", sm: "80%", md: "60%", lg: "40%" },
              margin: "auto",
              marginTop: { sx: "30px", md: "50px" },
              border: { sm: "1px solid gray", xs: "none" },
              borderRadius: "10px",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              height: { sx: "40px", md: "60px" },
              padding: { xs: "8px" },
            }}>
            <TextField
              focused={false}
              sx={{
                boder: "2px solid #000",
                paddingBottom: "10px",
                width: { sx: "40%", md: "70%" },
                overflow: "hidden",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  color: "#000",
                  border: "none",
                  fontFamily: "Urbanist",
                  height: "20px",
                  width: "fit",
                  marginTop: "10px",
                },
                "& .MuiInputLabel-outlined": {
                  border: "1px solid #fff",
                  color: "#fff",
                },
                "&.MuiTextField-root": {
                  border: { xs: "1px solid #000", sm: "none" },
                  borderRadius: "4px",
                },
              }}
              placeholder="Enter your email Address"
            />
            <Button
              sx={{
                fontFamily: "DM Sans",
                backgroundColor: "#155EEF",
                color: "white",
                fontSize: { sx: "8px", md: "14px" },
                cursor: "pointer",
                border: "none",
                borderRadius: "8px",
                padding: "6px 16px",
                ":hover": { backgroundColor: "#3876f2" },
              }}>
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
          }}>
          <img
            src="images/backgroundFream.png"
            alt=""
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </Stack>
        <Stack
          sx={{
            height: { lg: "600px", md: "462px", sm: "378px", xs: "260px" },
            width: { sm: "80%", xs: "100%" },
            position: "absolute",
            bottom: { lg: "-60%", md: "-50%", sm: "-40%", xs: "-18%" },
            left: { lg: "9%", md: "8%", sm: "8%", xs: "0" },
          }}>
          <img
            src="images/HomeDashboard.png"
            style={{ maxWidth: "100%", height: "100%" }}
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
          marginTop: { xs: "32%", sm: "40%", md: "34%", lg: "28%" },
        }}></Box>
    </>
  );
};
export default HeroBanner;