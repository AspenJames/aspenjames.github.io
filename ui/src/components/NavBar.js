import React from "react";
import { hot } from "react-hot-loader";
import clsx from "clsx";

import {
  AppBar,
  Divider,
  Drawer,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${theme.drawerWidth}px)`,
    marginLeft: theme.drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  themeButton: {
    position: 'fixed',
    top: 0,
    right: 0,
    zIndex: 0,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: theme.drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: theme.drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}))

function NavBar(props) {
  const classes = useStyles();
  const [open, setOpen] = props.state;
  const [isDarkMode, setDarkMode] = props.darkModeState;

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const toggleDarkMode = () => setDarkMode(!isDarkMode);

  const handleSwitchInput = (ev) => toggleDarkMode(ev.target.checked);

  const drawerContents = (
    <>
    <div className={classes.drawerHeader}>
      <IconButton onClick={handleDrawerClose}>
        <ChevronLeftIcon />
      </IconButton>
    </div>
    <Divider />

    <List>
      <ListItemLink href="/">
        <ListItemText primary="Home" />
      </ListItemLink>
    </List>
    <Divider />

    <FormControlLabel
      control={
        <Switch
          checked={isDarkMode}
          color='secondary'
          onChange={handleSwitchInput}
        />
      }
      label="Dark mode"
    />
    </>
  );

  return (
    <>
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          aspenjames.dev
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >{drawerContents}</Drawer>
    </>
  )
}

export default hot(module)(NavBar);