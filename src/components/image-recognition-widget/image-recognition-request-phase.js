import React, { Component } from "react";
import { ImageRecognitionTabs } from "./image-recognition-tabs";
import FileBase64 from "react-file-base64";

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

  onFileEncoded(files) {
    // Store file path to be previewed in response
    this.props.onFileInputChange(files["file"]);
    // Format base64 string from process result
    const b64str = files["base64"];
    this.setState({
      fileInput: b64str.slice(b64str.indexOf(",") + 1)
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
        {/* <input type="file" id="input-img-file" name="input-img-file" /> */}
        <FileBase64 multiple={false} onDone={this.onFileEncoded.bind(this)} />
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
    // Action of search button based on active tab
    const onClickFunction =
      this.state.activeTab === "File Upload"
        ? () => this.props.onSearchButtonClickFileInput(this.state.fileInput)
        : () => this.props.onSearchButtonClick(this.state.urlInput);
    return (
      <div className="img-rec-wgt-footer-btn">
        <button id="img-rec-wgt-search-btn" onClick={onClickFunction}>
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
