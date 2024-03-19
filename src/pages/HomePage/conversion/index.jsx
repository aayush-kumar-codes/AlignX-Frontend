import { Box, Typography } from "@mui/material";
import React from "react";

const Conversion = () => {
  return (
    <Box
      py={4}
      px={1}
      sx={{
        width: "full",
        margin: "0 auto",
        bgcolor: "#022422",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "[90%]",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography variant="h2" sx={{ color: "#fff", textAlign: "center",fontSize:{xs:"34px",md:"54px"} }}>
            120%
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#AFB8B7",
              tracking: "[0.22px]",
              textAlign: "center",
              fontSize:{xs:"13px",md:"18px"}
            }}
          >
            Company Growth
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography variant="h2" sx={{ color: "#fff", textAlign: "center" ,fontSize:{xs:"34px",md:"54px"}}}>
            430+
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#AFB8B7",
              tracking: "[0.22px]",
              textAlign: "center",
              fontSize:{xs:"13px",md:"18px"}
            }}
          >
            Capital Raised
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2.5,
          }}
        >
          <Typography variant="h2" sx={{ color: "#fff", textAlign: "center" ,fontSize:{xs:"34px",md:"54px"}}}>
            99%
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#AFB8B7",
              tracking: "[0.22px]",
              textAlign: "center",
              fontSize:{xs:"13px",md:"18px"}
            }}
          >
            Customer Satisfaction
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Conversion;
