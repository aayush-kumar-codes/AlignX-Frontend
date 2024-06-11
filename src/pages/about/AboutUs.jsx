import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import About1 from "./About1";
import About2 from "./About2";
import About3 from "./About3";

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
            variant="subtitle1"
            sx={{
              fontFamily: "DM Sans",
              fontStyle: "normal",
              color: "grey",
              fontWeight: 600,
              fontSize: { xs: "14px", md: "20px" },
              textAlign: { xs: "justify" },
            }}>
            Welcome to AlignX
          </Typography>
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
            At AlignX, we are pioneers in the realm of AI alignment, dedicated to transforming the way
            organizations deploy artificial intelligence. Our mission is simple yet profound: to ensure that AI
            systems are aligned with human values, fostering a future where technology acts responsibly and
            ethically. We are not just another AI company; we are a beacon of responsible AI, guiding
            businesses toward ethical, unbiased, transparent, and secure AI systems
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
            sx={{ fontSize: { xs: "24px" }, textAlign: "center" }}
            variant={"h3"}
            color="#226bf7"
            fontWeight="700"
          >
            Our Vision
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
            }}
          >
            Our vision at AlignX is to change the world of AI by embedding human values at the core of
            every AI system. We believe that technology should enhance society, not harm it. With AI
            becoming an integral part of our daily lives and business operations, the importance of aligning these systems with ethical standards cannot be overstated. Our goal
            is to be the trusted partner for organizations striving to build AI solutions that are not only
            innovative but also conscientious and socially responsible.
          </Typography>
          <About1 />
        </Box>

      </Box>
      <Box
        mt={4}
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
            Our Approach
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
            }}
          >
            At AlignX, we follow a meticulous approach to ensure that our services are tailored to each
            client’s unique needs and industry specifics:
          </Typography>
          <About2 />
        </Box>
      </Box>
      <Box
        mt={4}
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
            Our Services
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
            }}
          >
            We offer a range of services designed to cover all aspects of AI alignment and safety, including:
          </Typography>
          <About3 />
        </Box>
      </Box>
      <Box
        mt={4}
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
            Our Commitment
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
            }}
          >
            AlignX is more than a service provider; we are your partners in fostering a responsible AI future.
            Our cutting-edge toolkit and dedicated teams, leveraging cost-effective offshore talent, make
            high-quality AI alignment accessible to small and medium-sized enterprises. We aim to leave a
            lasting footprint in the AI world by helping our clients create products and services that are
            aligned with the highest ethical standards, ensuring a positive impact on society.
          </Typography>
          <Typography  variant="subtitle2"
            sx={{
              mt:2,
              fontFamily: "DM Sans",
              fontStyle: "normal",
              color: "#000",
              fontSize: { xs: "14px", md: "16px" },
            }}>Join us at AlignX, and together, let's build a future where AI is a force for good, driving progress
          with responsibility and integrity.</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
