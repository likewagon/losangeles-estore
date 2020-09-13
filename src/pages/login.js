import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Container,
  Typography,
  CardMedia,
  Box,
  Avatar,
  Button,
} from '@material-ui/core';

import { Colors } from '../constants';

import logo_back from '../assets/images/logo_back.jpg';
import logo from '../assets/images/logo.jpg';

export default function Login() {
  const classes = useStyles();
  return (
    <CardMedia className={classes.logoBack} image={logo_back} >
      <Grid xs={10} sm={6} md={6} lg={4} className={classes.loginBack} >
        <Box className={classes.titleLocation}>
          Los Angeles County
        </Box>
        <Box className={classes.titleTitle}>
          eStore
        </Box>
        <Box className={classes.inputLine}>
          <Box className={classes.inputLabel}>User Name</Box>
          <Box className={classes.inputBox}>
            <input type='text' id='userName' name='userName' placeholder='' className={classes.inputInput} />
          </Box>
        </Box>
        <Box className={classes.inputLine}>
          <Box className={classes.inputLabel}>Password</Box>
          <Box className={classes.inputBox}>
            <input type='password' id='password' name='password' placeholder='' className={classes.inputInput} />
          </Box>
        </Box>
        <Box className={classes.bottomPart}>
          <Box className={classes.logo}>
            <Avatar alt="LosAngeles" src={logo} className={classes.logoImg} />
          </Box>
          <Box className={classes.rightPart}>
            <Button variant="loginBtn" className={classes.btn} onClick={() => { window.location.href = '/' }}>
              Login
            </Button>
            <Box className={classes.pwdLabel}>
              Change Password
            </Box>
            <Box className={classes.pwdLabel}>
              Forgot Password?
            </Box>
          </Box>
        </Box>
      </Grid>
    </CardMedia>
  );
}

const useStyles = makeStyles((theme) => ({
  logoBack: {
    height: '100vh',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBack: {
    width: '100%',    
    minHeight: 310,    
    backgroundColor: Colors.loginBackColor,
    borderRadius: 7
  },
  titleLocation: {
    color: Colors.titleColor,
    fontSize: '0.8rem',
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    // border: '1px solid #ffffff',
  },
  titleTitle: {
    color: Colors.titleColor,
    fontSize: '1.3rem',
    paddingLeft: theme.spacing(2),
    // border: '1px solid #ffffff',    
  },
  inputLine: {
    height: '7%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  inputLabel: {
    color: Colors.toneColor,
    fontSize: '0.9rem'
  },
  inputBox: {
    width: '45%',
    height: '100%',
    backgroundColor: Colors.whiteColor,
    marginLeft: '2%',
    marginRight: '7%',
    borderRadius: 3
  },
  inputInput: {
    width: '100%',
    height: '100%',
    fontSize: '1rem',
    border: 0
  },
  bottomPart: {
    display: 'flex',
  },
  logo: {
    width: '48%',
    // height: '50%',
    display: 'inline-block',
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(5),
    // border: '1px solid #ffffff',
  },
  logoImg: {
    width: 120,
    height: 120
  },
  rightPart: {
    width: '52%',
    // height: '45%',
    display: 'inline-block',
    paddingTop: theme.spacing(2),
    // border: '1px solid #ffffff',
  },
  btn: {
    width: '13%',
    // height: '4%',
    backgroundColor: Colors.toneColor,
    color: Colors.titleColor,
    padding: 0,
    // border: '1px solid #ffffff'
  },
  pwdLabel: {
    color: Colors.toneColor,
    fontSize: '0.7rem',
    marginTop: theme.spacing(2)
  },
}));