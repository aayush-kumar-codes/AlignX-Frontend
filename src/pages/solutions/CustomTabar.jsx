import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./Solutions.css";
import { Typography } from "@mui/material";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      style={{ width: "80%" }}
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
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
      <Tabs
        orientation="vertical"
        variant="standard"
        value={value}
        onChange={handleChange}
        sx={{
          borderRight: 1,
          textAlign: "start",
          borderColor: "divider",
        }}>
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            sx={{
              width: "100%",
              textAlign: "start",
              position: "relative",
              left: "15%",
            }}
            label={
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "DM Sans",
                  fontWeight: "500",
                  width: "100%",
                  textAlign: "start ",
                }}>
                {tab.label}
              </Typography>
            }
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      {tabsData.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          <Box
            py={2}
            sx={{
              fontFamily: "Urbanist",
              fontWeight: "600",
              fontSize: "28px",
            }}>
            {tab.label}
          </Box>
          <Box>{tab.content}</Box>
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
