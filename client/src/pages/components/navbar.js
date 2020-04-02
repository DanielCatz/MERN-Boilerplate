import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import '../assets/navbar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const Navbar = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { classes, theme, isBarOpen, closeBar, openBar } = props;

  const toggleBar = () => {
    if (isBarOpen) closeBar();
    else openBar();
  };

  return (
    <AppBar position="static" className="appBar">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.title} to="/home">
            Home
          </Link>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.title} to="/featured">
            Featured
          </Link>
        </Typography>

        <Typography variant="h6" className={classes.title}>
          <Link className={classes.title} to="/browseproducts">
            Browse
          </Link>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.title} to="/about">
            About
          </Link>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.title} to="/contact">
            Contact
          </Link>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.title} to="/signin">
            Sign In
          </Link>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.title} to="/cart">
            Cart
          </Link>
        </Typography>

        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleBar}
            color="black"
          >
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
