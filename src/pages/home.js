import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  CardMedia
} from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';

import MailIcon from '@material-ui/icons/Mail';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { Colors } from '../constants';
import ListItem from '../components/listItem';

import logo from '../assets/images/logo.jpg';
import dataCenter from '../assets/images/data_center.png';
import windows from '../assets/images/windows.png';
import windowsPro from '../assets/images/windows_pro.png';
import vm from '../assets/images/vm.jpg';
import redhat from '../assets/images/redhat.png';
import redhatEnterprise from '../assets/images/redhat_enterprise.png'

export default function Home() {
  const classes = useStyles();

  const [userName, setUserName] = useState('Kevin');
  const handleChangeUser = (event) => {
    setUserName(event.target.value);
  };

  const [category, setCategory] = useState('BrowseCategories');
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const [list1, setList1] = useState([
    {
      id: 0,
      img: windows,
      title: 'Windows Virtual Machine',
      desc: 'Order this service to provision a Windows VM.',
      tag: 'Order For Others: Order'
    },
    {
      id: 1,
      img: redhat,
      title: 'Linux Virtual Machine',
      desc: 'Order this service to provision a Linux VM.',
      tag: 'Order For Others: Order'
    },
    {
      id: 2,
      img: vm,
      title: 'Blank Virtual Machine',
      desc: 'Order this service to provision a Blank VM.',
      tag: 'Order For Others: Order'
    },
  ]);

  const [list2, setList2] = useState([
    {
      id: 0,
      img: redhatEnterprise,
      title: 'RHEL7.x(v1)(LCC)',
      desc: '',
      tag: 'Order For Others: Order'
    },
    {
      id: 1,
      img: windowsPro,
      title: 'Windows2012(v1)(LCC)',
      desc: '',
      tag: 'Order For Others: Order'
    },
    {
      id: 2,
      img: windowsPro,
      title: 'Windows2016(v1)(LCC)',
      desc: 'Order this service to provision a Blank VM.',
      tag: 'Order For Others: Order'
    },
  ])

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Box className={classes.leftPart}>
            <Avatar className={classes.logoAvatarSmall} src={logo} onClick={()=>window.location.href='/'} />
            <Box className={classes.titlePart}>
              <Box className={classes.titleLocation}>
                LA COUNTY
              </Box>
              <Box className={classes.titleTitle}>
                eStore
              </Box>
            </Box>
          </Box>
          <Box className={classes.rightPart}>
            <FormControl className={classes.formControl}>
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
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls='primary-search-account-menu'
              aria-haspopup="true"
              onClick={() => { }}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box className={classes.blackBar}>
        <Box className={classes.tabLine}>
          <Box className={classes.tabHome}>
            <HomeIcon onClick={() => window.location.href = '/home'} />
          </Box>
          <Box className={classes.tabOther}>
            <FormControl className={classes.formControl}>
              <Select
                value={category}
                onChange={handleChangeCategory}
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="BrowseCategories">Browse Categories</MenuItem>
                <MenuItem value="Ninna">Ninna</MenuItem>
                <MenuItem value="Jhon">Jhon</MenuItem>
                <MenuItem value="Tomas">Tomas</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className={classes.tabOther}>
            <SearchIcon />
            <StopRoundedIcon />
            (Title and Keywords only)
          </Box>
        </Box>
      </Box>

      <Box className={classes.greyBar}>
        <Grid item xs={12} sm={6} md={4} lg={4} className={classes.titleDesc}>
          <Box className={classes.title}>Welcome to LA County eStore</Box>
          <Box className={classes.desc}>
            The Los Angeles County eStore provides a unified next-generation portal and
            infrastructure that allows County departments to request or order LAC service items as well as
            create a custom IT infrastructure for county agencies.
            The LAC eStore gives departments instant access for service requests, the ability to order
            supplies, or deploy hardware and software for their respective agencies.
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2} lg={2} className={classes.logo}>
          <Avatar className={classes.logoAvatarBig} src={logo} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={classes.inform}>
          <Box className={classes.title}>eCloud Informtion</Box>
          <Box className={classes.bottomRowPart}>
            <Box className={classes.listPart}>
              <Box><Link to='#' className={classes.listLink}>DC1 Video</Link></Box>
              <Box><Link to='#' className={classes.listLink}>Service Descripton</Link></Box>
              <Box><Link to='#' className={classes.listLink}>Generate Quote</Link></Box>
              <Box><Link to='#' className={classes.listLink}>eCloud Dashboards</Link></Box>
              <Box><Link to='#' className={classes.listLink}>eCloud User Guides</Link></Box>
              <Box><Link to='#' className={classes.listLink}>eCloud Tiers</Link></Box>
              <Box><Link to='#' className={classes.listLink}>Multi-Cloud Pricing Calculator</Link></Box>
              <Box><Link to='#' className={classes.listLink}>Help Desk support</Link></Box>
            </Box>
            <Box className={classes.arrowIconPart}>
              <ChevronRightIcon className={classes.arrowIcon} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} className={classes.prodService}>
          <Box className={classes.title}>My Products {'&'} Services</Box>
          <Box className={classes.bottomRowPart}>
            <Box className={classes.prodServiceDescPart}>
              Review your services. Track open orders for services, access your order history, get analytics
              on currently active services, and take action to maintain or upgrade your service.
            </Box>
            <Box className={classes.arrowIconPart}>
              <Link to="/main/service"><ChevronRightIcon className={classes.arrowIcon} /></Link>
            </Box>
          </Box>
        </Grid>
      </Box>

      <Box className={classes.itemBar}>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Box className={classes.itemTitle}>LA County eStore Services</Box>
          <Box className={classes.itemDesc}>All the Facilities, Office supplies and IT/Communication devices</Box>
          <Box className={classes.itemIconPart}>
            <Link to='/main'><CardMedia className={classes.itemIcon} image={dataCenter} /></Link>
            <Box className={classes.itemDesc}>DataCenter1 - On-Premise</Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
        </Grid>
      </Box>

      <Box className={classes.listBar}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box className={classes.listTitle}>DataCenter1 - On-Premise</Box>
          <Box className={classes.listDesc}>Linux and Windows VMs</Box>
          {
            list1.map((each, index) => (
              <ListItem key={index} data={each} />
            ))
          }
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box className={classes.listTitle}>Public Cloud - Off-Premise</Box>
          <Box className={classes.listDesc}>&nbsp;</Box>
          {
            list2.map((each, index) => (
              <ListItem key={index} data={each} />
            ))
          }
        </Grid>
      </Box>

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
  logoAvatarSmall: {
    cursor: 'pointer'
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
    width: 400,
    justifyContent: 'space-between',
    // border: '1px solid #ff0000'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    color: Colors.whiteColor,
  },

  blackBar: {
    backgroundColor: Colors.blackColor,
    width: '100%',
    height: 35,
    borderTop: `2px solid ${Colors.borderColor} `,
  },
  tabLine: {
    display: 'flex',
    height: '100%',
  },
  tabHome: {
    width: 40,
    height: '100%',
    backgroundImage: `linear-gradient(${Colors.toneColor}, ${Colors.blackColor})`,
    color: Colors.tabTitleColor,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: `0.5px solid ${Colors.borderColor}`,
    borderBottom: `0.5px solid ${Colors.borderColor}`,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  tabOther: {
    // width: 200,
    height: '100%',
    backgroundImage: `linear-gradient(${Colors.toneColor}, ${Colors.blackColor})`,
    color: Colors.tabTitleColor,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: `0.5px solid ${Colors.borderColor}`,
    borderBottom: `0.5px solid ${Colors.borderColor}`,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },

  greyBar: {
    // width: '100%',
    backgroundImage: `linear-gradient(#444444, ${Colors.blackColor})`,
    minHeight: 250,
    display: 'flex',
    flexWrap: 'wrap'
  },
  titleDesc: {
    // border: '1px solid #ffffff',
  },
  title: {
    color: Colors.tabTitleColor,
    fontSize: '1.5rem',
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    // border: '1px solid #ffffff',
  },
  desc: {
    color: Colors.tabTitleColor,
    fontSize: '0.8rem',
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    // border: '1px solid #fffff f',
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid #ffffff'
  },
  logoAvatarBig: {
    width: 120,
    height: 120,
    // marginTop: theme.spacing(4),
    // marginLeft: theme.spacing(6),
  },
  inform: {
    // border: '1px solid #ffffff'
  },
  bottomRowPart: {
    minHeight: 200,
    display: 'flex',
  },
  listPart: {
    width: '90%',
    height: '60%',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    overflowY: 'hidden',
    // border: '1px solid #ffffff'
  },
  listLink: {
    color: Colors.toneColor
  },
  arrowIconPart: {
    width: '10%',
    display: 'flex',
    alignItems: 'center',
    boborder: '1px solid #ffffff'
  },
  arrowIcon: {
    width: '100%',
    height: 50,
    cursor: 'pointer',
    color: Colors.tabTitleColor
  },
  prodService: {
    // border: '1px solid #ffffff'
  },
  prodServiceDescPart: {
    width: '90%',
    color: Colors.tabTitleColor,
    fontSize: '0.8rem',
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    overflowY: 'hidden',
    // border: '1px solid #ffffff'
  },

  itemBar: {
    width: '100%',
    minHeight: 200,
    display: 'flex',
    flexWrap: 'wrap',
    boxShadow: `0px 10px 10px 1px ${Colors.itemShadowColor}`,
    // border: '3px solid '
  },
  itemTitle: {
    color: Colors.itemTextColor,
    fontSize: '1.2rem',
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    // border: '1px solid #ffffff',
  },
  itemDesc: {
    color: Colors.itemTextColor,
    fontSize: '0.7rem',
    // marginTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    // border: '1px solid #fffff f',
  },
  itemIconPart: {
    minHeight: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid'
  },
  itemIcon: {
    width: 60,
    height: 60,
    cursor: 'pointer',
  },

  listBar: {
    width: '100%',
    // minHeight: 300,
    display: 'flex',
    flexWrap: 'wrap',
    // border: '1px solid '
  },
  listTitle: {
    color: Colors.itemTextColor,
    fontSize: '0.8rem',
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    // border: '1px solid',
  },
  listDesc: {
    color: Colors.itemTextColor,
    fontSize: '0.7rem',
    // marginTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    // border: '1px solid',
  },
}));