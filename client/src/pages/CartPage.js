import React from 'react';
import CartItemContainer from './components/CartItemContainer';

const CartPage = props => {
  const { cart } = props;

  const cartList = cart.map(product => <CartItemContainer product={product} key={product.key} />);
  console.log(cart);
  return (
    <div>
      <div> Cart Page </div>
      <div> {cartList} </div>
    </div>
  );
};

export default CartPage;
