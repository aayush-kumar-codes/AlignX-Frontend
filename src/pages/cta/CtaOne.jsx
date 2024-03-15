import { Box, Button, Typography } from "@mui/material";
import React from "react";

const CtaOne = () => {
  return (
    <Box bgcolor="#034844" borderRadius="12px" mx={1} my={2} overflow="hidden">
      <Box
      minWidth={"343px"}
      padding={{xs:"20px",md:"0px"}}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img
            src="images/img_graphic_left.svg"
            alt="graphicleft_one"
            height="486px"
            maxwidth="100%"
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={4}
          flex={1}
          textAlign="center"
          sx={{ width: { xs: "100%", lg: "200px" } }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#f5f5f5",
              fontWeight: "600",
            }}
          >
            Ready to Revolutionize Your Business? Try Our SaaS Template Today!
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: "#f5f5f5cc",
              width: "98%",
              textAlign: "center",
            }}
          >
            Our SaaS template is the key to unlocking your full potential.
            Whether you're a startup, a growing enterprise, or an established
            industry leader, our versatile solution is designed for businesses
            of all shapes and sizes. Don't miss out – try it now and experience
            the difference!
          </Typography>
          <Box
            display="flex"
            flexDirection={{xs:"column", md:"row"}}
            justifyContent="center"
            gap={3}
          >
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3EA19D",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  width:{xs:"303px", md:"auto"},
                  ":hover":{backgroundColor: "#12807c"}
                }}
              >
                Get Started
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
                  width:{xs:"303px", md:"auto"},
                  
                }}
              >
                Contact Sales
                <img
                  src="images/img_ic_arrow_right_white_a700.svg"
                  alt="ic_arrow right"
                  style={{ height: "14px", width: "14px" }}
                />
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img
            src="images/img_graphic_left.svg"
            alt="graphicright"
            height="486px"
            maxwidth="100%"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CtaOne;
