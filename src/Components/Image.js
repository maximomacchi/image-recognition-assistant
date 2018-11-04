import React, { Component } from "react";

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.downloadClick = this.downloadClick.bind(this);
    this.shareClick = this.shareClick.bind(this);
  }

  downloadClick(e) {
    console.log("Download button clicked");
    window.location.href=this.props.imageURL;
  }

  shareClick(e) {
    console.log("Share button clicked");
  }

  render() {
    return (
      <div className="imageComponent">
        <img className="image" src={this.props.imageURL} />
        <button className="imgButton" id="downloadButton" onClick={this.downloadClick}>
          Download
        </button>
        {/* <button className="imgButton" id="shareButton" onClick={this.shareClick}>
          Share
        </button> */}
      </div>
    );
  }
}
