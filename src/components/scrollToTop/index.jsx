import { Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.onscroll = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      {isVisible && (
        <Box
          position={"fixed"}
          bottom={40}
          right={30}
          onClick={handleScrollToTop}
        >
          <KeyboardArrowUpIcon
            sx={{
              color: "white",
              fontSize: { xs: "30px", md: "30px" },
              width: { xs: "30px", md: "40px" },
              backgroundColor: "black",
              height: { xs: "30px", md: "40px" },
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
        </Box>
      )}
    </>
  );
};

export default ScrollToTop;
