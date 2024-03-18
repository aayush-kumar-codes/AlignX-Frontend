import { Box, Typography } from "@mui/material";
import React from "react";
import "./OurTeam.css";
import ButtonComponent from "../../../components/Button/Button";

const OurTeam = () => {
  return (
    <Box
      height={"100%"}
      paddingTop={{ xs: "70px", md: "120px" }}
      overflow={"auto"}
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Typography variant="h5" className="title" textAlign={"center"}>
          OUR TEAM
        </Typography>
        <Typography
          variant="h4"
          className="description"
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
          className="shortdescription"
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
        <Box className="profileBox">
          <img src="/images/pic1.png" alt="pic1" className="pics"/>
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
        <Box className="profileBox">
          <img src="/images/pic2.png" alt="pic2" className="pics"/>
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
        <Box className="profileBox">
          <img src="/images/pic3.png" alt="pic3" className="pics"/>
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
        <Box className="profileBox">
          <img src="/images/pic4.png" alt="pic4" className="pics"/>
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
        <Box className="profileBox">
          <img src="/images/pic5.png" alt="pic5" className="pics"/>
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
        <Box className="profileBox">
          <img src="/images/pic6.png" alt="pic6" className="pics"/>
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
        <Box className="profileBox">
          <img src="/images/pic7.png" alt="pic7" className="pics"/>
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
        <Box className="profileBox">
          <img src="/images/pic8.png" alt="pic8" className="pics"/>
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
