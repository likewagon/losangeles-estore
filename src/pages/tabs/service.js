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

import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { Colors } from '../../constants';

import SearchBox from '../../components/searchBox';
import ToggleButton from '../../components/toggleBtn';
import TileItem from '../../components/tileItem';
// import ListItem from '../../components/listItem';

import windows from '../../assets/images/windows.png';
import windowsPro from '../../assets/images/windows_pro.png';
import vm from '../../assets/images/vm.jpg';
import redhat from '../../assets/images/redhat.png';
import redhatEnterprise from '../../assets/images/redhat_enterprise.png'

const data = [
  {
    id: 0,
    img: windows,
    title: 'ectest11',
    active: true,
    os: 'Windows M64',
    vdc: 'DC1-4SD-TD-NonReplicated',
    hostName: 'ectest11',
    primaryIp: '10.37.91.187'
  },
  {
    id: 1,
    img: windowsPro,
    title: 'ectestes121',
    active: false,
    os: 'Windows RR 64-bit',
    vdc: 'DC1-TD-NonReplicated',
    hostName: 'ectestest123',
    primaryIp: '10.38.92.187'
  },
  {
    id: 2,
    img: redhat,
    title: 'ecast122',
    active: true,
    os: 'Linux M64',
    vdc: 'LS1-4SD-TD-Replicated',
    hostName: 'ecast121',
    primaryIp: '10.37.81.187'
  },
  {
    id: 3,
    img: redhatEnterprise,
    title: 'ectest11',
    active: true,
    os: 'Linux redhat M64',
    vdc: 'DC1-4SD-TD-NonReplicated',
    hostName: 'ectest11',
    primaryIp: '10.37.91.187'
  },
  {
    id: 4,
    img: redhat,
    title: 'ectest11',
    active: true,
    os: 'Red Hat 6',
    vdc: 'DC1-4SD-TD-NonReplicated',
    hostName: 'ectest11',
    primaryIp: '10.37.91.187'
  },
  {
    id: 5,
    img: redhatEnterprise,
    title: 'ectest11',
    active: false,
    os: 'Red Hat Enterprise M64',
    vdc: 'DC1-4SD-TD-NonReplicated',
    hostName: 'ectest23',
    primaryIp: '10.37.91.187'
  },
  {
    id: 6,
    img: vm,
    title: 'ectest11',
    active: true,
    os: 'Windows VM Ware 586',
    vdc: 'DC1-4SD-TD-Replicated',
    hostName: 'ectest11',
    primaryIp: '10.37.91.187'
  },
  {
    id: 7,
    img: windows,
    title: 'ectest11',
    active: true,
    os: 'Windows M64',
    vdc: 'DC1-4SD-TD-NonReplicated',
    hostName: 'ectest11',
    primaryIp: '10.37.91.187'
  },
  {
    id: 8,
    img: windowsPro,
    title: 'ectest11',
    active: true,
    os: 'Windows M64',
    vdc: 'DC1-4SD-TD-NonReplicated',
    hostName: 'ectest11',
    primaryIp: '10.37.91.187'
  },
  {
    id: 9,
    img: windows,
    title: 'ectest11',
    active: false,
    os: 'Windows M64',
    vdc: 'DC1-4SD-TD-NonReplicated',
    hostName: 'win',
    primaryIp: '10.37.91.187'
  },
  {
    id: 10,
    img: redhat,
    title: 'ectest11',
    active: true,
    os: 'Windows M64',
    vdc: 'DC1-4SD-TD-NonReplicated',
    hostName: 'ectest11',
    primaryIp: '10.37.91.187'
  },
  {
    id: 11,
    img: redhatEnterprise,
    title: 'ectest11',
    active: true,
    os: 'Linux M64',
    vdc: 'DC1-4SD-TD-NonReplicated',
    hostName: 'ectest11',
    primaryIp: '10.37.91.187'
  },
  {
    id: 12,
    img: windows,
    title: 'ectest11',
    active: true,
    os: 'Windows M64',
    vdc: 'DC1-4SD-TD-NonReplicated',
    hostName: 'ectest11',
    primaryIp: '10.37.91.187'
  },
]

export default function Main() {
  const classes = useStyles();

  const [category, setCategory] = useState(10);
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  }

  const [viewMode, setViewMode] = useState('tile');

  return (
    <>
      <Box className={classes.controlRow}>
        <Box className={classes.leftControlPart}>
          <FormControl className={classes.categorySelectControl}>
            <Select
              value={category}
              onChange={handleChangeCategory}
              displayEmpty
              className={classes.categorySelect}
            >
              <MenuItem value={10}><HomeIcon /></MenuItem>
              <MenuItem value={20}><AddShoppingCartIcon /></MenuItem>
              <MenuItem value={30}><HomeIcon /></MenuItem>
              <MenuItem value={30}><AddShoppingCartIcon /></MenuItem>
            </Select>
          </FormControl>
          <SearchBox />
        </Box>
        <Box className={classes.rightControlPart}>
          <ToggleButton viewMode={viewMode} setViewMode={setViewMode} />
        </Box>
      </Box>

      <Box className={classes.contentPart}>
        <>
          {
            data.map((each, index) => {
              if (viewMode == 'tile') {
                return (
                  <Grid key={index} item xs={12} sm={6} md={3} lg={3} className={classes.item}>
                    <TileItem data={each} />
                  </Grid>
                )
              }
              else if(viewMode == 'list'){
                return (
                  <Grid key={index} item xs={12} sm={6} md={6} lg={6} className={classes.item}>
                    {/* <ListItem data={each} /> */}
                  </Grid>
                )
              }
            })
          }
        </>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  controlRow: {
    minHeight: 30,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    // border: '1px solid'
  },
  leftControlPart: {
    width: '30%',
    display: 'flex',

    // border: '1px solid'
  },
  categorySelectControl: {
    minWidth: 60,
    border: `2px solid ${Colors.borderColor}`,

    '& > div:before': {
      borderBottom: 'none'
    },
  },
  categorySelect: {
    color: Colors.itemTextColor,
    '& > div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0
    }
  },

  rightControlPart: {
    width: '20%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // border: '1px solid'
  },

  contentPart: {
    // minHeight: 200,
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(3),
  },
  item: {
    minHeight: 230,
    padding: theme.spacing(1),
    // border: '1px solid'
  },
}));

