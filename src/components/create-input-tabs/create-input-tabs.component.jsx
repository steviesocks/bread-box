import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Box, Tabs, Tab, Typography, AppBar, useTheme } from '@material-ui/core';
import Ingredient from './ingredient/ingredient.component';
import StepsInput from './steps/steps-input.component'
import SwipeableViews from 'react-swipeable-views';

import KitchenIcon from '@material-ui/icons/Kitchen';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';


import useStyles from './create-input-tabs.styles';

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

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
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

const CreateInputTabs = () => {
    // const classes = useStyles();
    const theme = useTheme()

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        // console.log("newValue", newValue)
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        console.log("index change")
        // setValue(index);
    };

    // console.log("value", value)
    return (
        <Paper>
            <AppBar position="static" >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab icon={<KitchenIcon />} aria-label="ingredients" {...a11yProps(0)} />
                    <Tab icon={<FormatListNumberedIcon />} aria-label="steps" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Ingredient />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <StepsInput />
                 </TabPanel>
            </SwipeableViews>
        </Paper>
    )
};

export default CreateInputTabs;