import React, { Component } from "react";

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: this.props.imageURL
    };
  }

  render() {
    if (this.state.imageURL != "") {
      return (
        <div className="imageComponent">
          <img className="image" src={this.state.imageURL} />
          <button className="imgButton" id="downloadButton">
            Download
          </button>
          <button className="imgButton" id="shareButton">
            Share
          </button>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
