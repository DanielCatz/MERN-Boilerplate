import React from 'react';

const ProductDisplayPage = props => (
  <div>
    <div className="container">
      <p>something here </p>
      <h2>{props.product.name}</h2>
      <p>{props.product.description} </p>
      <p>{props.product.price} </p>
      <p>{props.product.blurb} </p>
      <button onClick={props.addItem}> add Item </button>
    </div>
  </div>
);

export default ProductDisplayPage;
