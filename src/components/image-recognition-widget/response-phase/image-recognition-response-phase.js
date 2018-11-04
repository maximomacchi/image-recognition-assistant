import React, { Component } from "react";

export class ImageRecognitionResponse extends Component {
  componentDidMount() {
    // this.props.onTagsRecieved();
  }
  renderImage() {
    if (this.props.imageSrc.length <= 0) {
      return;
    }

    return (
      <div className="img-rec-wgt-image">
        <img src={this.props.imageSrc} alt="User input" />
      </div>
    );
  }
  renderTagsList() {
    // generate jsx for each tag item
    const tagItemsList = this.props.tags.map((tagObject, index) => {
      return (
        <li
          className="img-rec-wgt-tag-item"
          key={`img-rec-wgt-tag-item-${index}`}
        >
          <span className="img-rec-wgt-tag-item-name">{tagObject.name}</span>
          <span className="img-rec-wgt-tag-item-value">
            {(tagObject.value * 100).toFixed(2) + "%"}
          </span>
        </li>
      );
    });

    return <ul className="img-rec-wgt-tags-list">{tagItemsList}</ul>;
  }

  renderNewSearchButton() {
    // start a new search button
    return (
      <div className="img-rec-wgt-footer-btn">
        <button
          id="img-rec-wgt-new-search-btn"
          onClick={this.props.onNewSearchPress}
        >
          New Search
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="img-rec-wgt-response">
        <div className="img-rec-wgt-body-container">
          {this.renderImage()}
          {this.renderTagsList()}
        </div>
        {this.renderNewSearchButton()}
      </div>
    );
  }
}

export default ImageRecognitionResponse;
