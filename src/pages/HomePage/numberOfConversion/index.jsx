import { Box, Grid, Typography } from "@mui/material";

const data = [
  { value: "120%", label: "Company Growth" },
  { value: "430+", label: "Capital Raised" },
  { value: "85+", label: "Team Members" },
  { value: "99%", label: "Customer Satisfaction" },
];

const CustomComponent = ({ value, label }) => {
  return (
    <Box
      sx={{
        border: "1px solid #E6ECEB",
        paddingTop: "20px",
        p: "4px",
        mx: "auto",
        filter: "drop-shadow(0px 1px 4px rgba(2, 36, 34, 0.06))",
        borderRadius: "12px",
        width: { md: "70%", xs: "90%", sm: "70%", lg: "90%" },
        height: { md: "70%", xs: "60%", sm: "60%", lg: "70%" },
      }}>
      <Box>
        <Typography
          variant="h4"
          color={"#000"}
          textAlign={"center"}
          fontFamily={"Urbanist"}
          fontSize={{ xs: "34px", md: "44px" }}
          fontWeight={700}>
          {value}
        </Typography>
        <Typography
          variant="subtitle2"
          fontFamily={"Urbanist"}
          color={"#384E4C"}
          textAlign={"center"}
          fontSize={{ xs: "12px", md: "18px" }}>
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

const NoOfConversion = () => {
  return (
    <Box bgcolor={"#FAFAFA"}>
      <Box margin={"auto"} maxWidth={"1250px"} px={1} py={2}>
        <Box>
          <Typography
            margin={"auto"}
            p={4}
            variant="h5"
            textAlign={"center"}
            fontSize={{ xs: "28px", md: "46px" }}
            color="#022422"
            fontWeight={"700"}
            fontFamily="Urbanist"
            maxWidth={"792px"}>
            Experience a huge Increase in Conversions with AlignX!
          </Typography>
          <Grid
            container
            gap={2}
            spacing={{ xs: 2, md: 0 }}
            justifyContent="center"
            alignItems="center"
            paddingTop={{ xs: "18px", md: "30px" }}>
            {data.map((item, index) => (
              <Grid
                justifyContent={"center"}
                alignItems={"center"}
                item
                height={{ xs: "160px", md: "200px" }}
                xs={5}
                sm={5}
                md={4}
                lg={2}
                key={index}>
                <CustomComponent
                  key={index}
                  value={item.value}
                  label={item.label}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default NoOfConversion;