import React, { Component } from "react";

class DownloadController extends Component {
  render() {
    return (
      <div className="dl-cont-container">
        <button className="dl-cont-btn" onClick={this.props.selectAll}>
          Select All
        </button>
        <button className="dl-cont-btn" onClick={this.props.downloadAll}>
          Download All
        </button>
        <button className="dl-cont-btn" onClick={this.props.downloadSelected}>
          Download Selected
        </button>
      </div>
    );
  }
}

export default DownloadController;
