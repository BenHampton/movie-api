import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
        <div className={'home'} >
            <div className={'homepage'}>
                <div className={'App-intro-container'}>
                    <div className={'App-intro'}>
                        <div className={'App-title'}>
                            Movie Database API With React JS
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
