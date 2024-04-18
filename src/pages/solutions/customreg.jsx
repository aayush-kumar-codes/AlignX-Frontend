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
          <Box sx={{ display: "flex", gap: 1 }}>
            {" "}
            <Typography
              variant="body1"
              textAlign={"start"}
              fontFamily={"DM Sans"}
              color="grey"
              sx={{ fontSize: "18px", fontWeight: "600" }}>
              Unlock Tailored Excellence with{" "}
            </Typography>
            <Typography
              fontFamily={"DM Sans"}
              sx={{ color: "#226BF7", fontSize: "18px", fontWeight: "600" }}>
              {" "}
              Custom RAG Pipelines
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            {" "}
            <Typography
              fontFamily={"Urbanist"}
              fontSize={"32px"}
              textAlign={"start"}
              fontWeight={600}>
              Transform your AI capabilities with bespoke solutions
            </Typography>
            <Typography
              sx={{
                color: "#226BF7",
                fontSize: "32px",
                fontFamily: "Urbanist",
                fontWeight: "600",
              }}>
              {" "}
              Retrieval-Augmented Generation
            </Typography>
            <Typography
              sx={{
                fontSize: "32px",
                fontFamily: "Urbanist",
                fontWeight: "600",
              }}>
              {" "}
              solutions
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
                  maxWidth: "100%",
                  height: "700px",
                  borderRadius: "15px",
                }}
                src="/images/CustomRag.png"
                alt="customregimg"
              />
            </Box>
          </Box>
          <Box
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
                width="90%"
                p={2}
                fontWeight={"600"}
                sx={{ letterSpacing: "2px", lineHeight: "40px" }}
                fontFamily={"Urbanist"}
                fontSize={{ xs: "22px", md: "32px" }}
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
              {product.list[0].keyFeatuesContent2.map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    border: "1px solid #d1d1d6",
                    borderRadius: "10px",
                    p: 1,
                  }}>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        lg: "auto 1fr",
                        md: "auto 1fr",
                        xs: "1fr",
                      },
                      gap: 2,
                      alignItems: "center",
                    }}>
                    {/* <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                      <img
                        src={"images/latestlogo1.png"}
                        width={"60px"}
                        alt=""
                        style={{
                          backgroundColor: feature.bgColor,
                          borderRadius: "15px",
                        }}
                      />
                    </Box> */}
                    <Box sx={{ padding: "10px" }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Urbanist",
                          fontWeight: "600",
                        }}>
                        {feature.title}
                      </Typography>
                      <Typography
                        sx={{ fontFamily: "DM Sans" }}
                        variant="subtitle2">
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Stack>
      </Box>

      <VerticalTabs tabsData={tabsData} />
    </Box>
  );
};

export default CustomRag;
