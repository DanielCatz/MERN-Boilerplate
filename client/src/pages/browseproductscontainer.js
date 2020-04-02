import React from 'react';
import BrowseProducts from './browseproducts';
import createClient from '../Contentful';
import LocalStorageMutator from './business/utils';

class BrowseProductsContainer extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
  }

  componentWillMount() {
    this.getProductsData();

  }

  getProductsData = async () => {
    try {
      const response = await createClient.getEntries({ content_type: 'flowerStoreProduct' });
      this.setState({ products: response.items });
      console.log('Browse all pull');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return <BrowseProducts products={this.state.products} />;
  }
}

export default BrowseProductsContainer;
