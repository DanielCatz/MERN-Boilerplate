import React, { Component } from 'react';
import Navbar from './components/navbar';

class NotFound extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      url: '',
      message: ''
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>404</h1>
          <h2>I'm afraid I don't know that one</h2>
        </div>
      </div>
    );
  }
}

export default NotFound;
