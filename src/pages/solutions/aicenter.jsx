import { Box, Typography } from "@mui/material";
import { navbarSolutionList } from "../../utils/StaticData/solutionPageData";
import FullWidthTabs from "../../components/tabbar";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useOutletContext } from "react-router";
// import ParticlesBackground from "../../components/particlesBackground";
import ParticlesBackground from "../../components/particlesBackground";


const AiCenter = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <Box bgcolor="#fff"  >
      <Box  m={"auto"}>
        <Box   mb={2} className="AnimationOfProduct1">
          <Typography
            variant="body1"
            textAlign={"start"}
            fontFamily={"Urbanist"}
            color="grey"
            sx={{ fontSize: "18px" , zIndex:3}}
          >
            {navbarSolutionList[3].title}
          </Typography>
          <Typography
            variant="h5"
            my={1}
            fontFamily={"DM Sans"}
            fontSize={"28px"}
            textAlign={"start"}
            fontWeight={600}
            zIndex={5}
          >
            {navbarSolutionList[3].shortDescription}
          </Typography>
          <Box
          sx={{
            position: "relative",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: 3,
          }}
        >
          {/* <Box width={'100%'} height={'11px'}> */}

          {/* </Box> */}
          <Box
            sx={{
              position: "absolute",
              zIndex:1,
              top: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ParticlesBackground />

            <Typography
              variant="caption"
              color={"blue"}
              maxWidth={"900px"}
              textAlign={"center"}
              fontWeight={600}
              my={"auto"}
              zIndex={3}
              fontSize={{ xs: "20px", md: "35px" }}
            >
              Remove the Complexity in your AI Data Ops with streaming and real
              time processing
            </Typography>
          </Box>
        </Box>
          <Typography variant="body1" my={1} textAlign={"start"} zIndex={3}>
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
        <Box  mb={4} sx={{ zIndex:3}}>
          <Typography
            variant="body1"
            textAlign={"start"}
            fontFamily={"Urbanist"}
            sx={{ fontSize: "18px" }}
          >
            {navbarSolutionList[3].description1}
          </Typography>
          {navbarSolutionList[3].description1Points.map((details, i) => (
            <Box sx={{ display: "flex", mx: 1, py: 1 }} key={i}>
              <Box>
                <KeyboardDoubleArrowRightIcon />
              </Box>
              <Typography> {details}</Typography>
            </Box>
          ))}
        </Box>
        <FullWidthTabs />
      </Box>
    // </Box>
  );
};

export default AiCenter;
