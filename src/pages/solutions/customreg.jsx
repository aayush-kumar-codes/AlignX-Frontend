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
            <Typography
              fontFamily={"Urbanist"}
              sx={{ fontSize: { lg: "32px", md: "28px", xs: "18px" } }}
              textAlign={"start"}
              fontWeight={600}>
              Transform your AI capabilities with bespoke solutions{" "}
              <span style={{ color: "#226BF7", paddingRight: "8px" }}>
                Retrieval-Augmented Generation
              </span>
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
                  objectFit: "contain",
                  maxWidth: "80%",
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
            my={8}
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
                p={2}
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
              {product.list[0].keyFeatuesContent2.map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    boxShadow: "2px 2px 2px 2px #F0F0F0",
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
      <hr />
      <VerticalTabs tabsData={tabsData} />
    </Box>
  );
};

export default CustomRag;
