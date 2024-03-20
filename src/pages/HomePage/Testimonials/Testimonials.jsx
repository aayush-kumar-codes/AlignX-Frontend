import { Box, Typography } from "@mui/material";
import React from "react";

const Testimonials = () => {
  return (
    <Box
      height={"100%"}
      padding={{ xs: "70px 10px", md: "80px 0" }}
      overflow={"auto"}
      maxWidth={"1250px"}
      m={"auto"}
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Typography
          variant="h6"
          color="#3ea19d"
          fontWeight="700"
          textAlign={"center"}
        >
          TESTIMONIALS
        </Typography>
        <Typography
          variant="h2"
          fontSize={{ xs: "30px", md: "44px" }}
          color="#022422"
          fontWeight={700}
          maxWidth="805px"
          minWidth="265px"
          textAlign={"center"}
          marginTop={"20px"}
        >
          Hear What Our Customers Have to Say
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: {xs:"center",md:"space-between"},
          marginTop: { xs: "32px", md: "60px" },
        }}
      >
        <Box
          bgcolor="#e6eceb"
          boxShadow="0px 1px 4px rgba(2, 36, 34, 0.06)"
          borderRadius="12px"
          maxWidth="383px"
          minWidth="343px"
          margin="20px 0 30px 0"
          
          
          sx={{ padding: { xs: "20px", md: "40px" } }}
        >
          <img src="/images/quotes.png" alt="profice" />
          <Typography
            variant="subtitle1"
            margin={"28px 0px"}
            className="shortdescription"
          >
            "The Standard Plan was exactly what we needed to get our team on the
            same page.{" "}
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
          bgcolor="#e6eceb"
          boxShadow="0px 1px 4px rgba(2, 36, 34, 0.06)"
          borderRadius="12px"
          maxWidth="383px"
          minWidth="343px"
          margin="20px 0 30px 0"
          
          sx={{ padding: { xs: "20px", md: "40px" } }}
        >
          <img src="/images/quotes.png" alt="profice" />
          <Typography variant="subtitle1" margin={"28px 0px"}>
            "Our business was struggling to find the right software solution
            until we discovered Corewelank. Their SaaS template is a
            game-changer, and the customization options are fantastic. Our
            productivity has soared, and we couldn't be happier."{" "}
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
                Marketing Manager at Brojowl
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
          bgcolor="#e6eceb"
          boxShadow="0px 1px 4px rgba(2, 36, 34, 0.06)"
          borderRadius="12px"
          maxWidth="383px"
          minWidth="343px"
          margin="20px 0 30px 0"
          
          sx={{ padding: { xs: "20px", md: "40px" } }}
        >
          <img src="/images/quotes.png" alt="profice" />
          <Typography variant="subtitle1" margin={"28px 0px"}>
            "We were looking for an enterprise-level solution to meet our
            security and compliance needs."{" "}
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
          bgcolor="#e6eceb"
          boxShadow="0px 1px 4px rgba(2, 36, 34, 0.06)"
          borderRadius="12px"
          maxWidth="383px"
          minWidth="343px"
          margin="20px 0 30px 0"
          
          sx={{ padding: { xs: "20px", md: "40px" } }}
        >
          <img src="/images/quotes.png" alt="profice" />
          <Typography variant="subtitle1" margin={"28px 0px"}>
            "Corewelank provided us with a tailored Enterprise Plan that
            exceeded our expectations. Their team has been a pleasure to work
            with."{" "}
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
          bgcolor="#e6eceb"
          boxShadow="0px 1px 4px rgba(2, 36, 34, 0.06)"
          borderRadius="12px"
          maxWidth="383px"
          minWidth="343px"
          margin="20px 0 30px 0"
          
          sx={{ padding: { xs: "20px", md: "40px" } }}
        >
          <img src="/images/quotes.png" alt="profice" />
          <Typography variant="subtitle1" margin={"28px 0px"}>
            "Join these satisfied customers and experience the benefits of our
            SaaS template for yourself. Start your journey towards success with
            Corewelank"{" "}
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
                Marketing Director at Uhuy Research
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          bgcolor="#e6eceb"
          boxShadow="0px 1px 4px rgba(2, 36, 34, 0.06)"
          borderRadius="12px"
          maxWidth="383px"
          minWidth="343px"
          margin="20px 0 30px 0"
          
          sx={{ padding: { xs: "20px", md: "40px" } }}
        >
          <img src="/images/quotes.png" alt="profice" />
          <Typography variant="subtitle1" margin={"28px 0px"}>
            "The real-time insights have given us a competitive edge, and the
            integration capabilities have streamlined our operations."{" "}
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
      </Box>
    </Box>
  );
};

export default Testimonials;