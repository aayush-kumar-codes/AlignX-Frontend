import React from "react";
import CtaOne from "./CtaOne";
import { Box } from "@mui/material";
import CtaTwo from "./CtaTwo";

const Cta = () => {
  return (
    <>
      <Box bgcolor="#ffffff">
        <Box mx="auto" maxWidth="1380px">
          <CtaOne />
          <CtaTwo />
        </Box>
      </Box>
    </>
  );
};

export default Cta;
