import React, { Component } from "react";

import { ImageRecognitionResponsePhase } from "./image-recognition-response-phase";
import { requestTagsForImageURL } from "../../utilities/clarifai-handler";
import { ImageRecognitionRequestPhase } from "./image-recognition-request-phase";

export class ImageRecognitionWidget extends Component {
  constructor() {
    super();
    this.state = {
      fetchStatus: "NoInput",
      // fetchStatus: "ReceivedResponse",
      imageSrc: "",
      tags: []
    };
  }

  onSearchButtonClick(url) {
    // Double storage of tags so widget can be standalone
    requestTagsForImageURL(url, response => {
      const receivedTags = response["outputs"][0]["data"]["concepts"];
      this.setState({
        fetchStatus: "ReceivedResponse",
        imageSrc: url,
        tags: receivedTags
      });
      // Store tags on app state as well
      this.props.onTagsReceived(receivedTags);
    });
  }

  onNewSearchPress() {
    this.setState({
      fetchStatus: "NoInput",
      imageSrc: "",
      tags: []
    });
  }

  renderBody() {
    if (["NoInput", "Requesting"].includes(this.state.fetchStatus)) {
      return (
        <ImageRecognitionRequestPhase
          onSearchButtonClick={url => this.onSearchButtonClick(url)}
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
