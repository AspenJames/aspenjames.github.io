import React, { useMemo, useState } from "react";
import { hot } from "react-hot-loader";
import clsx from "clsx";

import {
  Container,
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

import NavBar from "./components/NavBar";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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

function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const darkThemeColors = {
    primary: {
      light: '#72FFFF',
      main: '#00FFFF',
      dark: '#00CBCC',
      contrastText: '#000000',
    },
    secondary: {
      light: '#FFD7FF',
      main: '#FFA4FF',
      dark: '#CB73CC',
      contrastText: '#000000',
    },
  }
  const lightThemeColors = {
    primary: {
      light: '#64FFFF',
      main: '#00CCCC',
      dark: '#009A9B',
      contrastText: '#000000',
    },
    secondary: {
      light: '#FF57A1',
      main: '#E60073',
      dark: '#AE0048',
      contrastText: '#FFFFFF',
    },
  }

  const theme = useMemo(
    () => {
      if (isDarkMode) {
        return createMuiTheme({
          palette: {
            type: 'dark',
            ...darkThemeColors,
          }
        })
      }
      return createMuiTheme({
        palette: {
          type: 'light',
          ...lightThemeColors,
        }
      })
    },
    [isDarkMode]
  )
  theme.drawerWidth = drawerWidth;

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <NavBar
          state={[open, setOpen]}
          darkModeState={[isDarkMode, setDarkMode]}
        />
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
            <Typography variant="h3" color="textSecondary" align="right">
              i'm a developer.
            </Typography>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default hot(module)(App);
