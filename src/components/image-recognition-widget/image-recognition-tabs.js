import React, { Component } from "react";

export class ImageRecognitionTabs extends Component {
  render() {
    const activeClass =
      this.props.activeTab === this.props.name
        ? "img-rec-wgt-response-input-source-tabs-active"
        : "";
    const classList = `img-rec-wgt-response-input-source-tabs-name ${activeClass}`;
    return (
      <span
        className={classList}
        onClick={() => this.props.onTabSelect(this.props.name)}
      >
        {this.props.name}
      </span>
    );
  }
}

export default ImageRecognitionTabs;
