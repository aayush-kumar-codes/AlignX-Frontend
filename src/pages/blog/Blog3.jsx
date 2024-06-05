import { Box, Typography } from "@mui/material";
import { blogDataContent } from "./BlogData";

const BlogContent3 = () => {
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
              sx={{ fontSize: { xs: "18px", md: "22px" } }}
              variant={"h3"}
              color="#226bf7"
              fontWeight="700"
              mb={1}
            >
              <span style={{ color: "#000" }}>
                Unleashing the Power of RAG across industries:
                {""}
              </span>{" "}
              We compiled a list of potential use cases for implementing
              Retrieval- Augmented Generation (RAG) across various industries.
              This list by no means comprehensive and we are seeing rapid RAG
              adoption across many other areas.
            </Typography>
            {blogDataContent.map((val, index) => (
              <Box key={index}>
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
                  {val.title}{" "}
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
                    {val.list1}
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
                    {val.list2}
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
                    {val.list3}
                  </Typography>
                </Box>
              </Box>
            ))}
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "DM Sans",
                fontStyle: "normal",
                color: "#000",
                fontSize: { xs: "14px", md: "16px" },
                textAlign: { xs: "center" },
                mt: 6,
                boxShadow: "2px 2px 2px 2px #F0F0F0",
                border: "1px solid #d1d1d6",
                borderBottom: `5px solid #226bf7`,
                borderRadius: "10px",
                p: 2,
              }}
            >
              These are just a few examples of how enterprises across different
              industries can leverage Retrieval-Augmented Generation (RAG) to
              drive innovation, improve operational efficiency, and deliver
              enhanced value to their customers. The versatility and
              adaptability of RAG make it a powerful tool for addressing a wide
              range of business challenges and unlocking new opportunities for
              growth and competitiveness. AlignX can help you quickly launch
              your AI solutions using custom and modular RAG platform and rich
              set of APIs.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BlogContent3;
