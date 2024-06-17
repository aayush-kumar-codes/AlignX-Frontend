import { Box,Typography } from "@mui/material";
import { blogDataList1 } from "../BlogData";

const BlogContentDetails3 = () => {
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
        }}>
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
          }}>
          <Box mt={6}>
            <Typography
              sx={{ fontSize: { xs: "18px", md: "22px" } }}
              variant={"h3"}
              color="#226bf7"
              fontWeight="700"
              mb={1}>
              <span style={{ color: "#000" }}>
                Benefits and Future Prospects:{" "}
              </span>{" "}
              Benefits and Future Prospects: The adoption of RAG for predictive
              analytics and automation in DevOps offers numerous benefits for
              companies striving for efficiency, reliability, and innovation:
            </Typography>
            <Box>
              {blogDataList1.map((val, index) => (
                <Typography
                  key={index}
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
                    borderBottom: `5px solid ${getRandomColor()}`,
                  }}>
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {val.title}{" "}
                  </span>{" "}
                  {val.description}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BlogContentDetails3;