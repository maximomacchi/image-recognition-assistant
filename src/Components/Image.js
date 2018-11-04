import React, { Component } from "react";

export default class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="imageComponent">
        <img className="image" src={this.props.imageURL} />
        <button className="imgButton" id="downloadButton">
          Download
        </button>
        <button className="imgButton" id="shareButton">
          Share
        </button>
      </div>
    );
  }
}
