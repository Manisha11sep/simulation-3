import React, { Component } from 'react';
import routes from './router';
import { Link } from 'react-router-dom';
import Nav from './component/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">

    <Nav/>
    
        
          {routes}
      </div>
    );
  }
}

export default App;
