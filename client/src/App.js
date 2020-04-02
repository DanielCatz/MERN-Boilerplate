import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Hidden } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Home from './pages/home';
import NotFound from './pages/notfound';
import BrowseProductsContainer from './pages/browseproductscontainer';
import CartBar from './pages/components/CartBar';
import Navbar from './pages/components/navbar';
import CartPageContainer from './pages/CartPageContainer';
import LocalStorageMutator from './pages/business/utils';
import { loadCartFromLocalStorage } from './redux/actions/cartActions';
import ContentContainer from './pages/ContentContainer';

// css definition here
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    color: 'black'
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  toolbar: {
    background: '#FFFFFF',
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const App = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [isBarOpen, setOpen] = React.useState(false);

  const closeBar = () => {
    setOpen(false);
    console.log('closed');
  };

  const openBar = () => {
    setOpen(true);
    console.log('opened');
  };

  return (
    <div>
      <ContentContainer classes={classes} theme={theme} isBarOpen={isBarOpen} closeBar={closeBar} openBar={openBar} />
    </div>
  );
};

export default App;
