import { Box, Button, Typography,Grid } from "@mui/material";
import React from "react";
import { newsData } from "../../../utils/StaticData/newsData";

const NewsAndBlogs = () => {
  return (
    <Box bgcolor={"white"} p={2}>
      <Box
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
        <Grid
          container
          spacing={2}
          my={2}
          justifyContent="center"
          alignItems="stretch">
          {newsData.map((e, index) => (
            <Grid item key={index} xs={12} sm={8} md={6} lg={4}>
              <Box
            bgcolor={"white"}
            //border={"2px solid #e6eceb"}
            boxShadow=" rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px inset"

            sx={{height:"280px"}}
            borderRadius={"10px"}
          >
            {/* <img
              src={e.imageSrc}
              alt={e.imageSrc}
              style={{ maxWidth: "100%" }}
            /> */}
            <Box padding={"24px"}>
              <Box display="flex" alignItems={"center"} gap={1}>
                <Typography
                  sx={{
                    background: `${e.bgColorType}`,
                    borderRadius: "70px",
                    padding: "5px 10px",
                    color: "white",
                    //fontSize: {xs:"12px",sm:"16px"},
                    mt:{xs:"4px",sm:"none"},
                    fontFamily:"Urbanist"
                  }}
                  variant="caption"
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
                //maxWidth="335px"
              >
                {e.title}
              </Typography>
              <Typography variant="subtitle1" fontFamily={"DM Sans"} >
              {e.description}
              </Typography>
            </Box>
          </Box>
            </Grid>
          ))}
        </Grid>
        <Box display={"flex"} justifyContent={"center"} marginTop={"40px"}>
          <Button
          variant="contained"
            sx={{
              backgroundColor: "#155EEF",
              display: "flex",
              alignItems: "center",
              width: { xs: "auto", md: "auto" },
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
