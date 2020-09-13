import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function MenuOnIcon(props) {
  const classes = useStyles();

  // const [showMenu, setShowMenu] = React.useState(null);
  const [menuMore, setMenuMore] = React.useState(null);
  const handleClose = () => {
    props.setShowMenu(false);
    setMenuMore(false);
  };

  return (
    <div>
      <Menu
        id="simple-menu"
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        anchorEl={props.anchorEl}
        keepMounted
        open={props.showMenu ? true : false}
        onClose={handleClose}
        className={classes.root}
      >
          <MenuItem onClick={handleClose} className={classes.menuItem}>Launch VM Client</MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuItem}>Power Off VM</MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuItem}>Power On VM</MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuItem}>Reboot VM</MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuItem}>Shutdown VM Guest</MenuItem>
        {
          !menuMore &&
          <>
            <MenuItem onClick={() => setMenuMore(true)} className={classes.menuItem} style={{marginTop: 15}}>More &nbsp; <ArrowDropDownIcon /></MenuItem>
          </>
        }
        {
          menuMore &&
          <>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Clone VM</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Create Server Snapshot</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Create VM Disk</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Create VM Snapshot</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Decommission VM</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Delete Snapshot</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Delete VM</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Delete VM Disk</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Delete VM Snapshot</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Delete vNIC</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Download Snapshot</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Enable CPU Memory</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Extend Snapshot</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Install Apps for Windows</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Install SCOM</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Install vScout</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Modify CPU RAM</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Refresh Status</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Reset VM</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Resize VM</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Revert Snapshot</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Revert VM Snapshot</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Standby VM</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Suspend VM</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Sync VM by VMID</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Update Metadata</MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>Clone for OCP</MenuItem>
          </>
        }
      </Menu>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 600,
  },
  menuItem: {
    fontSize: '0.8rem'
  }
}));