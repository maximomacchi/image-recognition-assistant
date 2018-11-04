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
          <img className="image" src={this.state.imageURL} />
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
