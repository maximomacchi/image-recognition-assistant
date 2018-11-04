import React, { Component } from "react";

export class ImageRecognitionResponse extends Component {
  componentDidMount() {
    // this.props.onTagsRecieved();
  }
  renderImage() {
    return <div className="img-rec-wgt-image">image here</div>;
  }
  renderTagsList() {
    // generate jsx for each tag item
    const tagItemsList = this.props.tags.map(tagObject => {
      return (
        <li className="img-rec-wgt-tag-item">
          <span className="img-rec-wgt-tag-item-name">{tagObject.name}</span>
          <span className="img-rec-wgt-tag-item-value">{tagObject.value}</span>
        </li>
      );
    });

    return <ul className="img-rec-wgt-tags-list">{tagItemsList}</ul>;
  }
  render() {
    return (
      <div className="img-rec-wgt-response">
        {this.renderImage()}
        {this.renderTagsList()}
      </div>
    );
  }
}

export default ImageRecognitionResponse;
