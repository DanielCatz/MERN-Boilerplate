import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

class ProductContainer extends React.Component {
  state = { product: this.props.product };

  render() {
    // to="/" will be a product page with its own switch routing
    return (
      <Link className="navbar-brand" to={`/browseproducts/productdisplay/${this.state.product.slug}`}>
        <Product product={this.state.product} />
      </Link>
    );
  }
}
export default ProductContainer;
