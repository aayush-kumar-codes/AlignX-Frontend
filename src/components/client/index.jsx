import { Box, Grid, Typography } from "@mui/material";

const logo = [
  {
    imgSrc: "/images/Logo1.png",
  },
  {
    imgSrc: "/images/Logo7.png",
  },
  {
    imgSrc: "/images/Logo6.png",
  },
  {
    imgSrc: "/images/Logo5.png",
  },
  {
    imgSrc: "/images/Logo8.png",
  },

  {
    imgSrc: "/images/Logo3.png",
  },
  {
    imgSrc: "/images/Logo2.png",
  },
  {
    imgSrc: "/images/Logo4.png",
  },
];

const CompanyLogo = ({ imgSrc }) => (
  <Box>
    <img style={{ maxWidth: "100%" }} src={imgSrc} alt="#" />
  </Box>
);

const Client = ({subHeading}) => {
  return (
    <Box maxWidth={"1250px"} mx={"auto"} py={2}>
      <Typography variant="body1" textAlign={"center"} color={"gray"}  sx={{ fontFamily: "DM Sans", fontWeight: "500", fontStyle: "normal" }}>{subHeading}</Typography>
      <Grid
        container
        spacing={{ xs: 1, md: 0 }}
        justifyContent="center"
        alignItems="center"
      >
        {logo.map(({ imgSrc }, index) => (
          <Grid
            justifyContent={"center"}
            item
            xs={6}
            sm={5}
            md={4}
            lg={3}
            key={index}
          >
            <CompanyLogo imgSrc={imgSrc} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Client;
