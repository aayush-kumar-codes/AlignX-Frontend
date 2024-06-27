import {
  Stack,
  Toolbar,
  Box,
  AppBar,
  Typography,
  Button,
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/material";
import SwipeableTemporaryDrawer from "../../components/Drawer/Drawer";
import { navbarSolutionList } from "../../utils/StaticData/solutionPageData";
import { Links } from "../HomePage/Links";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useOutletContext } from "react-router";
import VerticalTabs from "./CustomTabar";
import { tabsData } from "../../utils/StaticData/regData";
import { NavLinkData } from "../../utils/StaticData/regData";
import CtaTwo from "../HomePage/ctaTwo";
import { Padding } from "@mui/icons-material";

const CustomRag = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const product = NavLinkData?.find((item) => item.name === "Products");

  const Animation = useOutletContext();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "20px", sm: "30px" },
          py: { xs: "20px", sm: "30px" },
          textAlign: "center",
        }}>
        <Box px={1} className="AnimationOfProduct1">
          <Box
            sx={{
              display: "flex",
              flexDirection: { lg: "2px", xs: "auto" },
              gap: 1,
            }}>
            {" "}
            <Typography
              variant="body1"
              textAlign={"start"}
              fontFamily={"DM Sans"}
              color="grey"
              sx={{ fontSize: { lg: "18px", md: "12px" }, fontWeight: "500" }}>
              Unlock Tailored Excellence with{" "}
              <span style={{ color: "#226BF7" }}>Custom RAG Pipelines</span>
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            {" "}
            {/* <Typography
              fontFamily={"Urbanist"}
              sx={{ fontSize: { lg: "32px", md: "28px", xs: "18px" } }}
              textAlign={"start"}
              fontWeight={600}>
              Transform your AI capabilities with
              <span
                style={{
                  color: "#226BF7",
                  paddingRight: "8px",
                  paddingLeft: "8px",
                }}>
                Retrieval-Augmented Generation
              </span>
              solutions
            </Typography> */}
            <Typography
              variant="h2"
              color="#022422"
              sx={{
                mt: "8px",
                mb: "18px",
                fontWeight: "600",
                fontFamily: "Urbanist",
                // border: "2px solid black",
                fontStyle: "normal",
                fontSize: { xs: "21px", md: "40px" },
              }}
              margin={"auto"}>
              Transform your AI capabilities with &nbsp;
              <span style={{ color: "#155EEF" }}>
                Retrieval-Augmented Generation
              </span>{" "}
              solutions.
              {/* {product.list[0].shortDescription}{" "} */}
              {/* Access the shortDescription */}
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              fontFamily: "DM Sans",
              fontWeight: "400",
            }}
            my={1}
            textAlign={"start"}>
            {navbarSolutionList[0].subDescription}
          </Typography>
        </Box>
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          sx={{ display: "flex", width: "100%", flexFlow: "row wrap" }}>
          {/* <Stack
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: { xs: "100%" },
              margin: "auto",
            }}>
            {navbarSolutionList[0].content.map((details, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index + 1}`}
                onChange={handleChange(`panel${index + 1}`)}
                sx={{ my: "5px" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  sx={{ fontWeight: "bold", fontSize: "18px" }}>
                  <Typography sx={{ color: "black", fontWeight: "600" }}>
                    {details.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography textAlign={"start"}>
                    {details.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack> */}
          <Box
            sx={{
              width: "100%",
              height: "50%",
              display: "flex",
              justifyContent: "center",
            }}>
            <Box>
              <img
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  // maxWidth: { lg: "100%", xs: "100%" },
                  maxHeight: { md: "600px", xs: "fit" },
                  borderRadius: "15px",
                }}
                src="/images/CustomRag.png"
                alt="customregimg"
              />
            </Box>
          </Box>
          <Box
            my={4}
            sx={{
              display: "flex",
              width: "100%",
              pt: "20px",
              flexDirection: { lg: "row", md: "column", xs: "column" },
            }}>
            <Box sx={{ width: { lg: "110%", xs: "100%" } }}>
              <Typography
                variant="h2"
                color="#333336"
                sx={{ width: { md: "90%", xs: "100%" } }}
                p={1}
                fontWeight={"600"}
                fontFamily={"Urbanist"}
                fontSize={{ xs: "18px", md: "32px" }}
                textAlign={{ xs: "center", md: "start" }}>
                AlignX’s Custom RAG on Demand service offers precise,
                industry-specific AI configurations to enhance accuracy and
                align closely with your operational goals and ethical standards.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "grid",
                textAlign: "start",
                gridTemplateColumns: {
                  lg: "1fr",
                  md: "1fr 1fr",
                  xs: "1fr",
                },
                gap: "10px",
              }}>
              <Box>
                <img
                  src="/images/Enhance.png"
                  width={"100%"}
                  alt="realign-api"
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="h4"
              color="#022422"
              sx={{
                mt: "8px",
                fontWeight: "700",
                fontFamily: "Urbanist",
                fontStyle: "normal",
                textAlign: "start",
                fontSize: { xs: "16px", md: "40px" },
                paddingLeft: { xs: "16px", md: "40px" },
              }}>
              Optimize and Enhance Your AI with
              <span
                style={{
                  color: "#226BF7",
                  paddingRight: "8px",
                  paddingLeft: "8px",
                }}>
                Comprehensive Monitoring, Debugging, and Feedback Solutions
              </span>
            </Typography>
            <img
              src="/images/Performance-v01.png"
              width={"100%"}
              alt="performance"
            />
          </Box>
        </Stack>
      </Box>
      <hr />
      <VerticalTabs tabsData={tabsData} />
    </Box>
  );
};

export default CustomRag;
