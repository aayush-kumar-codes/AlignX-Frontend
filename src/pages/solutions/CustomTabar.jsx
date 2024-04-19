import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import { createTheme, ThemeProvider } from "@mui/material";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material"; // Import Button from MUI
import "./Solutions.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d1d1d6",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#1155FF",
            color: "white",
            border: "none",
          },
        },
      },
    },
  },
});

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box
          className="AnimationOfProduct1"
          sx={{
            p: 3,
            width: { lg: "100%", xs: "auto" },
            textWrap: "wrap",
            fontWeight: "400",
            fontFamily: "DM Sans",
            lineHeight: "28px",
            fontSize: "18px",
          }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function VerticalTabs({ tabsData }) {
  const [value, setValue] = useState(0);
  const [tabsOpen, setTabsOpen] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleTabs = () => {
    setTabsOpen(!tabsOpen);
  };

  console.log("this is the tab data : ", tabsData);
  return (
    <Box
      my={8}
      sx={{
        flexGrow: 1,
        marginTop: "30px",
        flexDirection: { lg: "row", xs: "column" },
        bgcolor: "background.paper",
        display: "flex",
        width: "100%",
        alignItems: { lg: "start", xs: "center" },
        border: "1px solid #F0F0F0",
        boxShadow: "2px 2px 2px 2px #F0F0F0",
        borderRadius: "5px",
        justifyContent: "center",
      }}>
      <Button
        sx={{
          display: {
            lg: "none",
            xs: "block",
            backgroundColor: "#2970FF",
            // width: "53%",
            color: "#FFFFFF",
            marginTop: "20px",
            marginBottom: "20px",
          },
        }}
        variant="contained"
        onClick={toggleTabs}>
        {tabsOpen ? " Close DropDown" : " Open DropDown "}
      </Button>{" "}
      {tabsOpen && (
        <ThemeProvider theme={theme}>
          <Tabs
            orientation="vertical"
            variant="standard"
            value={value}
            onChange={handleChange}
            sx={{
              borderRight: 1,
              maxWidth: { lg: "340px", xs: "300px" },
              textAlign: "start",
              overflow: "clip",
              borderColor: "divider",
            }}>
            {tabsData.map((tab, index) => (
              <Tab
                key={index}
                sx={{
                  width: "80%",
                  // position: "relative",
                  paddingBottom: "10px",
                  left: { xs: "6px" },
                  right: { xs: "110px", lg: "35px" },
                  borderBottom: "1px solid #000000",
                }}
                label={
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: "DM Sans",
                      fontWeight: "600",
                      width: "100%",
                      textAlign: "start",
                    }}>
                    {tab.label}
                  </Typography>
                }
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </ThemeProvider>
      )}
      {tabsData.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          <Box
            sx={{
              paddingLeft: { xs: "10px", lg: "10px" },
              paddingY: "2px",
              fontFamily: "Urbanist",
              fontWeight: "600",
              fontSize: { xs: "18px", lg: "28px" },
            }}>
            {tab.label}
          </Box>
          <Box
            sx={{
              padding: { xs: "4px", lg: "8px" },
              fontWeight: "400",
              fontSize: { xs: "14px", lg: "18px" },
            }}>
            {tab.content}
          </Box>

          {tab.descriptionPoints && (
            <Box
              p={2}
              sx={{
                fontWeight: "400",
                fontSize: { xs: "14px", lg: "18px" },
              }}>
              {tab.descriptionPoints.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </Box>
          )}
        </TabPanel>
      ))}
    </Box>
  );
}

VerticalTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default VerticalTabs;
