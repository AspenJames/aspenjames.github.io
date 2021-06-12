import React, { useMemo, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import clsx from "clsx";

import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";

import NavBar from "./components/NavBar";
import Routes from './Routes';

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
  let darkModeInitial = localStorage.getItem('darkMode');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  if (darkModeInitial === null) {
    darkModeInitial = prefersDarkMode;
    localStorage.setItem('darkMode', darkModeInitial)
  } else {
    darkModeInitial = darkModeInitial !== 'false';
  }
  const [isDarkMode, setDarkMode] = useState(darkModeInitial);
  const theme = useMemo(
    () => {
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
          light: '#FFC1E3',
          main: '#F48FB1',
          dark: '#BF5F82',
          contrastText: '#FFFFFF',
        },
      }
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
        <Router>
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

            <Routes />

          </main>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
