import React, {Component} from 'react'
import 'typeface-roboto';
import { Typography, Grid, AppBar, Tabs, Tab, Box, Container} from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Design from './Design'
import Colors from './Colors'
import Text from './Text'
import Logo from './Logo'
import Details from './Details'

export default class Customizer extends Component {
    render() {
        return (
            <div style={{flexGrow: 1, paddingTop: 15}}>
                <Container maxWidth="md" style={styles.container}>
                <Grid container justify="center" alignItems="center">
                    <Typography style={styles.title} variant="h5">
                        Sock Customizer
                    </Typography>
                </Grid>
                <Grid container justify="center" alignItems="center" style={styles.tabBar}>
                    <Grid item xs={10}>
                            <ScrollableTabsButtonAuto/>
                    </Grid>
                </Grid>
                </Container>
            </div>
        );
    }
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Design" {...a11yProps(0)} />
          <Tab label="Colors" {...a11yProps(1)} />
          <Tab label="Text" {...a11yProps(2)} />
          <Tab label="Logo" {...a11yProps(3)} />
          <Tab label="Details" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Design/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Colors/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Text/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Logo/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Details/>
      </TabPanel>
    </div>
  );
}

const styles = {
    tabBar: {
        marginTop: 25
    },
    container: {
        backgroundColor: '#f0f0f0',
        height: '100vh'
    },
    title: {
        paddingTop: 20
    }
}