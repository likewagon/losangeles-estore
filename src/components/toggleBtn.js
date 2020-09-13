import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Tooltip from '@material-ui/core/Tooltip';

import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewListIcon from '@material-ui/icons/ViewList';

export default function ToggleButtons(props) {
  const classes = useStyles();
  const [toggle, setToggle] = React.useState(props.viewMode);

  const handleToggle = (event, newToggle) => {
    if(!newToggle) return;
    
    setToggle(newToggle);
    props.setViewMode(newToggle);
  };

  return (
    <ToggleButtonGroup
      value={toggle}
      exclusive
      onChange={handleToggle}
    >
        <ToggleButton value="tile" className={classes.toggleBtn}>
      <Tooltip title='Tile'>
          <ViewModuleIcon />
      </Tooltip>
        </ToggleButton>
        <ToggleButton value="list" className={classes.toggleBtn}>
      <Tooltip title='List'>
          <ViewListIcon />
      </Tooltip>
        </ToggleButton>
    </ToggleButtonGroup>
  );
}

const useStyles = makeStyles((theme) => ({
  toggleBtn: {
    width: 50,
    padding: 0
  }
}));