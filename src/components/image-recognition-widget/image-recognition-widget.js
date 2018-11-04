import React, { Component } from "react";

import { ImageRecognitionResponsePhase } from "./image-recognition-response-phase";
import {
  requestTagsForImageURL,
  requestTagsForImageBytes
} from "../../utilities/clarifai-handler";
import { ImageRecognitionRequestPhase } from "./image-recognition-request-phase";

export class ImageRecognitionWidget extends Component {
  constructor() {
    super();
    this.state = {
      fetchStatus: "NoInput",
      imageSrc: "",
      tags: []
    };
  }

  successfuleFetchCallback(response, imageSource = null) {
    // if imageSource is null, dont change it
    // Double storage of tags so widget can be standalone
    const receivedTags = response["outputs"][0]["data"]["concepts"];
    this.setState(prevState => ({
      fetchStatus: "ReceivedResponse",
      imageSrc: imageSource ? imageSource : prevState.imageSrc,
      tags: receivedTags
    }));
    // Store tags on app state as well
    this.props.onTagsReceived(receivedTags);
  }

  onSearchButtonClick(url) {
    requestTagsForImageURL(url, response =>
      this.successfuleFetchCallback(response, url)
    );
  }

  onSearchButtonClickFileInput(fileBase64) {
    requestTagsForImageBytes(fileBase64, response =>
      // Dont change image source
      this.successfuleFetchCallback(response)
    );
  }

  onNewSearchPress() {
    this.setState({
      fetchStatus: "NoInput",
      imageSrc: "",
      tags: []
    });
  }

  onFileInputChange(fileObj) {
    this.setState({
      imageSrc: URL.createObjectURL(fileObj)
    });
  }

  renderBody() {
    if (["NoInput", "Requesting"].includes(this.state.fetchStatus)) {
      return (
        <ImageRecognitionRequestPhase
          onSearchButtonClick={url => this.onSearchButtonClick(url)}
          onSearchButtonClickFileInput={fileBase64 =>
            this.onSearchButtonClickFileInput(fileBase64)
          }
          onFileInputChange={fileObj => this.onFileInputChange(fileObj)}
        />
      );
    } else if (["ReceivedResponse"].includes(this.state.fetchStatus)) {
      return (
        <ImageRecognitionResponsePhase
          onNewSearchPress={() => this.onNewSearchPress()}
          imageSrc={this.state.imageSrc}
          tags={this.state.tags}
        />
      );
    } else {
      // Opportunity to add error boundaries
      return <div>error</div>;
    }
  }

  render() {
    return <div className="img-rec-wgt-component">{this.renderBody()}</div>;
  }
}

export default ImageRecognitionWidget;
