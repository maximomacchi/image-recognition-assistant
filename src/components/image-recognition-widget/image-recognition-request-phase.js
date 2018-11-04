import React, { Component } from "react";

export class ImageRecognitionRequestPhase extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: "URL"
    };
  }

  renderTabs() {
    return (
      <div className="img-rec-wgt-response-input-source-tabs">
        <span className="img-rec-wgt-response-input-source-tabs-name">URL</span>
        <span className="img-rec-wgt-response-input-source-tabs-name">
          File upload
        </span>
      </div>
    );
  }

  renderURLInput() {
    return (
      <div className="img-rec-wgt-request-tab-content">
        <span className="img-rec-wgt-request-tab-content-desc">
          Enter the URL of the image:
        </span>
        <input type="text" id="input-img-url" name="input-img-url" />
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
      this.state.activeTab === "FileInput"
        ? this.renderFileInput()
        : this.renderURLInput();
    return <div className="img-rec-wgt-request-body">{bodyContent}</div>;
  }

  renderSearchButton() {
    return (
      <div className="img-rec-wgt-footer-btn">
        <button id="img-rec-wgt-search-btn">Search</button>
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
