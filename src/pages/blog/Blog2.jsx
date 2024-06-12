import { Box, Card, Grid, Typography } from "@mui/material";
import { blog2Datalist1, blog2Datalist2, blog2Datalist3, blogCardData3 } from "./BlogData";
import { Link } from "react-router-dom";

const BlogContent2 = () => {
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
          <Box
            // className="AnimationOfProduct1"
            display={"flex"}
            sx={{
              paddingTop: "20px",
              flexDirection: "column",
            }}>
            <Typography
              sx={{ fontSize: { xs: "20px", md: "24px" } }}
              variant={"h3"}
              color="#226bf7"
              fontWeight="700">
              <span style={{ color: "#000" }}>
                Revolutionizing Reconciliation Activities with Retrieval-
                Augmented Generation (RAG):{" "}
              </span>
              A Game-Changer for Companies
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "DM Sans",
                fontStyle: "normal",
                color: "#000",
                fontSize: { xs: "14px", md: "16px" },
                textAlign: { xs: "justify" },
              }}>
              <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                Introduction:{" "}
              </span>
              Reconciliation activities are essential for ensuring accuracy and
              integrity in financial data, but they often involve manual effort
              and are prone to errors. However, the advent of advanced
              technologies like Retrieval- Augmented Generation (RAG) offers a
              transformative approach to streamline reconciliation processes.
              RAG combines the power of retrieval-based and generative AI
              models, enabling companies to automate reconciliation tasks,
              enhance accuracy, and drive operational efficiency. In this blog
              post, we'll explore how companies can leverage RAG to
              revolutionize reconciliation activities, paving the way for more
              efficient and error-free financial operations.
              <br />
              <br />
              Understanding Retrieval-Augmented Generation (RAG):
              Retrieval-Augmented Generation (RAG) is an innovative AI framework
              that combines the capabilities of retrieval-based and generative
              models. It leverages a large pre-trained language model, such as
              GPT (Generative Pre-trained Transformer), alongside a retriever
              component that retrieves relevant information from a knowledge
              base or corpus. RAG generates responses by synthesizing
              information retrieved from the knowledge base and generating
              additional contextually relevant content as needed. This hybrid
              approach enables RAG to excel in tasks requiring both retrieval
              and generation of information, such as question-answering,
              summarization, and contextual understanding.
            </Typography>
          </Box>
          <Grid container
            spacing={2}
            mt={2}
            justifyContent="center"
            alignItems="stretch">
            {blogCardData3.map((val, index) => (
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
            <Typography
              sx={{ fontSize: { xs: "18px", md: "22px" } }}
              variant={"h3"}
              color="#226bf7"
              fontWeight="700"
              mb={1}>
              <span style={{ color: "#000" }}>
                Leveraging RAG for Reconciliation Activities:
                {""}
              </span>{" "}
              RAG offers several capabilities that can revolutionize
              reconciliation activities and enhance operational efficiency:
            </Typography>
            {blog2Datalist3.map((val, index) => (
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
                }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {val.title}{" "}
                </span>{" "}
                {val.description}
              </Typography>
            ))}
          </Box>
          <Box mt={6}>
            <Typography
              sx={{ fontSize: { xs: "18px", md: "22px" } }}
              variant={"h3"}
              color="#226bf7"
              fontWeight="700"
              mb={1}>
              <span style={{ color: "#000" }}>
                Implementing RAG for Reconciliation Activities:{" "}
              </span>{" "}
              Implementing RAG for reconciliation activities requires a
              structured approach tailored to the organization's needs and
              existing infrastructure:
            </Typography>
            {blog2Datalist2.map((val, index) => (
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
                }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {val.title}{" "}
                </span>{" "}
                {val.description}
              </Typography>
            ))}
          </Box>
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
              The adoption of RAG for reconciliation activities offers numerous
              benefits for companies striving for efficiency, accuracy, and
              compliance in financial operations:
            </Typography>
            <Box>
              {blog2Datalist1.map((val, index) => (
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
          </Box> */}
          <Box
            sx={{
              boxShadow: "2px 2px 2px 2px #F0F0F0",
              border: "1px solid #d1d1d6",
              borderBottom: `5px solid #226bf7`,
              borderRadius: "10px",
              p: 2,
            }}
            mt={6}>
            {/* <Typography
              sx={{ fontSize: { xs: "28px" }, textAlign: "center" }}
              variant={"h3"}
              color="#226bf7"
              fontWeight="700"
            >
              Conclusion
            </Typography> */}
            <Box
              className="AnimationOfProduct1"
              display={"flex"}
              sx={{
                mt: 2,
                flexDirection: "column",
              }}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontFamily: "DM Sans",
                  fontStyle: "normal",
                  color: "#000",
                  fontSize: { xs: "14px", md: "16px" },
                  textAlign: { xs: "center" },
                }}>
                The adoption of Retrieval-Augmented Generation (RAG) represents
                a significant advancement in automating and enhancing
                reconciliation activities. By leveraging the combined power of
                retrieval-based and generative AI models, companies can
                streamline reconciliation processes, improve accuracy, and drive
                operational efficiency in financial operations. Embrace the
                potential of RAG for reconciliation, and embark on a journey
                towards more efficient, accurate, and agile financial operations
                for your organization with AlignX.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BlogContent2;
