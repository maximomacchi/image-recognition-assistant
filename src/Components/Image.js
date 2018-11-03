import React, { Component } from "react";

export default class Image {
  constructor(props) {
    this(props);
    this.state = {
      imageURL: ""
    };
  }

  render() {
    if (this.state.imageURL) {
      return <img src={this.state.imageURL} />;
    } else {
      return <div>Loading...</div>;
    }
  }
}
