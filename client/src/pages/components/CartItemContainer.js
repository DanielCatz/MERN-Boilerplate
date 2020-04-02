import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { removeItem, addItem, removeAllSpecificItem, updateCartFromStorage } from '../../redux/actions/cartActions';
import LocalStorageMutator from '../business/utils';

class CartItemContainer extends Component {
  addItem = () => {
    LocalStorageMutator.addProductToCartLocalStorage(this.props.product);
    this.props.updateCartFromStorage(LocalStorageMutator.getCartFromLocalStorage());
  };

  removeItem = () => {
    LocalStorageMutator.removeProductFromCartLocalStorage(this.props.product);
    this.props.updateCartFromStorage(LocalStorageMutator.getCartFromLocalStorage());
  };

  removeAllSpecificItem = () => {
    LocalStorageMutator.removeAllSpecificItem(this.props.product);
    this.props.updateCartFromStorage(LocalStorageMutator.getCartFromLocalStorage());
  };

  render() {
    return (
      <div>
        <CartItem
          product={this.props.product}
          clearItem={this.removeAllSpecificItem}
          addItem={this.addItem}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}

const mapActionsToProp = {
  removeItem,
  addItem,
  removeAllSpecificItem,
  updateCartFromStorage
};
export default connect(
  null,
  mapActionsToProp
)(CartItemContainer);
