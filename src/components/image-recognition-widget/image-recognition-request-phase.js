import React, { Component } from "react";
import { ImageRecognitionTabs } from "./image-recognition-tabs";

export class ImageRecognitionRequestPhase extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: "URL",
      fileInput: "",
      urlInput: ""
    };
  }

  onTabSelect(tabName) {
    this.setState({
      activeTab: tabName
    });
  }

  renderTabs() {
    return (
      <div className="img-rec-wgt-response-input-source-tabs">
        <ImageRecognitionTabs
          name="URL"
          activeTab={this.state.activeTab}
          onTabSelect={tabName => this.onTabSelect(tabName)}
        />
        <ImageRecognitionTabs
          name="File Upload"
          activeTab={this.state.activeTab}
          onTabSelect={tabName => this.onTabSelect(tabName)}
        />
      </div>
    );
  }

  onURLChange(event) {
    this.setState({
      urlInput: event.target.value
    });
  }

  renderURLInput() {
    return (
      <div className="img-rec-wgt-request-tab-content">
        <span className="img-rec-wgt-request-tab-content-desc">
          Enter the URL of the image:
        </span>
        <input
          type="text"
          id="input-img-url"
          name="input-img-url"
          onChange={event => this.onURLChange(event)}
        />
      </div>
    );
  }

  renderFileInput() {
    return (
      <div className="img-rec-wgt-request-tab-content">
        <span className="img-rec-wgt-request-tab-content-desc">
          Select an image to upload:
        </span>
        <input type="file" id="input-img-file" name="input-img-file" />
      </div>
    );
  }

  renderBody() {
    const bodyContent =
      this.state.activeTab === "File Upload"
        ? this.renderFileInput()
        : this.renderURLInput();
    return <div className="img-rec-wgt-request-body">{bodyContent}</div>;
  }

  renderSearchButton() {
    return (
      <div className="img-rec-wgt-footer-btn">
        <button
          id="img-rec-wgt-search-btn"
          onClick={() => this.props.onSearchButtonClick(this.state.urlInput)}
        >
          Search
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="img-rec-wgt-response">
        {this.renderTabs()}
        {this.renderBody()}
        {this.renderSearchButton()}
      </div>
    );
  }
}

export default ImageRecognitionRequestPhase;
