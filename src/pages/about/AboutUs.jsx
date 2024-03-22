import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AboutUs = () => {
  return (
    <Box
      p={2}
      sx={{
        overflow: "auto",
        width: "full",
        fontFamily: "Urbanist",
        margin: "auto",
      }}
    >
      <Box
        
        sx={{
          alignItems: "center",
          bgcolor: "#fff",
          width: "100%",
          display: "flex",
          gap: "20px",
          flexDirection: { xs: "column ", md: "row" },
          borderRadius: { xs: "10px", md: "0" },
          color: "white",
          px:{xs:1}
        }}
      >
        <Box >
          <Typography variant="h6" color="grey" fontWeight="700">
          ABOUT US
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Urbanist",
              fontWeight: 700,
              color: "#000",
            }}
          >
            We Are Passionate About Revolutionizing The Way Businesses Operate.
          </Typography>
        </Box>

        <Box
          display={"flex"}
          sx={{
            paddingTop: "20px",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              paddingTop: { xs: "2px", md: "60px" },
              lineHeight: "20px",
              color: "#000",
            }}
          >
            Our mission is to empower organizations of all sizes with
            cutting-edge SaaS solutions that adapt seamlessly to their unique
            needs
          </Typography>
          <Box
            sx={{
              paddingTop: "20px",
              color: "white",
              width: "100px",
              display: "flex",
              alignItems: "center",
              paddingBottom: "30px",
              cursor: "pointer",
            }}
          >
            <Button
              sx={{
                fontFamily: "DM Sans",
                paddingRight: "8px",
                fontWeight: "600",
                backgroundColor: "#155EEF",
                color: "#fff",
                ":hover": { backgroundColor: "#3876f2" },
              }}
            >
              Join Us
            </Button>
            <ArrowForwardIosIcon fontSize="20px" />
          </Box>
        </Box>
      </Box>
      <Box sx={{ overflow: "hidden", width: "100%", paddingTop: "10px" }}>
        <img
          src="/images/clientDiscucImages.png"
          style={{
            width: "100%",
            height: "100%",
            aspectRatio: { xs: "16/9", md: "3/2" },
            borderRadius: "10px",
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutUs;
