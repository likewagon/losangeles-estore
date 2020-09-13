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

import menuOnIcon from './menuOnIcon';
import Form from './form';

export default function ListItem(props) {
  const classes = useStyles();
  const data = props.data;

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const FormModal = React.forwardRef((props, ref) => (
    <Modal
      ref={ref}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openModal}
      onClose={handleCloseModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    ></Modal>
  ));

  return (
    <>
      <Box className={classes.listItem}>
        <Box className={classes.listItemIconPart}>
          <CardMedia className={classes.listItemIcon} image={data.img} onClick={() => handleOpenModal()} />
        </Box>
        <Box className={classes.listItemTextPart} onClick={() => window.open('https://mypc.lacounty.gov/my.policy')}>
          <Box className={classes.listItemTitle}>{data.title}</Box>
          <Box className={classes.listItemDesc}>{data.desc}</Box>
          <Box className={classes.listItemTag}>{data.tag}</Box>
        </Box>
      </Box>

      {/* <FormModal ref={React.createRef()}>
        <Form handleCloseModal={handleCloseModal} />
      </FormModal> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Form handleCloseModal={handleCloseModal} />
      </Modal>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  listItem: {
    minHeight: 110,
    display: 'flex',
    // border: '1px solid'
  },
  listItemIconPart: {
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    // border: '1px solid'
  },
  listItemIcon: {
    width: 40,
    height: 40,
    cursor: 'pointer'
  },
  listItemTextPart: {
    width: '70%',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // border: '1px solid'
  },
  listItemTitle: {
    color: Colors.toneColor,
    fontSize: '0.7rem',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  listItemDesc: {
    color: Colors.itemTextColor,
    fontSize: '0.8rem',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  listItemTag: {
    color: Colors.toneColor,
    fontSize: '0.7rem',
    marginTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },

  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));