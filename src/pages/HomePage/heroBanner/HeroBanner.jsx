import TypewriterComponent from "typewriter-effect";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
// import ParticlesBackground from "../../../components/particlesBackground";
import ButtonComponent from "../../../components/Button/Button";
import ParticlesBackground from "../../../components/particlesBackground";

const HeroBanner = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          bgcolor: "#fff",
          width: "100%",
        }}
      >
        <Stack
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              width: { xs: "90%", md: "90%" },
              fontSize: { xs: "30px", md: "44px" },
              fontFamily: "Urbanist",
              fontWeight: "700",
              color: "#000",
              margin: "auto",
              paddingTop: { xs: "10px", md: "20px" },
              wordBreak: "break-word",
            }}
          >
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: true,
                delay: 30,
                strings: [
                  "Data Prepared,",
                  "Data Prepared, Aligned,",
                  "Data Prepared, Aligned, and Delivered to your LLMs in Real Time.",
                ],
              }}
            />
          </Typography>
          <Typography
            variant="body1"
            px={2}
            sx={{
              fontFamily: "DM Sans",
              width: {
                sm: "50%",
                md: "90%",
                marginTop: {
                  sm: "20px",
                  md: "30px",
                },
                margin: "auto",
                paddingTop: "20px",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                fontSize: { xs: "17px", md: "24px" },
                color: "#000 ",
              },
            }}
          >
            Empowering businesses with safe, transparent, and secure AI
            solutions
          </Typography>
          {/* <Stack direction={{sm:'row',xs:'column'}} spacing={2} sx={{justifyContent:'center',alignItems:'center'}}
          >
            <Box sx={{width:{sm:'50%',xs:'100%'}}}>

            
              <Button fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#155EEF",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  ":hover": { backgroundColor: "#3876f2",borderRadius:"25px" },
                }}
              >
                Explore Our Products
                <img
                  src="images/img_ic_arrow_right_white_a700.svg"
                  alt="ic_arrow right"
                  style={{ height: "14px", width: "14px" }}
                />
              </Button>
              </Box>
              <Box width={{sm:'50%',xs:'100%'}}>

              
              <Button fullWidth
                variant="text"
                sx={{
                  backgroundColor: "#EFF4FF",
                  fontWeight: "600",
                  fontSize:'12px',
                  display: "flex",
                  alignItems: "center",
                  ":hover": { backgroundColor: "#D1E0FF" ,borderRadius:"25px"},
                }}
              >
                Explore Our Services
                <img
                  src="images/img_ic_arrow_right_white_a700.svg"
                  alt="ic_arrow right"
                  style={{ height: "14px", width: "14px" }}
                />
              </Button>
              </Box>
           
          </Stack> */}
          {/* <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="center"
            gap={3}
            m={"20px"}
          >
            <Box
              sx={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ButtonComponent text={"Explore Our Products"} variant="contained" styles={{backgroundColor:"#155EEF",
                  color: "#fff"}} icon={"images/img_ic_arrow_right_white_a700.svg"}/>
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
               <ButtonComponent text={"Explore Our Products"} variant="text" styles={{backgroundColor:"#EFF4FF",fontWeight: "600"
                  }} icon={"images/img_ic_arrow_right_white_a700.svg"}/>
        
             
            </Box>
          </Box> */}
          {/* <Box
            gap={2}
            sx={{
              width: "50%",
              margin: "auto",
              marginTop: { sx: "30px", md: "50px" },
              border: { sm: "1px solid gray", xs: "none" },
              borderRadius: "10px",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              height: { sx: "40px", md: "60px" },
              padding: { xs: "8px" },
            }}
          >
            <TextField
              focused={false}
              sx={{
                boder: "2px solid #000",
                paddingBottom: "10px",
                width: { sx: "40%", md: "70%" },
                overflow: "hidden",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  color: "#000",
                  border: "none",
                  fontFamily: "Urbanist",
                  height: "20px",
                  width: "fit",
                  marginTop: "10px",
                },
                "& .MuiInputLabel-outlined": {
                  border: "1px solid #fff",
                  color: "#fff",
                },
                "&.MuiTextField-root": {
                  border: { xs: "1px solid #000", sm: "none" },
                  borderRadius: "4px",
                },
              }}
              placeholder="Enter your email Address"
            />
            <Button
              sx={{
                fontFamily: "DM Sans",
                backgroundColor: "#155EEF",
                color: "white",
                fontSize: { sx: "8px", md: "14px" },
                cursor: "pointer",
                border: "none",
                borderRadius: "8px",
                padding: "6px 16px",
                minWidth: "130px",
                ":hover": { backgroundColor: "#3876f2", borderRadius: "25px" },
              }}
            >
              Get Started
            </Button>
          </Box> */}
        </Stack>
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
          <ParticlesBackground />
          <Box
            sx={{
              position: "absolute",
              top: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor:"blue",
              opacity:"0.7"
            }}
          >
            <Typography
              variant="caption"
              color={"#fff"}
              maxWidth={"900px"}
              textAlign={"center"}
              fontWeight={600}
              my={"auto"}
              fontSize={{ xs: "20px", md: "35px" }}
            >
              Remove the Complexity in your AI Data Ops with streaming and real
              time processing
            </Typography>
          </Box>
        </Box>
        <Box
          mt={{ xs: "0", md: "1" }}
          p={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          // width={"500px"}
          // height={"500px"}
          sx={{
            pt: 4,
          }}
        >
          <img
            src="images/blueparticleslogo1.png"
            style={{ maxWidth: "80%" }}
            alt=""
          />
        </Box>
      </Box>
    </>
  );
};
export default HeroBanner;
