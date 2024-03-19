import { Stack, Typography } from "@mui/material";




const AboutUs = () => {
  return (
    <Stack
      sx={{
        overflow: "auto",
        width: "full",
        m: "auto",
        borderRadius: { xs: "10px", md: "0" },
      }}
    >
      <Stack
        py={4}
        px={8}
        direction={{ md: "row", xs: "column" }}
        sx={{
          alignItems: "center",
          bgcolor: "#034844",
          color: "white",
        }}
      >
        <Stack spacing={2} sx={{ width: { md: "50%", xs: "100%" } }}>
          <Typography>About Us</Typography>
          <Typography
            variant="h4"
            sx={{
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "46px",
              lineHeight: "58px",
            }}
          >
            We're passionate about revolutionizing the way businesses operate.
          </Typography>
        </Stack>

        <Stack spacing={2} sx={{ width: { md: "50%", xs: "100%" } }}>
          <Typography
            sx={{
              fontFamily: "DM Sans",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "26px",
            }}
          >
            Our mission is to empower organizations of all sizes with
            cutting-edge SaaS solutions that adapt seamlessly to their unique
            needs
          </Typography>
          <Typography
            sx={{ color: "white", width: "100px", cursor: "pointer" }}
          >
            Join Us &nbsp;
          </Typography>
        </Stack>
      </Stack>
      <Stack sx={{ height: { xs: "70%", md: "50%" } }}>
        <img
          src="/images/clientDiscucImages.png"
          style={{ width: "100%", height: "100%" }}
          alt=""
        />
      </Stack>
    </Stack>
  );
};

export default AboutUs;
