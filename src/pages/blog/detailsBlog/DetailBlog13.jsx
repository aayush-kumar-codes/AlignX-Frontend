import { Box,Typography } from "@mui/material";
import { blogDataContent } from "../BlogData";

const BlogContentDetails13 = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <>
      <Box
        p={2}
        sx={{
          overflow: "auto",
          width: "full",
          fontFamily: "Urbanist",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            bgcolor: "#fff",
            width: "100%",
            display: "block",
            gap: { sx: "10px", md: "50px" },
            flexDirection: { xs: "column ", md: "row" },
            borderRadius: { xs: "10px", md: "0" },
            color: "white",
            px: { xs: 1 },
          }}
        >
          <Box mt={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "DM Sans",
                    fontStyle: "normal",
                    color: "#000",
                    fontSize: { xs: "16px", md: "20px" },
                    fontWeight: "bold",
                    textAlign: { xs: "justify" },
                  }}
                >
                  {blogDataContent[3].title}{" "}
                </Typography>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: "DM Sans",
                      fontStyle: "normal",
                      color: "#000",
                      fontSize: { xs: "14px", md: "16px" },
                      textAlign: { xs: "justify" },
                      boxShadow: "2px 2px 2px 2px #F0F0F0",
                      border: "1px solid #d1d1d6",
                      borderRadius: "10px",
                      p: 2,
                      mb: 1,
                      borderLeft: `5px solid ${getRandomColor()}`,
                    }}
                  >
                    {blogDataContent[3].list1}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: "DM Sans",
                      fontStyle: "normal",
                      color: "#000",
                      fontSize: { xs: "14px", md: "16px" },
                      textAlign: { xs: "justify" },
                      boxShadow: "2px 2px 2px 2px #F0F0F0",
                      border: "1px solid #d1d1d6",
                      borderRadius: "10px",
                      p: 2,
                      mb: 1,
                      borderLeft: `5px solid ${getRandomColor()}`,
                    }}
                  >
                    {blogDataContent[3].list2}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: "DM Sans",
                      fontStyle: "normal",
                      color: "#000",
                      fontSize: { xs: "14px", md: "16px" },
                      textAlign: { xs: "justify" },
                      boxShadow: "2px 2px 2px 2px #F0F0F0",
                      border: "1px solid #d1d1d6",
                      borderRadius: "10px",
                      p: 2,
                      mb: 1,
                      borderLeft: `5px solid ${getRandomColor()}`,
                    }}
                  >
                    {blogDataContent[3].list3}
                  </Typography>
                </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BlogContentDetails13;
