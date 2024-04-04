import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { navbarSolutionList } from '../utils/StaticData/solutionPageData';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          //indicatorColor="secondary"
          textColor="inherit"
          sx={{bgcolor:"ligthblue"}}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label={navbarSolutionList[3].content[0].title} {...a11yProps(0)} />
          <Tab label={navbarSolutionList[3].content[1].title} {...a11yProps(1)} />
          <Tab label={navbarSolutionList[3].content[2].title} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {navbarSolutionList[3].content.map((details,index)=>(
            <TabPanel key={index} value={value} index={index} dir={theme.direction}>
            <Typography>{details.title}
            </Typography>
            <Typography>
            {details.description}</Typography>
            {details.descriptionPoints.map((e,i)=>(
                 <Box key={i} sx={{ display: "flex", mx: 1, py: 1 }}>
                 <Box>
                   <KeyboardDoubleArrowRightIcon />
                 </Box>
                 <Typography> {e}</Typography>
               </Box>
            ))}
           
            </TabPanel>
        ))}
      </SwipeableViews>
    </Box>
  );
}