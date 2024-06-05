import { Box, Typography } from "@mui/material";
import {
  navbarSolutionList,
  aiCenterContent,
} from "../../utils/StaticData/solutionPageData";
import FullWidthTabs from "../../components/tabbar";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ParticlesBackground from "../../components/particlesBackground";
import VerticalTabs from "./CustomTabar";

const AiCenter = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <Box bgcolor="#fff">
      <Box m={"auto"}>
        <Box py={1} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {" "}
          <Box sx={{ display: "flex", gap: 1 }}>
            {" "}
            <Typography
              fontFamily={"Urbanist"}
              sx={{
                fontSize: { lg: "18px", md: "12px" },
              }}
              textAlign={"start"}
              fontWeight={600}
            >
              AI Centers of Excellence
              <span style={{ color: "#226BF7", paddingLeft: "8px" }}>
                (CoEs)
              </span>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            {" "}
            <Typography
              fontFamily={"Urbanist"}
              sx={{ fontSize: { lg: "32px", md: "28px" } }}
              textAlign={"start"}
              fontWeight={600}
            >
              Elevating Your AI Journey with
              <span style={{ color: "#226BF7", paddingLeft: "8px" }}>
                Expertise and Excellence
              </span>
            </Typography>
          </Box>
        </Box>

        <Box mb={2} className="AnimationOfProduct1">
          <Box
            sx={{
              position: "relative",
              height: { md: "180px", xs: "80px" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              my: { md: 14, xs: 4 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                top: { lg: "16%", xs: "12%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ParticlesBackground />

              <Typography
                variant="caption"
                color={"blue"}
                fontFamily={"Urbanist"}
                maxWidth={"900px"}
                textAlign={"center"}
                fontWeight={700}
                zIndex={3}
                fontSize={{ xs: "20px", md: "38px" }}
              >
                Remove the Complexity in your AI Data Ops with streaming and
                real time processing
              </Typography>
            </Box>
          </Box>

          <Box pt={6}>
            <Typography
              variant="h4"
              color="#022422"
              px={4}
              sx={{
                mt: "8px",
                fontWeight: "700",
                fontFamily: "Urbanist",
                fontStyle: "normal",
                margin: "auto",
                fontSize: { xs: "16px", md: "40px" },
              }}
            >
              Creating
              <span
                style={{
                  color: "#226BF7",
                  paddingRight: "8px",
                  paddingLeft: "8px",
                }}
              >
                Custom AI Solutions
              </span>
              to Tackle Your Enterprise's Unique Challenges
            </Typography>
            <img src="/images/AI-Apps-v01.png" width={"100%"} alt="ai-app" />
          </Box>
          <Typography
            sx={{
              fontSize: { lg: "18px", xs: "14px" },
              fontFamily: "Urbanist",
              fontWeight: "600",
              width: "100%",
              textAlign: "start",
            }}
          >
            {navbarSolutionList[3].description}
          </Typography>
        </Box>

        {/* <Box sx={{position:'relative',border:'2px solid red',display:"flex",justifyContent:"center",alignItems:"center",
              color:"blue"}}>
                <Stack>
                <ParticlesBackground/>
                  
                </Stack>
        <Typography variant="caption" zIndex={2} maxWidth={"900px"} textAlign={"center"} fontWeight={600} my={"auto"} fontSize={{xs:"20px",md:"35px"}}>Augment your AI capabilities with AI Centers of Excellence</Typography>

        </Box> */}
      </Box>
      {/* <Box
          mt={{ xs: "0", md: "1" }}
          p={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            pt: 4,
          }}
          
        >
          <img
            src={moduleName}
            style={{ maxWidth: "80%" }}
            alt=""
          />
        </Box> */}
      <Box mb={4} sx={{ zIndex: 3 }}>
        {/* <Typography
          variant="body1"
          textAlign={"start"}
          fontFamily={"Urbanist"}
          sx={{ fontSize: "18px" }}></Typography> */}

        {/* <Typography
          py={1}
          variant="body1"
          sx={{
            fontSize: { lg: "18px", xs: "14px" },
            fontFamily: "Urbanist",
            fontWeight: "400",
            width: "100%",
            textAlign: "start",
          }}
          my={1}
        >
          {navbarSolutionList[3].description1}
        </Typography> */}

        {navbarSolutionList[5]?.description1Points?.map((details, i) => (
          <Box sx={{ display: "flex", mx: 1, py: 1 }} key={i}>
            <Typography
              sx={{
                fontSize: { lg: "18px", xs: "14px" },
                fontFamily: "Urbanist",
                fontWeight: "400",
                width: "100%",
                textAlign: "start",
              }}
            >
              <li> {details}</li>
            </Typography>
          </Box>
        ))}
      </Box>
      <VerticalTabs tabsData={aiCenterContent} />
      {/* <FullWidthTabs /> */}
    </Box>
    // </Box>
  );
};

export default AiCenter;
