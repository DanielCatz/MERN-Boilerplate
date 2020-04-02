import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductContainer from './components/ProductContainer';
import Navbar from './components/navbar';
import HeroImage from './components/HeroImage';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      error: 'good',
      products: [],
      message: 'good'
    };
  }

  render() {
    const { message, error } = this.state;
    return (
      <div>
        <HeroImage imageUrl="https://wallpaperplay.com/walls/full/6/c/8/247280.jpg" />
        <div className="container">
          <h2>This is the home of the cats</h2>
          <Link className="navbar-brand" to="/browseproducts">
            Browse
          </Link>
          <p>{message} </p>
          <p>{error} </p>
          <HeroImage imageUrl="https://wallpaperplay.com/walls/full/4/5/3/211742.jpg" />
        </div>
      </div>
    );
  }
}

export default Home;
