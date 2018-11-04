import React, { Component } from 'react';

class DownloadController extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.selectAll}> Select All </button>
        <button onClick={this.props.downloadAll}> Download All</button>
        <button onClick={this.props.downloadSelected}> Download Selected</button>
      </div>
    )
  }
}

export default DownloadController;