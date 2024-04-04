import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { newsData } from "../../../utils/StaticData/newsData";

const NewsAndBlogs = () => {
  return (
    <Box bgcolor={"white"}>
      <Box
        padding={{ xs: "10px", md: "60px 0" }}
        maxWidth={"1250px"}
        margin={"0 auto"}
      >
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Typography
            variant="h6"
            color="grey"
            fontFamily={"Urbanist"}
            fontWeight="700"
            textAlign={"center"}
          >
            NEWS & BLOGS
          </Typography>
          <Typography
            variant="h2"
            fontSize={{ xs: "30px", md: "44px" }}
            color="#022422"
            fontWeight={700}
            fontFamily={"Urbanist"}
            maxWidth="900px"
            minWidth="265px"
            textAlign={"center"}
            marginTop={"20px"}
          >
            Stay Ahead with AlignX News & Blogs
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            marginTop: { xs: "32px", md: "20px" },
          }}
          gap={3}
        >
          {newsData.map((e,i)=>(
            <Box
            key={i}
            bgcolor={"white"}
            border={"2px solid #e6eceb"}
            borderRadius={"13px"}
            sx={{
              marginTop: { xs: "32px" },
              width: "383px",
            }}
          >
            {/* <img
              src={e.imageSrc}
              alt={e.imageSrc}
              style={{ maxWidth: "100%" }}
            /> */}
            <Box padding={"24px"}>
              <Box display="flex" gap={1}>
                <Typography
                  sx={{
                    background: `${e.bgColorType}`,
                    borderRadius: "70px",
                    padding: "0px 10px",
                    color: "white",
                    fontSize: "16px",
                    fontFamily:"Urbanist"
                  }}
                  variant="subtitle1"
                >
                  {e.type}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#768583", fontSize: "14px" }}
                >
                 {e.date}
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                color={"#022422"}
                fontWeight={700}
                fontFamily={"Urbanist"}
                margin={"24px 0px 12px 0px"}
                maxWidth="335px"
              >
                {e.title}
              </Typography>
              <Typography variant="subtitle1" fontFamily={"DM Sans"} maxWidth="335px">
              {e.description}
              </Typography>
            </Box>
          </Box>
          ))}
        </Box>
        <Box display={"flex"} justifyContent={"center"} marginTop={"40px"}>
          <Button
          variant="contained"
            sx={{
              backgroundColor: "#155EEF",
              display: "flex",
              alignItems: "center",
              width: { xs: "303px", md: "auto" },
              ":hover": { backgroundColor: "#3876f2",borderRadius:"25px" },
            }}
          >
            See All New & Blogs
            <img
              src="images/img_ic_arrow_right_white_a700.svg"
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
