import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

import SettingIcon from '@material-ui/icons/Settings';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import { Colors } from '../constants';

import MenuOnIcon from './menuOnIcon';
import Form from './form';

export default function TileItem(props) {
  const classes = useStyles();
  const data = props.data;

  const [showMenu, setShowMenu] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClickSetting = (event) => {
    setAnchorEl(event.currentTarget);
    setShowMenu(true);
  }

  return (
    <>
      <Card className={classes.root}>
        <Box className={classes.topBar}>
          <Box className={classes.leftPart} onClick={() => window.open('https://isd.lacounty.gov')}>
            <Box className={classes.imgPart}>
              <CardMedia className={classes.img} image={data.img}></CardMedia>
            </Box>
            <Box className={classes.titlePart}>
              <Box className={classes.title}>{data.title}</Box>
              <Box className={classes.statusRow}>
                <Box className={`${classes.status} ${data.active ? classes.active : classes.inactive}`}>
                  {data.active ? 'ACTIVE' : 'INACTIVE'}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.rightPart}>
            <SettingIcon className={classes.icon} onClick={handleClickSetting} />
            <MenuOnIcon showMenu={showMenu} setShowMenu={setShowMenu} anchorEl={anchorEl} />
          </Box>
        </Box>

        <Box onClick={() => window.open('https://isd.lacounty.gov')}>
          <Box className={classes.eachRow}>
            <Box className={classes.itemName}>OS:</Box>
            <Box className={classes.itemValue}>{data.os}</Box>
          </Box>
          <Box className={classes.eachRow}>
            <Box className={classes.itemName}>VDC:</Box>
            <Box className={classes.itemValue}>{data.vdc}</Box>
          </Box>
          <Box className={classes.eachRow}>
            <Box className={classes.itemName}>HOST NAME:</Box>
            <Box className={classes.itemValue}>{data.hostName}</Box>
          </Box>
          <Box className={classes.eachRow}>
            <Box className={classes.itemName}>PRIMARY IP:</Box>
            <Box className={classes.itemValue}>{data.primaryIp} <FileCopyIcon className={classes.icon} /> </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 275,
    '&:hover': {
      boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.4)'
    },
  },
  topBar: {
    minHeight: 50,
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  leftPart: {
    // width: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    // border: '1px solid'
  },
  imgPart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    // border: '1px solid'
  },
  img: {
    width: 50,
    height: 50,
  },
  titlePart: {
    width: 'calc(100% - 50px)',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(1)
  },
  title: {
    fontSize: '0.9rem',
    // border: '1px solid'
  },
  statusRow: {
    // border: '1px solid'
  },
  status: {
    width: 60,
    color: Colors.whiteColor,
    fontSize: '0.6rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 0,

  },
  active: {
    backgroundColor: Colors.toneColor
  },
  inactive: {
    backgroundColor: Colors.itemTextColor
  },

  rightPart: {
    width: '10%',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    // border: '1px solid'
  },
  icon: {
    width: 15,
    height: 15,
    cursor: 'pointer'
  },

  eachRow: {
    display: 'flex',
    cursor: 'pointer',
    minHeight: 30,
    fontSize: '0.7rem',
    color: Colors.itemTextColor,
    alignItems: 'center',
    // marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    // border: '1px solid'
  },
  itemName: {
    width: '30%',
    paddingLeft: theme.spacing(2)
  },
  itemValue: {
    width: '70%',
    paddingRight: theme.spacing(2)
  },

  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));