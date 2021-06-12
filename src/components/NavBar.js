import React, { forwardRef, useMemo } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
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


function NavBar(props) {
  const classes = useStyles();
  const [open, setOpen] = props.state;
  const [isDarkMode, setDarkMode] = props.darkModeState;

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const toggleDarkMode = () => {
    localStorage.setItem('darkMode', !isDarkMode);
    setDarkMode(!isDarkMode);
  }

  const handleSwitchInput = (ev) => toggleDarkMode(ev.target.checked);

  const ListItemLink = ({ icon, primary, to, external }) => {
    const renderLink = useMemo(
      () => forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
      [to],
    );

    const component = external ? 'a' : renderLink;
    const href = external ? { 'href': to } : {};

    return (
      <li>
        <ListItem button component={component} onClick={handleDrawerClose} {...href}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          {primary ? <ListItemText primary={primary} /> : null}
        </ListItem>
      </li>
    )
  }

  const drawerContents = (
    <>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />

      <List>
        <ListItemLink to="/" primary="Home" />
        <ListItemLink to="/about" primary="About" />
      </List>
      <Divider />

      <List>
        <ListItemLink to="https://github.com/aspenjames/aspenjames.github.io" icon={<GitHubIcon />} primary="Github" external="true" />
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

export default NavBar;
