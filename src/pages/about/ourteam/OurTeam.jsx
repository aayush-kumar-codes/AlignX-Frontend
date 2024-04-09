import { Box, Typography, Grid } from "@mui/material";


const TeamMember = ({ name, position, imgSrc }) => (
  <Box maxWidth="100%" minWidth="161px" margin="26px" textAlign="center">
    <img src={imgSrc} alt={name} />
    <Typography
      variant="subtitle1"
      sx={{ fontFamily: "DM Sans", fontWeight: "600", fontSize: "20px" }}
      color="#022422"
      fontWeight={700}
    >
      {name}
    </Typography>
    <Typography
      sx={{ fontFamily: "Urbanist", fontWeight: "500", fontSize: "15px" }}
      variant="subtitle2"
    >
      {position}
    </Typography>
  </Box>
);




const OurTeam = () => {
  const teamMembers = [
    {
      name: "Danielle Luigi",
      position: "CEO + Co-founder",
      imgSrc: "/images/pic1.png",
    },
    {
      name: "Elizabeth Kiwkiw",
      position: "CTO + Co-founder",
      imgSrc: "/images/pic2.png",
    },
    {
      name: "Noella Wilson",
      position: "Chief Operating Officer",
      imgSrc: "/images/pic3.png",
    },
    {
      name: "Dawood Nakash",
      position: "Head of Engineering",
      imgSrc: "/images/pic4.png",
    },
    {
      name: "Barley Bentham",
      position: "Chief Business + Finance Officer",
      imgSrc: "/images/pic5.png",
    },
    {
      name: "Eko Suratmojo",
      position: "Chief Marketing Officer",
      imgSrc: "/images/pic6.png",
    },
    {
      name: "Amanda Arielle",
      position: "Chief Regulatory Officer",
      imgSrc: "/images/pic7.png",
    },
    { name: "Join Our Great Team", position: "-", imgSrc: "/images/pic8.png" },
  ];




  return (
    <Box >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography
          variant="h6"
          sx={{ fontFamily: "DM Sans" }}
          fontFamily={"Urbanist"}
            color="grey"
          fontWeight="700"
          fontSize="22px"
          textAlign="center"
        >
          OUR TEAM
        </Typography>
        <Typography
          variant="h2"
          fontWeight="700"
          sx={{ fontFamily: "DM Sans" }}
          fontSize={{ xs: "30px", md: "40px" }}
          color="#022422"
          maxWidth="805px"
          minWidth="265px"
          textAlign="center"
          marginTop="0px"
          marginBottom="5px"
        >
          Experts Driving Innovation
        </Typography>
        <Typography
          variant="subtitle1"
          fontWeight="400"
          sx={{ fontFamily: "DM Sans" }}
          p={1}
          fontSize={{ xs: "14px", md: "16px" }}
          color="#384E4C"
          maxWidth="805px"
          minWidth="265px"
          textAlign="center"
        >
          We&apos;re proud to have a diverse and talented team of professionals
          who are passionate about driving innovation and delivering exceptional
          solutions.
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 1, md: 0 }}
        justifyContent="center"
        alignItems="center"
        marginTop={{ xs: "5px", md: "30px" }}
      >
        {teamMembers.map(({ name, position, imgSrc }, index) => (
          <Grid
            justifyContent={"center"}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
          >
            <TeamMember name={name} position={position} imgSrc={imgSrc} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


export default OurTeam;
