import { Box, Typography } from "@mui/material";
import React from "react";
import ButtonComponent from "../../../components/Button/Button";

const OurTeam = () => {
  return (
    <Box
      height={"100%"}
      paddingTop={{ xs: "70px", md: "120px" }}
      overflow={"auto"}
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Typography variant="h5" color="#3ea19d" fontWeight="700"
          fontSize="16px" textAlign={"center"}>
          OUR TEAM
        </Typography>
        <Typography
          variant="h4"
          fontWeight="700"
          fontSize={{ xs: "22px", md: "46px" }}
          color="#022422"
          maxWidth="805px"
          minWidth="265px"
          textAlign={"center"}
          marginTop={"20px"}
          marginBottom={"28px"}
        >
          Experts Driving Innovation
        </Typography>
        <Typography
          variant="subtitle1"
          fontWeight="400"
          fontSize={{ xs: "14px", md: "16px" }}
          color="#384e4c"
          maxWidth="805px"
          minWidth="265px"
          textAlign={"center"}
        >
          we're proud to have a diverse and talented team of professionals who
          are passionate about driving innovation and delivering exceptional
          solutions.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          marginTop: { xs: "32px", md: "60px" },
        }}
      >
        <Box maxWidth="281px" minWidth="161px" margin="26px">
          <Box display={{ xs: "none", md: "block" }}>
            <img src="/images/pic1.png" alt="pic1"  />
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <img
              src="/images/pic1.png"
              alt="pic1"
              height="196px"
              width="162px"
            />
          </Box>
          <Typography
            variant="subtitle1"
            margin={"24px 0px 8px 0px"}
            color={"#022422"}
            fontWeight={700}
          >
            Danielle Luigi
          </Typography>
          <Typography variant="subtitle2">CEO + Co-founder</Typography>
        </Box>
        <Box maxWidth="281px" minWidth="161px" margin="26px">
        <Box display={{ xs: "none", md: "block" }}>
            <img src="/images/pic2.png" alt="pic2" />
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <img
              src="/images/pic2.png"
              alt="pic2"
              height="196px"
              width="162px"
            />
          </Box>
          <Typography
            variant="subtitle1"
            margin={"24px 0px 8px 0px"}
            color={"#022422"}
            fontWeight={700}
          >
            Elizabeth Kiwkiw
          </Typography>
          <Typography variant="subtitle2">CTO + Co-founder</Typography>
        </Box>
        <Box maxWidth="281px" minWidth="161px" margin="26px">
        <Box display={{ xs: "none", md: "block" }}>
            <img src="/images/pic3.png" alt="pic3" />
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <img
              src="/images/pic3.png"
              alt="pic3"
              height="196px"
              width="162px"
            />
          </Box>
          <Typography
            variant="subtitle1"
            margin={"24px 0px 8px 0px"}
            color={"#022422"}
            fontWeight={700}
          >
            Noella Wilson
          </Typography>
          <Typography variant="subtitle2">Chief Operating Officer</Typography>
        </Box>
        <Box maxWidth="281px" minWidth="161px" margin="26px">
        <Box display={{ xs: "none", md: "block" }}>
            <img src="/images/pic4.png" alt="pic4"/>
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <img
              src="/images/pic4.png"
              alt="pic4"
              height="196px"
              width="162px"
            />
          </Box>
          <Typography
            variant="subtitle1"
            margin={"24px 0px 8px 0px"}
            color={"#022422"}
            fontWeight={700}
          >
            Dawood Nakash
          </Typography>
          <Typography variant="subtitle2">Head of Engineering</Typography>
        </Box>
        <Box maxWidth="281px" minWidth="161px" margin="26px">
        <Box display={{ xs: "none", md: "block" }}>
            <img src="/images/pic5.png" alt="pic5" />
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <img
              src="/images/pic5.png"
              alt="pic5"
              height="196px"
              width="162px"
            />
          </Box>
          <Typography
            variant="subtitle1"
            margin={"24px 0px 8px 0px"}
            color={"#022422"}
            fontWeight={700}
          >
            Barley Bentham
          </Typography>
          <Typography variant="subtitle2" maxWidth={"161px"}>
            Chief Business + Finance Officer
          </Typography>
        </Box>
        <Box maxWidth="281px" minWidth="161px" margin="26px">
        <Box display={{ xs: "none", md: "block" }}>
            <img src="/images/pic6.png" alt="pic6" />
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <img
              src="/images/pic6.png"
              alt="pic6"
              height="196px"
              width="162px"
            />
          </Box>
          <Typography
            variant="subtitle1"
            margin={"24px 0px 8px 0px"}
            color={"#022422"}
            fontWeight={700}
          >
            Eko Suratmojo
          </Typography>
          <Typography variant="subtitle2">Chief Marketing Officer</Typography>
        </Box>
        <Box maxWidth="281px" minWidth="161px" margin="26px">
        <Box display={{ xs: "none", md: "block" }}>
            <img src="/images/pic7.png" alt="pic7" />
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <img
              src="/images/pic7.png"
              alt="pic7"
              height="196px"
              width="162px"
            />
          </Box>
          <Typography
            variant="subtitle1"
            margin={"24px 0px 8px 0px"}
            color={"#022422"}
            fontWeight={700}
          >
            Amanda Arielle
          </Typography>
          <Typography variant="subtitle2">Chief Regulatory Officer</Typography>
        </Box>
        <Box maxWidth="281px" minWidth="161px" margin="26px">
        <Box display={{ xs: "none", md: "block" }}>
            <img src="/images/pic8.png" alt="pic8"/>
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <img
              src="/images/pic8.png"
              alt="pic8"
              height="196px"
              width="162px"
            />
          </Box>
          <Typography
            variant="subtitle1"
            margin={"24px 0px 8px 0px"}
            color={"#022422"}
            fontWeight={700}
          >
            Join Our Great Team
          </Typography>
          <Box>
            <ButtonComponent
              text={"Join Us"}
              icon={<img src="/images/rightarrow.png" alt="rightarrow" />}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurTeam;