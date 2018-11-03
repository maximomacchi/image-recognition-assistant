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
      return (
        <div className="image">
          <img src={this.state.imageURL} />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
