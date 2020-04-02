import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartPage from './CartPage';

class CartPageContainer extends Component {
  render() {
    return (
      <div>
        <CartPage cart={this.props.cart} />
      </div>
    );
  }
}

const mapStateToProp = ({ cart }) => ({ cart });
export default connect(mapStateToProp)(CartPageContainer);
