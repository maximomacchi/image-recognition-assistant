import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ImageGroup from './components/image-group/image-group.js';
import DownloadController from './components/download-controller/download-controller';

const testTags = [
  {'name': 'sunset'},
  {'name': 'beach'},
  {'name': 'waves'},
  {'name': 'water'},
  {'name': 'sunrise'}
]

class App extends Component {
  selectAll = () => {

  }
  downloadSelected = () => {

  }
  downloadAll = () => {

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DownloadController 
            downloadAll={this.downloadAll} 
            selectAll={this.selectAll} 
            downloadSelected={this.downloadSelected} 
          />
          <ImageGroup tags={testTags} maxImages={5} />
        </header>
      </div>
    );
  }
}

export default App;
