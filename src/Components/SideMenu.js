import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

//Icons Imports
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ReceiptIcon from '@material-ui/icons/Receipt';
import BarChartIcon from '@material-ui/icons/BarChart';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SpeedIcon from '@material-ui/icons/Speed';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import FunctionsIcon from '@material-ui/icons/Functions';
import DescriptionIcon from '@material-ui/icons/Description';
import BuildIcon from '@material-ui/icons/Build';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
      <ListItem style={{
          backgroundColor:'lightgray',
          width:'70%',
          textAlign:'center',
          marginLeft:'10%',
          borderRadius:'10px',
          
          
          }} >

          <ListItemIcon>
            <BuildIcon style={{marginLeft:'80%'}}/>
          </ListItemIcon>
          <ListItemText primary="Tools" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ReceiptIcon />
          </ListItemIcon>
          <ListItemText primary="Backlog Remover" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Rank Up" />
        </ListItem>


        <ListItem button>
          <ListItemIcon>
            <SpeedIcon />
          </ListItemIcon>
          <ListItemText primary="Speed Up" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <HelpOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Accuracy Up" />
        </ListItem>


        <ListItem button>
          <ListItemIcon>
            <SettingsBackupRestoreIcon />
          </ListItemIcon>
          <ListItemText primary="Revision" />
        </ListItem>


        <ListItem button>
          <ListItemIcon>
            <FileCopyIcon />
          </ListItemIcon>
          <ListItemText primary="Test Creater" />
        </ListItem>


        <ListItem button>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Assignment Creator" />
        </ListItem>


        <ListItem button>
          <ListItemIcon>
            <ReceiptIcon />
          </ListItemIcon>
          <ListItemText primary="Study Material" />
        </ListItem>
        

        <ListItem button>
          <ListItemIcon>
            <FunctionsIcon />
          </ListItemIcon>
          <ListItemText primary="Formula Sheet" />
        </ListItem>

      </List>
      <Divider />
     
    </div>
  );
}
