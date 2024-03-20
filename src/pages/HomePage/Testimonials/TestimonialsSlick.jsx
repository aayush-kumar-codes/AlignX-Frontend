import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";

const TestimonialsSlick = () => {
  const settings = {
    gap: "2",
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <Box bgcolor={"#F9F3EE"} padding={{ xs: "10px", md: "80px" }}>
      <Box maxWidth={"1250px"} mx={"auto"} width={"full"}>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography
            variant="h6"
            color="#3ea19d"
            fontWeight="700"
            textAlign={"start"}
          >
            TESTIMONIALS
          </Typography>
          <Typography
            variant="h2"
            color="#022422"
            fontWeight={700}
            maxWidth="805px"
            minWidth="265px"
            textAlign={"start"}
            marginTop={"20px"}
            fontSize={{ xs: "30px", md: "44px" }}
          >
            Hear What Our Customers Have to Say
          </Typography>
        </Box>
        <Box sx={{overflow:"hidden"}}>
          <Slider {...settings}>
            <Box
              bgcolor="white"
              boxShadow="0px 1px 4px rgba(2, 36, 34, 0.06)"
              borderRadius="12px"
              maxWidth="383px"
              minWidth="235px"
              margin="20px 0 30px 0"
              sx={{ padding: { xs: "20px", md: "40px" } }}
              gap={2}
              
            >
              <img src="/images/quotes.png" alt="profice" />
              <Typography
                variant="subtitle1"
                margin={"28px 0px"}
                className="shortdescription"
              >
                "The Standard Plan was exactly what we needed to get our team on
                the same page.{" "}
              </Typography>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                  <Typography
                    variant="subtitle1"
                    color={"#022422"}
                    fontWeight={700}
                  >
                    MELANIE MADISON
                  </Typography>
                  <Typography variant="subtitle1">
                    Product Manager at Gawl
                  </Typography>
                </Box>
                <img
                  src="/images/profile1.png"
                  alt="profile1"
                  width={"44px"}
                  height={"44px"}
                />
              </Box>
            </Box>
            <Box
              bgcolor="white"
              boxShadow="0px 1px 4px rgba(2, 36, 34, 0.06)"
              borderRadius="12px"
              maxWidth="383px"
              minWidth="235px"
              margin="20px 0 30px 0"
              sx={{ padding: { xs: "20px", md: "40px" } }}
              gap={2}
            >
              <img src="/images/quotes.png" alt="profice" />
              <Typography variant="subtitle1" margin={"28px 0px"}>
                "Our business was struggling to find the right software solution
                until we discovered AlignX"
              </Typography>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                  <Typography
                    variant="subtitle1"
                    color={"#022422"}
                    fontWeight={700}
                  >
                    David Bownie
                  </Typography>
                  <Typography variant="subtitle1">
                    Marketing Manager at Broj
                  </Typography>
                </Box>
                <img
                  src="/images/profile2.png"
                  alt="profile2"
                  width={"44px"}
                  height={"44px"}
                />
              </Box>
            </Box>
            <Box
              bgcolor="white"
              boxShadow="0px 1px 4px rgba(2, 36, 34, 0.06)"
              borderRadius="12px"
              maxWidth="383px"
              minWidth="235px"
              margin="20px 0 30px 0"
              sx={{ padding: { xs: "20px", md: "40px" } }}
              gap={2}
            >
              <img src="/images/quotes.png" alt="profice" />
              <Typography variant="subtitle1" margin={"28px 0px"}>
              "Our business was struggling to find the right software solution
                until we discovered AlignX"
              </Typography>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                  <Typography
                    variant="subtitle1"
                    color={"#022422"}
                    fontWeight={700}
                  >
                    STANLEY JOSEPH
                  </Typography>
                  <Typography variant="subtitle1">CTO at Gemash</Typography>
                </Box>
                <img
                  src="/images/profile3.png"
                  alt="profile3"
                  width={"44px"}
                  height={"44px"}
                />
              </Box>
            </Box>
            <Box
              bgcolor="white"
              boxShadow="0px 1px 4px rgba(2, 36, 34, 0.06)"
              borderRadius="12px"
              maxWidth="383px"
              minWidth="235px"
              margin="20px 0 30px 0"
              sx={{ padding: { xs: "20px", md: "40px" } }}
              gap={2}
            >
              <img src="/images/quotes.png" alt="profice" />
              <Typography variant="subtitle1" margin={"28px 0px"}>
              "Our business was struggling to find the right software solution
                until we discovered AlignX"
              </Typography>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                  <Typography
                    variant="subtitle1"
                    color={"#022422"}
                    fontWeight={700}
                  >
                    Leonardo Rufford
                  </Typography>
                  <Typography variant="subtitle1">
                    UI Designer at Konbanwa
                  </Typography>
                </Box>
                <img
                  src="/images/profile4.png"
                  alt="profile4"
                  width={"44px"}
                  height={"44px"}
                />
              </Box>
            </Box>
            <Box
              bgcolor="white"
              boxShadow="0px 1px 4px rgba(2, 36, 34, 0.06)"
              borderRadius="12px"
              maxWidth="383px"
              minWidth="235px"
              margin="20px 0 30px 0"
              sx={{ padding: { xs: "20px", md: "40px" } }}
              gap={2}
            >
              <img src="/images/quotes.png" alt="profice" />
              <Typography variant="subtitle1" margin={"28px 0px"}>
              "Our business was struggling to find the right software solution
                until we discovered AlignX"
              </Typography>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                  <Typography
                    variant="subtitle1"
                    color={"#022422"}
                    fontWeight={700}
                  >
                    Emily WHite
                  </Typography>
                  <Typography variant="subtitle1">
                    Marketing Director at Uhuy
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              bgcolor="white"
              boxShadow="0px 1px 4px rgba(2, 36, 34, 0.06)"
              borderRadius="12px"
              maxWidth="383px"
              minWidth="235px"
              margin="20px 0 30px 0"
              sx={{ padding: { xs: "20px", md: "40px" } }}
              gap={2}
            >
              <img src="/images/quotes.png" alt="profice" />
              <Typography variant="subtitle1" margin={"28px 0px"}>
              "Our business was struggling to find the right software solution
                until we discovered AlignX"
              </Typography>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                  <Typography
                    variant="subtitle1"
                    color={"#022422"}
                    fontWeight={700}
                  >
                    SARAH SMITH
                  </Typography>
                  <Typography variant="subtitle1">
                    CTO of Comeout Corporation
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialsSlick;
