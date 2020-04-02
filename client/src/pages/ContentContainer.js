import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Hidden } from '@material-ui/core';
import Home from './home';
import NotFound from './notfound';
import BrowseProductsContainer from './browseproductscontainer';
import CartBar from './components/CartBar';
import Navbar from './components/navbar';
import CartPageContainer from './CartPageContainer';
import LocalStorageMutator from './business/utils';
import { loadCartFromLocalStorage } from '../redux/actions/cartActions';

class ContentContainer extends Component {
  componentWillMount() {
    this.props.loadCartFromLocalStorage(LocalStorageMutator.getCartFromLocalStorage());
  }

  render() {
    const { classes, theme, isBarOpen, closeBar, openBar } = this.props;

    return (
      <div>
        <Router>
          <Navbar classes={classes} theme={theme} isBarOpen={isBarOpen} closeBar={closeBar} openBar={openBar} />
          <Hidden lgDown>
            {LocalStorageMutator.getCartFromLocalStorage().length > 0 ? (
              <CartBar classes={classes} theme={theme} isBarOpen={isBarOpen} closeBar={closeBar} openBar={openBar} />
            ) : (
              <div />
            )}
          </Hidden>
          <div className="content">
            <div className="center-col">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/browseproducts" component={BrowseProductsContainer} />
                <Route path="/cart" component={CartPageContainer} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProp = ({ cart }) => ({
  cart
});
const mapActionsToProp = {
  loadCartFromLocalStorage
};
export default connect(
  mapStateToProp,
  mapActionsToProp
)(ContentContainer);
