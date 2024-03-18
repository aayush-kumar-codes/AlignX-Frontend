import { Box, Button, Typography } from "@mui/material";
import React from "react";

const NewsAndBlogs = () => {
  return (
    <Box bgcolor={"#F9F3EE"}>
      <Box
        padding={{ xs: "70px", md: "120px 0" }}
        maxWidth={"1322px"}
        margin={"0 auto"}
      >
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Typography variant="h6" className="title" textAlign={"center"}>
            NEWS & BLOGS
          </Typography>
          <Typography
            variant="h4"
            className="description"
            maxWidth="805px"
            minWidth="265px"
            textAlign={"center"}
            marginTop={"20px"}
          >
            Stay Ahead with Corewelink News & Blogs
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            marginTop: { xs: "32px", md: "60px" },
          }}
        >
          <Box
            bgcolor={"white"}
            borderRadius={"8px"}
            sx={{
              marginTop: { xs: "32px" },
              width: "383px",
            }}
          >
            <img src="/images/newspic1.png" alt="newspic1" />
            <Box padding={"24px"}>
              <Box display="flex">
                <Typography
                  sx={{
                    background: "#3EA19D",
                    borderRadius: "70px",
                    padding: "0px 10px",
                    color: "white",
                    fontSize: "16px",
                  }}
                  variant="subtitle1"
                >
                  ARTICLES
                </Typography>
                <Typography variant="subtitle2" margin={"0px 5px"}>
                  .
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#768583", fontSize: "14px" }}
                >
                  Feb 12, 2023
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                color={"#022422"}
                fontWeight={700}
                margin={"24px 0px 12px 0px"}
                maxWidth="335px"
              >
                Mastering Personal Finance: Tips for Effective Budgeting
              </Typography>
              <Typography variant="subtitle1" maxWidth="335px">
                Dive into our comprehensive guide on budgeting strategies to
                take control of your...
              </Typography>
            </Box>
          </Box>
          <Box
            bgcolor={"white"}
            borderRadius={"8px"}
            sx={{
              width: "383px",
              marginTop: { xs: "32px" },
            }}
          >
            <img src="/images/newspic2.png" alt="newspic2" />
            <Box padding={"24px"}>
              <Box display="flex">
                <Typography
                  sx={{
                    background: "#034844",
                    borderRadius: "70px",
                    padding: "0px 10px",
                    color: "white",
                    fontSize: "16px",
                  }}
                  variant="subtitle1"
                >
                  RESEARCH & INSIGHTS
                </Typography>
                <Typography variant="subtitle2" margin={"0px 5px"}>
                  .
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#768583", fontSize: "14px" }}
                >
                  Feb 12, 2023
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                color={"#022422"}
                fontWeight={700}
                margin={"24px 0px 12px 0px"}
                maxWidth="335px"
              >
                Investment Landscape: Opportunities and Risks in...
              </Typography>
              <Typography variant="subtitle1" maxWidth="335px">
                Stay informed with our investment insights, featuring in-depth
                analyses of various asset...
              </Typography>
            </Box>
          </Box>
          <Box
            bgcolor={"white"}
            borderRadius={"8px"}
            sx={{
              width: "383px",
              marginTop: { xs: "32px" },
            }}
          >
            <img src="/images/newspic3.png" alt="newspic3" />
            <Box padding={"24px"}>
              <Box display="flex">
                <Typography
                  sx={{
                    background: "#389FC4",
                    borderRadius: "70px",
                    padding: "0px 10px",
                    color: "white",
                    fontSize: "16px",
                  }}
                  variant="subtitle1"
                >
                  PRESS RELEASE
                </Typography>
                <Typography variant="subtitle2" margin={"0px 5px"}>
                  .
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#768583", fontSize: "14px" }}
                >
                  Feb 12, 2023
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                color={"#022422"}
                fontWeight={700}
                margin={"24px 0px 12px 0px"}
                maxWidth="335px"
              >
                Corewelink Ensures Ironclad Protection for Financial Data
              </Typography>
              <Typography variant="subtitle1" maxWidth="335px">
                Corewelink prioritizes data security with state-of-the-art
                encryption and multi-fact...
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"} marginTop={"40px"}>
          <Button
            sx={{
              border: "1px solid #6E79FF",
              borderRadius: "8px",
              color: "#6E79FF",
              display: "flex",
              alignItems: "center",
              width: { xs: "303px", md: "auto" },
            }}
          >
            See All New & Blogs
            <img
              src="images/rightarrow.png"
              alt="ic_arrow right"
              style={{ height: "14px", width: "14px" }}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsAndBlogs;
