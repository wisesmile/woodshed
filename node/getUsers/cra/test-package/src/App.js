import React, { Component } from 'react';
import './App.css';
import MyComponent from 'get-users'

class App extends Component {
  render() {
    return (
      <div className="foo">
        <MyComponent text='Modern React component module' />
      </div>
    );
  }
}

export default App;
