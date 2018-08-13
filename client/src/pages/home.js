import React, { Component } from 'react';
import Navbar from './components/navbar';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      message: ''
    };
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>Let's get started</h2>
          <p>{message} </p>
        </div>
      </div>
    );
  }
}

export default Home;
