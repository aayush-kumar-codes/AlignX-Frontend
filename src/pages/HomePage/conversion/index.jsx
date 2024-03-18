import { Box, Typography } from "@mui/material";
import React from "react";

const Conversion = () => {
  return (
    <Box
      py={4}
      sx={{
        width: "full",
        margin: "0 auto",
        bgcolor: "#034844",
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
          <Typography variant="h2" sx={{ color: "#fff", textAlign: "center" }}>
            120%
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#AFB8B7",
              tracking: "[0.22px]",
              textAlign: "center",
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
          <Typography variant="h2" sx={{ color: "#fff", textAlign: "center" }}>
            430+
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#AFB8B7",
              tracking: "[0.22px]",
              textAlign: "center",
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
          <Typography variant="h2" sx={{ color: "#fff", textAlign: "center" }}>
            99%
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#AFB8B7",
              tracking: "[0.22px]",
              textAlign: "center",
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
