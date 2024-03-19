import { Box, Typography } from "@mui/material";

const FeatureOne = () => {
  const iconsDescription = {
    margin: "20px 0px",
    fontWeight: "700",
    fontSize: "22px",
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      marginLeft="120px"
      overflow="auto"
      maxWidth="1322px"
      margin="60px auto"
      px={2}
    >
      <Box>
        <Typography variant="h6" color="#3ea19d">
          FEATURES
        </Typography>
        <Typography
          variant="h4"
          color="#022422"
          maxWidth="580px"
          minWidth="343px"
          sx={{
            marginTop: "20px",
            marginBottom: "28px",
            fontWeight: "700",
            fontSize: "46px",
          }}
        >
          Discover the array of game-changing features
        </Typography>
        <Typography
          variant="subtitle2"
          maxWidth="587px"
          minWidth="343px"
          height="52px"
          fontWeight="400"
          fontSize="16px"
          color="#384e4c"
        >
          Revolutionize the way you work and set your business on the path to
          success with our all-encompassing SaaS solution.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        marginTop="30px"
        sx={{ flexFlow: "row wrap" }}
      >
        <Box marginBottom="50px" maxWidth="383px" minWidth="343px">
          <img src="/images/image1.png" alt="image1" />
          <Typography variant="h5" sx={iconsDescription}>
            Intuitive Customization
          </Typography>
          <Typography variant="subtitle2" >
            Tailor your SaaS template effortlessly to match your business's
            unique identity. Customize layouts, color schemes, and branding
            elements with an easy-to-use interface.
          </Typography>
        </Box>
        <Box marginBottom="50px" maxWidth="383px" minWidth="343px">
          <img src="/images/image2.png" alt="image2" />
          <Typography variant="h5" sx={iconsDescription}>
            Seamless Collaboration
          </Typography>
          <Typography variant="subtitle2">
            Foster teamwork with collaborative tools that connect your team, no
            matter where they are. Streamline communication, share files, and
            keep everyone on the same page.
          </Typography>
        </Box>
        <Box marginBottom="50px" maxWidth="383px" minWidth="343px">
          <img src="/images/image3.png" alt="image3" />

          <Typography variant="h5" sx={iconsDescription}>
            Dynamic Workflow Management
          </Typography>
          <Typography variant="subtitle2">
            Take control of your business processes. Our SaaS template offers a
            suite of workflow management tools that empower you to optimize
            operations for maximum efficiency.
          </Typography>
        </Box>
        <Box marginBottom="50px" maxWidth="383px" minWidth="343px">
          <img src="/images/image4.png" alt="image4" />

          <Typography variant="h5" sx={iconsDescription}>
            Scalability Without Limits
          </Typography>
          <Typography variant="subtitle2">
            Grow your business without constraints. Our template scales
            seamlessly to accommodate your expanding needs, ensuring that your
            software always keeps pace with your ambitions.
          </Typography>
        </Box>
        <Box marginBottom="50px" maxWidth="383px" minWidth="343px">
          <img src="/images/image5.png" alt="image5" />
          <Typography variant="h5" sx={iconsDescription}>
            Cloud Freedom
          </Typography>
          <Typography variant="subtitle2">
            Embrace the freedom of cloud-based access. Work from anywhere, on
            any device, with secure access to your SaaS template. Stay connected
            and productive wherever you go.
          </Typography>
        </Box>
        <Box marginBottom="50px" maxWidth="383px" minWidth="343px">
          <img src="/images/image6.png" alt="image6" />
          <Typography variant="h5" sx={iconsDescription}>
            Fortified Security
          </Typography>
          <Typography variant="subtitle2">
            Protect what matters most. Robust security measures safeguard your
            data from potential threats, so you can focus on your business
            without worry.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureOne;
