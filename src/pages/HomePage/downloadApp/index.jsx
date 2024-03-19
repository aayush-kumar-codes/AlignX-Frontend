import { Box, Button, Typography } from "@mui/material";
import React from "react";

const DownloadApp = () => {
  return (
    <Box className="w-full bg-gray-100">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "between",
          alignItems: "center",
          width: "full",
          gap: 5,
          mx: "auto",
          p: 5,
          maxWidth: "[1218px]",
        }}
      >
        <Box sx={{ height: "[899px]", width: "[41%]" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "[85%]",
              height: "full",
              left: 0,
              bottom: 0,
              top: 0,
              my: "auto",
              bg: "teal.900",
              position: "absolute",
            }}
          >
            <img
              src="images/img_graphic_left.svg"
              alt="graphicleft_one"
            />
          </Box>
          <img
            src="images/iphone12pro.png"
            alt="iphone12pro_one"
            style={{
              height: "659px",
              width: "59%",
              margin: "auto 0",
              backgroundPosition: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "[48%]",
            md: { width: "full" },
            gap: "[55px]",
            sm: { gap: "[27px]" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pt: "[3px]",
                gap: "[22px]",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "teal.400",
                  tracking: "[1.60px]",
                  textTransform: "uppercase",
                }}
              >
                COREWELANK APP
              </Typography>
              <Typography variant="h4">
                Unlock the Power of Corewelank in your hand
              </Typography>
            </Box>
            <Typography variant="body1">
              Download our app now and experience the future of productivity.
              Take the first step towards success today.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              sm: { flexDirection: "row" },
            }}
          >
            <img
              src="images/img_appstore.svg"
              alt="appstore_one"
              style={{ height: "59px" }}
            />
            <img
              src="images/img_googleplay.png"
              alt="googleplay_one"
              style={{
                width: "20%",
                height: "59px",
                backgroundPosition: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: 7,
              sm: { flexDirection: "row" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "full",
                gap: 5,
              }}
            >
              <Button sx={{ height: "64px", width: "64px" }}>
                <img src="images/img_frame.svg" />
              </Button>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "[3.5]" }}
              >
                <Typography variant="h4" sx={{ tracking: "[0.22px]" }}>
                  Intuitive Customization
                </Typography>
                <Typography variant="body1">
                  Tailor your SaaS template effortlessly to match your
                  business's unique identity. Customize layouts, color schemes,
                  and branding elements with an easy-to-use interface.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "full",
                gap: 5,
              }}
            >
              <Button sx={{ height: "64px", width: "64px" }}>
                <img src="images/img_frame_teal_400.svg" />
              </Button>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "[3.5]" }}
              >
                <Typography variant="h4" sx={{ tracking: "[0.22px]" }}>
                  Seamless Collaboration
                </Typography>
                <Typography variant="body1">
                  Foster teamwork with collaborative tools that connect your
                  team, no matter where they are. Streamline communication,
                  share files, and keep everyone on the same page.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DownloadApp;
