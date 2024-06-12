import { Box, Card, Grid, Typography } from "@mui/material";
import {
  blogCardData4,
  blogCardData5,
  blogDataContent1,
  blogDataContent2,
  blogDataContent3,
} from "./BlogData";
import { Link } from "react-router-dom";

const BlogContent4 = () => {
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
          <Box
            // className="AnimationOfProduct1"
            display={"flex"}
            sx={{
              paddingTop: "20px",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "20px", md: "24px" } }}
              variant={"h3"}
              color="#226bf7"
              fontWeight="700"
            >
              Tailor-Made Retrieval-Augmented Generation (RAG) for Enterprise AI
              Solutions
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "DM Sans",
                fontStyle: "normal",
                color: "#000",
                fontSize: { xs: "14px", md: "16px" },
                textAlign: { xs: "justify" },
              }}
            >
              <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                Introduction:{" "}
              </span>
              In today's fast-paced business landscape, enterprises across
              various industries are constantly seeking innovative solutions to
              drive efficiency, enhance customer experiences, and stay ahead of
              the competition. Retrieval-Augmented Generation (RAG), an advanced
              AI framework that combines retrieval-based and generative models,
              has emerged as a transformative technology with the potential to
              revolutionize enterprise operations. However, while off-the-shelf
              RAG models offer significant benefits, tailor-made RAG solutions
              customized to specific enterprise needs can deliver even greater
              effectiveness and value. In this blog post, we'll explore the
              advantages of tailor-made RAG solutions for enterprises and
              highlight why customization is the key to unlocking the full
              potential of RAG across diverse industry verticals.
              <br />
              <br />
              The Power of RAG for Enterprise Solutions: Retrieval-Augmented
              Generation (RAG) offers a unique blend of retrieval-based and
              generative AI capabilities, making it a versatile tool for a wide
              range of enterprise applications. From natural language
              understanding and content generation to predictive analytics and
              decision support, RAG can be leveraged to address complex business
              challenges and drive innovation across various domains. Some of
              the key benefits of RAG for enterprise solutions include:
            </Typography>
          </Box>
          <Grid container
            spacing={2}
            mt={2}
            justifyContent="center"
            alignItems="stretch">
            {blogCardData5.map((val, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Link to={val.path}>
                  <Card sx={{
                    boxShadow: "2px 2px 2px 2px #F0F0F0", border: "1px solid #d1d1d6", borderRadius: "10px", height: "335px", "&:hover": {
                      boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
                    }
                  }}>
                    <img src={val.imgSrc} alt={`images${index}`} width={"100%"} />
                    <Typography
                      key={index}
                      variant="subtitle2"
                      sx={{
                        fontFamily: "DM Sans",
                        fontStyle: "normal",
                        color: "#000",
                        fontSize: { xs: "14px", md: "16px" },
                        textAlign: { xs: "justify" },
                        p: 2,
                        mb: 1,
                      }}>
                      {val.title}
                    </Typography>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
          {/* <Box mt={6}>
            {blogDataContent1.map((val, index) => (
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
                  borderLeft: `5px solid ${getRandomColor()}`,
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {val.title}{" "}
                </span>{" "}
                {val.description}
                <br />
              </Typography>
            ))}
          </Box>
          <Box mt={6}>
            <Typography
              sx={{ fontSize: { xs: "20px", md: "24px" } }}
              variant={"h3"}
              color="#226bf7"
              fontWeight="700"
              mb={4}
            >
              <span style={{ color: "#000" }}>
                The Advantages of Tailor-Made RAG Solutions:{" "}
              </span>
              While off-the-shelf RAG models offer significant benefits,
              tailor-made RAG solutions customized to specific enterprise needs
              provide several distinct advantages:
            </Typography>
            {blogDataContent2.map((val, index) => (
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
                  borderLeft: `5px solid ${getRandomColor()}`,
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {val.title}{" "}
                </span>{" "}
                {val.description}
                <br />
              </Typography>
            ))}
          </Box> */}
          <Box mt={4}>
            <Typography
              sx={{ fontSize: { xs: "20px", md: "24px" } }}
              variant={"h3"}
              color="#000"
              fontWeight="700"
              mb={4}
            >
              Potential use cases for implementing tailor made Retrieval-
              Augmented Generation (RAG) across various industries.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", md: "16px" } }}
              variant={"h3"}
              color="#226bf7"
              fontWeight="700"
              mb={4}
            >
              The list is by no means exhaustive and there many new domains and
              use cases RAG is being adopted for innovative solutions.
            </Typography>
          </Box>
          <Grid container
            spacing={2}
            justifyContent="center"
            alignItems="stretch">
            {blogCardData4.map((val, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Link to={val.path}>
                  <Card sx={{
                    boxShadow: "2px 2px 2px 2px #F0F0F0", border: "1px solid #d1d1d6", borderRadius: "10px", height: "335px", "&:hover": {
                      boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
                    }
                  }}>
                    <img src={val.imgSrc} alt={`images${index}`} width={"100%"} />
                    <Typography
                      key={index}
                      variant="subtitle2"
                      sx={{
                        fontFamily: "DM Sans",
                        fontStyle: "normal",
                        color: "#000",
                        fontSize: { xs: "14px", md: "16px" },
                        textAlign: { xs: "justify" },
                        p: 2,
                        mb: 1,
                      }}>
                      {val.title}
                    </Typography>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
          {/* <Box>
            {blogDataContent3.map((val, index) => (
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
          </Box> */}
          <Box
            className="AnimationOfProduct1"
            display={"flex"}
            sx={{
              mt: 6,
              flexDirection: "column",
              boxShadow: "2px 2px 2px 2px #F0F0F0",
              border: "1px solid #d1d1d6",
              borderRadius: "10px",
              p: 2,
              borderBottom: `5px solid #226bf7`,
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "DM Sans",
                fontStyle: "normal",
                color: "#000",
                fontSize: { xs: "14px", md: "16px" },
                textAlign: { xs: "center" },
              }}
            >
              These are just a few examples of how enterprises across different
              industries can leverage Retrieval-Augmented Generation (RAG) to
              drive innovation, improve operational efficiency, and deliver
              enhanced value to their customers. The versatility and
              adaptability of RAG with AlignXs modular RAG platform makes it a
              powerful tool for addressing a wide range of business challenges
              and unlocking new opportunities for growth and competitiveness.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BlogContent4;
