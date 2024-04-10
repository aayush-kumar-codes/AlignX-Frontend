import { Box, Button, Typography } from "@mui/material";
import { pricingData } from "../../utils/StaticData/pricingData";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const Pricing = () => {
  return (
    <Box bgcolor="#fff" mb={3}>
      <Box maxWidth={"1250px"} m={"auto"}>
        <Box p={2}>
          <Typography
            variant="h6"
            fontFamily={"Urbanist"}
            color="grey"
            fontWeight="700"
          >
            PRICING
          </Typography>
          <Typography
            variant="h2"
            color="#022422"
            maxWidth="580px"
            minWidth="343px"
            mt={2}
            fontWeight={"700"}
            sx={{
              fontSize: { xs: "30px", md: "40px" },
            }}
          >
            Pricing That Fits Your Business Needs{" "}
          </Typography>
          <Typography
            variant="subtitle2"
            maxWidth="587px"
            minWidth="343px"
            fontWeight="400"
            fontSize="16px"
            color="#384e4c"
            pt={1}
            pb={3}
          >
            Explore our pricing tiers below and discover the perfect fit for
            your needs.
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={{ xs: "center", lg: "space-between" }}
          alignItems={{ xs: "center", sm: "normal" }}
          m={"auto"}
          flexDirection={{ xs: "column", md: "row" }}
          sx={{ flexFlow: { xs: "none", sm: "row wrap", md: "none" } }}
        >
          {pricingData.map((details, index) => (
            <Box
              key={index}
              bgcolor={"#f0f5f4"}
              border={index===1 && "solid 1px grey"}
              mt={{xs:index === 1 ? 1 : 1,sm:index === 1 ? 1 : 5}}
              mx={1}
              mb={1}
              borderRadius={"10px"}
              overflow={index === 1 && "hidden"}
              maxWidth={"343px"}
              minWidth={"343px"}
            >
              <Typography
                display={index === 1 ? "block" : "none"}
                variant="body2"
                textAlign={"center"}
                bgcolor={"gray"}
                color={"#fff"}
                py={1}
                fontWeight={"500"}
                letterSpacing={2}
              >
                Recommended
              </Typography>
              <Box p={2}>
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    fontFamily={"Urbanist"}
                  >
                    {details.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={"#384E4C"}
                    fontFamily={"DM Sans"}
                  >
                    {details.description}
                  </Typography>
                </Box>
                <Box my={2}>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    fontFamily={"Urbanist"}
                  >
                    {details.price}
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#384E4C",
                        marginLeft: "2px",
                      }}
                    >
                      /month
                    </span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color={"#768583"}
                    fontFamily={"DM Sans"}
                  >
                    {details.priceDescription}
                  </Typography>
                </Box>
                <Box>
                  <Button
                    sx={{
                      bgcolor:index===1 ? "#155EEF":"normal",
                      border: index===1 ?"none":"1px solid #155EEF",
                      borderRadius: "8px",
                      color: index===1 ?"#fff":"#155EEF",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      fontFamily: "Urbanist",
                      ":hover": index===1&&{ backgroundColor: "#3876f2" },
                    }}
                  >
                    Get Started
                    <Box mb={"-4px"}>
                    <img
                      src={index===1?"images/whitearrow.png":"images/rightarrow.png"}
                      alt="ic_arrow right"
                      style={{ height: "14px", width: "14px" }}
                    />
                    </Box>
                  </Button>
                </Box>
                <Box my={2}>
                  <hr style={{background:"grey"}} />
                </Box>
                {details.offers.map((e, i) => (
                  <Box key={i} margin={"auto"}>
                    <Box display={"flex"} m={"auto"}>
                      <Box mt="3px">
                      <CheckCircleIcon sx={{color:"#155EEF"}}/>
                        </Box>
                      
                      <Typography
                        variant="body1"
                        mt={"3px"}
                        ml={"8px"}
                        fontFamily={"DM Sans"}
                      >
                        {e}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Pricing;
