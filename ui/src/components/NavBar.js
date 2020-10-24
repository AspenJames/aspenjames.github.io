import React, { forwardRef, useMemo } from 'react';
import { hot } from 'react-hot-loader';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';

import {
  AppBar,
  Divider,
  Drawer,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Switch,
  Toolbar,
  Typography,
} from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';


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
  buildImage: {
    // margin: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
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

function ListItemLink(props) {
  if (props.external) {
    return <ListItem button component="a" {...props} />;
  }
  const renderLink = useMemo(
    () => forwardRef((itemProps, ref) => <RouterLink to={props.to} ref={ref} {...itemProps} />),
    [props.to]
  )
  return <ListItem button component={renderLink} {...props} />;
}

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

    <List>
      <ListItemLink href="https://github.com/aspenjames/aspenjames.dev" external>
        <ListItemIcon><GitHubIcon /></ListItemIcon>
        <ListItemText primary="GitHub" />
      </ListItemLink>

      <ListItemLink href="http://45.56.84.15/AspenJames/aspenjames.dev" external>
        <img
          className={classes.buildImage}
          src="http://45.56.84.15/api/badges/AspenJames/aspenjames.dev/status.svg"
        />
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
