import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className="home" >
        <header className="App-header">
          <h4 className="App-title">web page is using React</h4>
        </header>
        <p className="App-intro">
          In the web application axios is used to call the end points supplied by MoiveDB.
        </p>
      </div>
    );
  }
}

export default App;
