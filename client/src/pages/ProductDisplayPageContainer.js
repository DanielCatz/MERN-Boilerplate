import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../redux/actions/cartActions';
import ProductDisplayPage from './ProductDisplayPage';
import createClient from '../Contentful';
import LocalStorageMutator from './business/utils';

class ProductDisplayPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      error: 'good',
      message: 'good',
      slug: null,
      product: null
    };
  }

  componentWillMount() {
    const { slug } = this.props.match.params;
    console.log('boop');
    this.setState({ slug });
    this.getProductsData(slug);
  }

  componentWillReceiveProps(nextProps) {
    const { slug } = nextProps.match.params;
    console.log('boop');
    this.setState({ slug });
    this.getProductsData(slug);
  }

  getProductsData = async slug => {
    try {
      console.log(slug);
      const response = await createClient.getEntries({
        content_type: 'flowerStoreProduct',
        'fields.slug[match]': slug,
        include: 3
      });
      if (response.items[0].fields) {
        this.setState({ product: response.items[0].fields });
        console.log(response);
      } else {
        // no matches in db, redirect to 404
        console.log(404);
      }
    } catch (error) {
      console.log(error);
      this.props.history.push('/notfound');
    }
  };

  addItem = () => {
    /* if no local storage store
     if local storage, grab, modify store
    
    then redux cart
    */

    LocalStorageMutator.addProductToCartLocalStorage(this.state.product);

    this.props.addItem(this.state.product);
    console.log(LocalStorageMutator.getCartFromLocalStorage());
  };

  render() {
    const { message, error, product } = this.state;

    if (product) return <ProductDisplayPage product={product} {...this.props} addItem={this.addItem} />;
    return <div>Loading</div>;
  }
}

const mapStateToProp = ({ cart }) => ({ cart });
const mapActionsToProp = {
  addItem
};
export default connect(
  mapStateToProp,
  mapActionsToProp
)(ProductDisplayPageContainer);
