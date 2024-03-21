import { Box, Button, Typography } from "@mui/material";

const pricingData = {
  standardPricingData: [
    "Enhanced customization",
    "Priority email support",
    "Up to 5 users",
    "10 GB of storage",
    "Access to additional modules or add-ons",
  ],
  premiumPricingData: [
    "All Standard Plan features ",
    "Full customization options",
    "24/7 phone and email support",
    "Unlimited users",
    "Unlimited storage",
    "Advanced analytics and reporting",
    "Integration with third-party apps",
    "Dedicated account manager",
  ],
  enterpricePricingData: [
    "All Premium Plan features",
    "Tailored solutions to meet specific business needs",
    "Enterprise-level security and compliance",
    "Scalability for large organizations",
    "API access for deeper integration",
    "Training and onboarding for your team",
    "Service-level agreements (SLAs)",
  ],
};

const Pricing = () => {
  return (
    <Box bgcolor="#fff" px={2} py={8}>
      <Box maxWidth={"1250px"} mx={"auto"}>
        <Box>
          <Typography variant="h6" color="#3ea19d" fontWeight="700">
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
          justifyContent={"center"}
          mx={"auto"}
          flexDirection={{ xs: "column", md: "row" }}
          sx={{ flexFlow: { xs: "none", sm: "row wrap", md: "none" } }}
        >
          <Box bgcolor={"#f0f5f4"} p={2} borderRadius={"10px"} m={1} width={"383px"}>
            <Box>
              <Typography variant="h5" fontWeight={700}>
                Standard
              </Typography>
              <Typography variant="body2" color={"#384E4C"}>
                For businesses seeking expanded capabilities
              </Typography>
            </Box>
            <Box my={2}>
              <Typography variant="h5" fontWeight={700}>
                $8.99
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
              <Typography variant="body2" color={"#768583"}>
                Pause or cancel anytime
              </Typography>
            </Box>
            <Box>
              <Button
                sx={{
                  border: "1px solid #6E79FF",
                  borderRadius: "8px",
                  color: "#6E79FF",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                Get Started
                <img
                  src="images/rightarrow.png"
                  alt="ic_arrow right"
                  style={{ height: "14px", width: "14px" }}
                />
              </Button>
            </Box>
            <Box my={2}>
              <hr bgcolor="grey" />
            </Box>
            {pricingData.standardPricingData.map((e, i) => (
              <Box key={i} margin={"auto"}>
                <Box display={"flex"} m={"auto"}>
                  <img src="images/ic_check.svg" alt="ic_check" />
                  <Typography variant="body1" mt={"3px"} ml={"8px"}>
                    {e}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box bgcolor={"#f0f5f4"} borderRadius={"10px"} overflow={"hidden"} m={1} width={"383px"}>
            <Typography
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
                <Typography variant="h5" fontWeight={700}>
                  Premium
                </Typography>
                <Typography variant="body2" color={"#384E4C"}>
                  Take your business to the next level{" "}
                </Typography>
              </Box>
              <Box my={2}>
                <Typography variant="h5" fontWeight={700}>
                  $15.99
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
                <Typography variant="body2" color={"#768583"}>
                  Pause or cancel anytime
                </Typography>
              </Box>
              <Box>
                <Button
                  sx={{
                    border: "1px solid #6E79FF",
                    borderRadius: "8px",
                    color: "#6E79FF",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  Get Started
                  <img
                    src="images/rightarrow.png"
                    alt="ic_arrow right"
                    style={{ height: "14px", width: "14px" }}
                  />
                </Button>
              </Box>
              <Box my={2}>
                <hr bgcolor="grey" />
              </Box>
              {pricingData.premiumPricingData.map((e, i) => (
                <Box key={i} margin={"auto"}>
                  <Box display={"flex"} m={"auto"}>
                    <img src="images/ic_check.svg" alt="ic_check" />
                    <Typography variant="body1" mt={"3px"} ml={"8px"}>
                      {e}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Box bgcolor={"#f0f5f4"} p={2} borderRadius={"10px"} m={1} width={"383px"}>
            <Box>
              <Typography variant="h5" fontWeight={700}>
                Enterprise
              </Typography>
              <Typography variant="body2" color={"#384E4C"}>
                For large organizations with specific demands{" "}
              </Typography>
            </Box>
            <Box my={2}>
              <Typography variant="h5" fontWeight={700}>
                Custom
              </Typography>
              <Typography variant="body2" color={"#768583"}>
                Contact our sales
              </Typography>
            </Box>
            <Box>
              <Button
                sx={{
                  border: "1px solid #6E79FF",
                  borderRadius: "8px",
                  color: "#6E79FF",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                Get Started
                <img
                  src="images/rightarrow.png"
                  alt="ic_arrow right"
                  style={{ height: "14px", width: "14px" }}
                />
              </Button>
            </Box>
            <Box my={2}>
              <hr bgcolor="grey" />
            </Box>
            {pricingData.enterpricePricingData.map((e, i) => (
              <Box key={i} margin={"auto"}>
                <Box display={"flex"} m={"auto"}>
                  <img src="images/ic_check.svg" alt="ic_check" />
                  <Typography variant="body1" mt={"3px"} ml={"8px"}>
                    {e}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Pricing;
