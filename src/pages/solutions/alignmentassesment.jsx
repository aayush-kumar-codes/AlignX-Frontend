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
import { navbarSolutionList } from "../../utils/StaticData/solutionPageData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useOutletContext } from "react-router";
import { tabsDataAssign } from "../../utils/StaticData/assingmentData.js";
import VerticalTabs from "./CustomTabar";

const AlignmentAssesment = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const Animation = useOutletContext();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          justifyContent: "cente",
          alignItems: "center",
          gap: { xs: "20px", sm: "30px" },
        }}>
        <Box py={2} className="AnimationOfProduct1">
          <Box py={1} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {" "}
            <Box sx={{ display: "flex", gap: 1 }}>
              {" "}
              <Typography
                fontFamily={"Urbanist"}
                sx={{
                  fontSize: { lg: "18px", md: "12px" },
                }}
                textAlign={"start"}
                fontWeight={600}>
                Alignment Assessments for
                <span style={{ color: "#226BF7", paddingLeft: "8px" }}>
                  Ethical AI Excellence
                </span>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              {" "}
              <Typography
                fontFamily={"Urbanist"}
                sx={{ fontSize: { lg: "32px", md: "28px" } }}
                textAlign={"start"}
                fontWeight={600}>
                Navigate the Future with
                <span style={{ color: "#226BF7", paddingLeft: "8px" }}>
                  Confidence in AI
                </span>
              </Typography>
            </Box>
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
        <VerticalTabs tabsData={tabsDataAssign} />
      </Box>
    </Box>
  );
};

export default AlignmentAssesment;
