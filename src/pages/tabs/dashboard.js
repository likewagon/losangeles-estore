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
  Button
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { Colors } from '../../constants';

import SearchBox from '../../components/searchBox';

import dns from '../../assets/images/dns.png';
import refresh from '../../assets/images/refresh.png';
import power from '../../assets/images/power.jpg';

export default function Dashboard() {
  const classes = useStyles();

  const [alerts, setAlerts] = useState([]);
  const [recentOrders, setRecentOrders] = useState([
    {
      id: 0,
      img: dns,
      title: 'DNS',
      status: 'completed'
    },
    {
      id: 1,
      img: refresh,
      title: 'Refresh Status',
      status: 'completed'
    },
    {
      id: 2,
      img: power,
      title: 'Power on VM',
      status: 'completed'
    },
    {
      id: 3,
      img: dns,
      title: 'DNS',
      status: 'completed'
    },
  ]);


  return (
    <>
      <Box className={classes.topPart}>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.alertPart}>
          <Box className={classes.header}>Alerts</Box>
          <Box className={classes.body}>
            {
              alerts.length == 0 ?
                <Box className={classes.noData}>
                  No Data Available
                </Box>
                :
                <Box className={classes.alertItem}>

                </Box>
            }
            <Box className={classes.browseAllRow}>BROWSE ALL ALERTS&nbsp; <ArrowForwardIosIcon className={classes.forwardIcon} /></Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.recentOrderPart}>
          <Box className={classes.header}>Recent Orders</Box>
          <Box className={classes.body}>
            {
              recentOrders.length == 0 ?
                <Box className={classes.noData}>
                  No Data Available
                </Box>
                :
                recentOrders.map((each, index) =>
                  <Box key={index} className={`${classes.orderItem} ${index % 2 == 0 ? classes.evenLine : ''}`}>
                    <Box className={classes.orderItemImg}><Avatar className={classes.orderItemImgIcon} src={each.img} onClick={() => { }}></Avatar></Box>
                    <Box className={classes.orderItemTitle}>{each.title}</Box>
                    <Box className={classes.orderItemStatus}>{each.status.toUpperCase()}</Box>
                  </Box>
                )
            }
            <Box className={classes.browseAllRow}>BROWSE ALL ALERTS&nbsp; <ArrowForwardIosIcon className={classes.forwardIcon} /></Box>
          </Box>
        </Grid>
      </Box>

      <Box className={classes.bottomPart}>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.performancePart}>
          <Box className={classes.header}>Performance</Box>
          <Box className={classes.body}>
            <Box className={classes.bodyRow}>
              <Grid item xs={12} sm={6} md={4} lg={4} className={classes.leftPart}>
                <Box className={classes.eachRow}>Filter By</Box>
                <Box className={classes.eachRow}>
                  <Box className={classes.eachKey}>
                    vDC
                  </Box>
                  <Box className={classes.eachValue}>
                    <select id='vDC' name='vDC' className={classes.inputBox}>
                      <option value='isdVVAD'>ISD-VVAD</option>
                      <option value='canada'>Canada</option>
                      <option value='usa'>USA</option>
                    </select>
                  </Box>
                </Box>
                <Box className={classes.eachRow}>
                  <Box className={classes.eachKey}>
                    VM
                  </Box>
                  <Box className={classes.eachValue}>
                    <SearchBox />
                  </Box>
                </Box>
                <Box className={classes.checksPart}>
                  <Box className={classes.checkRow}>
                    <input type='checkbox' id='dowvmvtms1' name='dowvmvtms1' placeholder='' />
                    <Box className={classes.chkLabelPart}>
                      <Box className={classes.chkLabelCircle} style={{ backgroundColor: 'rgb(39 94 146)' }}></Box>
                      <label htmlFor='dowvmvtms1'>dowvmvtms1</label>
                    </Box>
                  </Box>
                  <Box className={classes.checkRow}>
                    <input type='checkbox' id='dowvmvtmsnes1' name='dowvmvtmsnes1' placeholder='' />
                    <Box className={classes.chkLabelPart}>
                      <Box className={classes.chkLabelCircle} style={{ backgroundColor: 'rgb(98 39 146)' }}></Box>
                      <label htmlFor='dowvmvtmsnes1'>dowvmvtmsnes1</label>
                    </Box>
                  </Box>
                  <Box className={classes.checkRow}>
                    <input type='checkbox' id='dowvmvtmsxe1' name='dowvmvtmsxe1' placeholder='' />
                    <Box className={classes.chkLabelPart}>
                      <Box className={classes.chkLabelCircle} style={{ backgroundColor: 'rgb(132 146 39)' }}></Box>
                      <label htmlFor='dowvmvtmsxe1'>dowvmvtmsxe1</label>
                    </Box>
                  </Box>
                </Box>

                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.btnPart}>
                  <Button variant='contained' className={classes.filterBtn}>FILTER</Button>
                  <Button variant='contained' className={classes.refreshBtn}>REFRESH CHARTS</Button>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={4} className={classes.rightPart}>
                <Box className={classes.tagLine}>
                  <a onClick={()=>alert('1hour')} className={classes.tag}>1 hour&nbsp;&nbsp;|&nbsp;&nbsp;</a>
                  <a onClick={()=>alert('6hour')} className={classes.tag}>6 hour&nbsp;&nbsp;|&nbsp;&nbsp;</a>
                  <a onClick={()=>alert('1day')} className={classes.tag}>1 day&nbsp;&nbsp;|&nbsp;&nbsp;</a>
                  <a onClick={()=>alert('1week')} className={classes.tag}>1 week&nbsp;&nbsp;|&nbsp;&nbsp;</a>
                  <a onClick={()=>alert('customize')} className={classes.tag}>Customize</a>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  topPart: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(3),
  },
  alertPart: {
    padding: theme.spacing(1),
  },
  header: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.itemHeaderColor,
    color: Colors.itemTextColor,
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    border: `2px solid ${Colors.borderColor}`,
    paddingLeft: theme.spacing(2)
  },
  body: {
    backgroundColor: Colors.whiteColor,
    borderLeft: `2px solid ${Colors.borderColor}`,
    borderRight: `2px solid ${Colors.borderColor}`,
    borderBottom: `2px solid ${Colors.borderColor}`,
    padding: theme.spacing(2)
  },
  noData: {
    minHeight: 40,
    backgroundColor: Colors.itemHeaderColor,
    color: Colors.itemTextColor,
    fontSize: '0.7rem',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    // border: '1px solid',
  },
  alertItem: {
    minHeight: 40,
    display: 'flex',
    marginBottom: theme.spacing(1),
  },
  evenLine: {
    backgroundColor: Colors.itemHeaderColor,
  },
  browseAllRow: {
    color: Colors.toneColor,
    fontSize: '0.9rem',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  forwardIcon: {
    width: 15,
    height: 15
  },

  recentOrderPart: {
    padding: theme.spacing(1)
  },
  orderItem: {
    minHeight: 40,
    display: 'flex',
    marginBottom: theme.spacing(1),
  },
  orderItemImg: {
    width: '7%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid'
  },
  orderItemImgIcon: {
    width: 40,
    height: 40,
  },
  orderItemTitle: {
    width: '78%',
    color: Colors.itemTextColor,
    fontSize: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    // border: '1px solid'
  },
  orderItemStatus: {
    width: '15%',
    color: Colors.itemTextColor,
    fontSize: '0.6rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid'
  },

  bottomPart: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1)
  },
  performancePart: {},
  bodyRow: {
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: 200,
  },
  leftPart: {
  },
  eachRow: {
    minHeight: 30,
    color: Colors.itemTextColor,
    fontSize: '0.8rem',
    display: 'flex',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  eachKey: {
    width: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid'
  },
  eachValue: {
    width: '40%',
    // border: '1px solid'
  },
  inputBox: {
    width: '100%',
    height: '100%',
    color: Colors.itemTextColor,
    fontSize: '0.8rem',
    borderColor: Colors.borderColor,
  },
  checksPart: {
    minHeight: 30,
    color: Colors.itemTextColor,
    fontSize: '0.8rem',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  checkRow: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(6),
    // border: '1px solid '
  },
  chkLabelPart: {
    display: 'flex',
    alignItems: 'center',
  },
  chkLabelCircle: {
    width: 8,
    height: 8,
    borderRadius: 3,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  btnPart: {
    display: 'flex',
  },
  filterBtn: {
    backgroundColor: Colors.toneColor,
    color: Colors.whiteColor,
    marginRight: theme.spacing(2)
  },
  refreshBtn: {
    backgroundColor: Colors.whiteColor
  },

  rightPart: {
    marginTop: theme.spacing(2)
  },
  tagLine:{
    minHeight: 100,
    color: Colors.toneColor,
    paddingLeft: theme.spacing(2),
    borderLeft: `2px solid ${Colors.borderColor}`
  },
  tag:{
    cursor: 'pointer'
  },

}));

