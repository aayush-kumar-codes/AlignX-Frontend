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
          display: "block",
          gap: { sx: "10px", md: "50px" },
          flexDirection: { xs: "column ", md: "row" },
          borderRadius: { xs: "10px", md: "0" },
          color: "white",
          px: { xs: 1 },
        }}
      >
        <Box className="AnimationOfProduct1">
          <Typography
            sx={{ fontSize: { xs: "20px" } }}
            variant={"h3"}
            color="#226bf7"
            fontWeight="700"
          >
            ABOUT US
          </Typography>
        </Box>

        <Box
          className="AnimationOfProduct1"
          display={"flex"}
          sx={{
            paddingTop: "20px",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontFamily: "DM Sans",
              fontStyle: "normal",
              color: "#000",
              fontSize: { xs: "14px", md: "16px" },
              textAlign: { xs: "justify" },
            }}
          >
            Welcome to AlignX, where our mission is to pioneer a future where
            artificial intelligence operates in harmony with human values.
            Founded in November by two passionate entrepreneurs, AlignX is
            dedicated to ushering in an era of responsible AI. As the world
            increasingly relies on AI technologies, we ensure these systems are
            ethical, unbiased, transparent, and secure.
          </Typography>
        </Box>
      </Box>
      <Box
        mt={8}
        sx={{
          alignItems: "center",
          bgcolor: "#fff",
          width: "100%",
          display: "block",
          gap: { sx: "10px", md: "50px" },
          flexDirection: { xs: "column ", md: "row" },
          color: "white",
          boxShadow: "1px 2px 4px 2px #F0F0F0",
          // border: "1px solid #d1d1d6",
          borderRadius: "10px",
          px: 2,
          py: 4,
          mt: 10,
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: { xs: "28px" }, textAlign: "center" }}
            variant={"h3"}
            color="#226bf7"
            fontWeight="700"
          >
            OUR VISION
          </Typography>
        </Box>
        <Box
          className="AnimationOfProduct1"
          display={"flex"}
          sx={{
            paddingTop: "20px",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontFamily: "DM Sans",
              fontStyle: "normal",
              color: "#000",
              fontSize: { xs: "14px", md: "16px" },
              textAlign: { xs: "center" },
            }}
          >
            At AlignX, we envision a world where AI systems enhance the human
            experience without compromising ethical standards or safety. Our
            founders' commitment to creating a more ethical AI landscape drives
            us to develop solutions that not only meet but exceed the societal
            expectations of technology today and tomorrow.
          </Typography>
        </Box>
      </Box>
      <Box
        mt={8}
        mb={4}
        sx={{
          alignItems: "center",
          // bgcolor: "#f0f5f8",
          width: "100%",
          display: "block",
          gap: { sx: "10px", md: "50px" },
          flexDirection: { xs: "column ", md: "row" },
          borderRadius: { xs: "10px" },
          color: "white",
          boxShadow: "1px 2px 4px 2px #F0F0F0",
          // border: "1px solid #d1d1d6",
          px: 2,
          py: 4,
          mt: 10,
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: "24px", textAlign: "center" }}
            variant={"h3"}
            color="#226bf7"
            fontWeight="700"
          >
            OUR MISSION
          </Typography>
        </Box>
        <Box sx={{ paddingTop: "20px" }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontFamily: "DM Sans",
              fontStyle: "normal",
              color: "#000",
              fontSize: { xs: "14px", md: "16px" },
              textAlign: { xs: "center" },
            }}
          >
            Our mission is to help organizations align their AI systems with
            core human values, ensuring these technologies contribute positively
            to society. We provide specialized AI alignment services that
            address the ethical challenges faced by businesses adopting AI
            technologies. By fostering a culture of responsibility and safety,
            we empower businesses to lead with confidence and integrity.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
