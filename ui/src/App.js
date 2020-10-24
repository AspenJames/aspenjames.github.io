import React, { useState } from "react";
import { hot } from "react-hot-loader";
import clsx from "clsx";

import {
  Container,
  CssBaseline,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";

import NavBar from "./components/NavBar";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
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
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function App(props) {
  const classes = useStyles();
  const theme = useTheme()
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar styleObj={classes} state={[open, setOpen]} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Container>
          <Typography variant="h1" color="primary" align="right">
            hello!
          </Typography>

          <Typography variant="h3" component="h2" color="secondary" align="right">
            my name is aspen.
          </Typography>
          <Typography variant= "h3" component="h2" color="secondary" align="right">
            i'm a developer.
          </Typography>
        </Container>
      </main>
    </div>
  );
}

export default hot(module)(App);
