import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Container,
  Typography,
  AppBar,
  Toolbar,
  Avatar,
  Box,
  IconButton,
  Badge,
  FormControl,
  Select,
  MenuItem,
  CardMedia,
  Tabs,
  Tab,
} from '@material-ui/core';
import { Link, useParams, useLocation } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';

import {Colors} from '../constants';

import Dashboard from './tabs/dashboard';
import Service from './tabs/service';
import Report from './tabs/report';
import Order from './tabs/order';
import Authorization from './tabs/authorization';

import dataCenter from '../assets/images/data_center.png';

export default function Main() {
  const {pageTab} = useParams();
  
  const classes = useStyles();

  const [userName, setUserName] = useState('Kevin');
  const handleChangeUser = (event) => {
    setUserName(event.target.value);
  };

  const [tab, setTab] = useState(pageTab ? pageTab : 'dashboard');
  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  } 

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Box className={classes.leftPart}>
            <CardMedia className={classes.titleIcon} image={dataCenter} />
            <Box className={classes.titlePart}>
              <Box className={classes.titleLocation}>
                LA COUNTY
              </Box>
              <Box className={classes.titleTitle}>
                DATACENTER1
              </Box>
            </Box>
          </Box>
          <Box className={classes.rightPart}>
            <FormControl className={classes.userSelectControl}>
              <Select
                value={userName}
                onChange={handleChangeUser}
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="Kevin">Kevin</MenuItem>
                <MenuItem value="Ninna">Ninna</MenuItem>
                <MenuItem value="Jhon">Jhon</MenuItem>
                <MenuItem value="Tomas">Tomas</MenuItem>
              </Select>
            </FormControl>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls='primary-search-account-menu'
              aria-haspopup="true"
              onClick={() => { window.location.href = '/home' }}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <AppBar position="relative" className={classes.tabBar}>
        <Tabs
          value={tab}
          // indicatorColor='secondary'
          onChange={handleChangeTab}
          aria-label="tabs example"
          className={classes.tabs}
          TabIndicatorProps={{
            style: {
              backgroundColor: Colors.toneColor
            }
          }}
        >
          <Tab label="Dashboard" value="dashboard" disableRipple className={classes.tab} />
          <Tab label="Service Items" value="service" disableRipple className={classes.tab} />
          <Tab label="Reports" value="report" disableRipple className={classes.tab} />
          <Tab label="Orders" value="order" disableRipple className={classes.tab} />
          <Tab label="Authorization" value="authorization" disableRipple className={classes.tab} />
        </Tabs>
      </AppBar>

      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.body}>
        {
          tab == 'dashboard' ? <Dashboard /> 
          : tab == 'service' ? <Service /> 
          : tab == 'report' ? <Report />
          : tab == 'order' ? <Order /> 
          : tab == 'authorization' ? <Authorization /> 
          : null
        }
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'space-between',
    backgroundColor: Colors.toneColor
  },
  leftPart: {
    display: 'flex',
    alignItems: 'center',
    // border: '1px solid #ff0000'
  },
  titleIcon: {
    width: 50,
    height: 50,
  },
  titlePart: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // border: '1px solid #ffffff'
  },
  titleLocation: {
    color: Colors.whiteColor,
    fontSize: '0.6rem',
    paddingLeft: theme.spacing(2),
    // border: '1px solid #ffffff',
  },
  titleTitle: {
    color: Colors.whiteColor,
    fontSize: '0.8rem',
    paddingLeft: theme.spacing(2),
    // border: '1px solid #fffff f',
  },
  rightPart: {
    display: 'flex',
    width: 200,
    justifyContent: 'space-between',
    // border: '1px solid #ff0000'
  },
  userSelectControl: {
    margin: theme.spacing(1),
    minWidth: 120,

    '& > div:before': {
      borderBottom: 'none'
    }
  },
  selectEmpty: {
    color: Colors.whiteColor,
  },

  tabBar: {
    height: 40,
    backgroundColor: Colors.whiteColor,
    borderBottom: `1px solid ${Colors.borderColor}`
  },
  tabs: {
    minHeight: 40
  },
  tab: {
    minWidth: 100,
    minHeight: 40,
    textTransform: 'none',
    fontSize: '0.8rem',
    color: Colors.itemTextColor
  },

  body: {
    backgroundColor: Colors.bodyBackColor,
    minHeight: 'calc(100vh - 104px)'
  },
  
}));

