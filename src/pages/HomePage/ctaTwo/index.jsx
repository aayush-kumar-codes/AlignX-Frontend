import { Box, Button, Typography } from "@mui/material";
import React from "react";

const CtaTwo = () => {
  return (
    <Box bgcolor="#ffffff">
      <Box mx="auto" width="full" px={2}>
        <Box
          display="flex"
          justifyContent="flex-end"
          bgcolor="#022422"
          overflow="hidden"
          borderRadius="12px"
          mx={1}
          my={2}
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent={{ xs: "center", md: "space-between" }}
            alignItems="center"
            width="93%"
            minWidth={"343px"}
            minHeight={"821px"}
            gap={5}
          >
            <Box
              display="flex"
              flexDirection="column"
              width="100%"
              gap={3}
              order={{ xs: "1", md: "0" }}
              paddingBottom={{ xs: "68px", md: "0px" }}
              margin={{ xs: "0px 20px", md: "0px 0px" }}
            >
              <Typography
                variant="h4"
                style={{ color: "#f5f5f5", fontWeight: "600" }}
                textAlign={{ xs: "center", md: "start" }}
              >
                Ready to Revolutionize <br />
                Your Business?
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "#f5f5f5cc",
                  width: "100%",
                }}
                textAlign={{ xs: "center", md: "start" }}
              >
                Our SaaS template is the key to unlocking your full
                potential.Don't miss out – try it now and experience the
                difference!
              </Typography>
              <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                gap={3}
                margin={{ xs: "0px 15px", md: "0px 0px" }}
              >
                <Box display="flex" justifyContent={"center"}>
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
                    Get Started
                    <img
                      src="images/img_ic_arrow_right_white_a700.svg"
                      alt="ic_arrow right"
                      style={{ height: "14px", width: "14px" }}
                    />
                  </Button>
                </Box>

                <Box display="flex" justifyContent={"center"}>
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
            <Box order={{ xs: "0", md: "1" }}>
              <img
                src="images/img_mask_group.png"
                alt="image"
                style={{ maxWidth: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CtaTwo;
