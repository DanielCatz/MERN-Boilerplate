import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';

const Product = props => {
  const { product } = props;
  return (
    <div key={product.slug}>
      <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div className="tc">
          <img
            src={product.images[0].fields ? product.images[0].fields.file.url : ''}
            className="br-100 h4 w4 dib ba b--black-05 pa2"
            title="kitty"
            alt="kitty"
          />
          <h1 className="f3 mb2">{product.name}</h1>
          <h2 className="f5 fw4 gray mt0 ">{product.description}</h2>
        </div>
      </article>
    </div>
  );
};
export default Product;
