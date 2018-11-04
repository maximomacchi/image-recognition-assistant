import React, { Component } from "react";

import { ImageRecognitionResponse } from "./response-phase/image-recognition-response-phase";
import { requestTagsForImageURL } from "../../utilities/clarifai-handler";

export class ImageRecognitionWidget extends Component {
  constructor() {
    super();
    this.state = {
      // fetchStatus: "NoInput",
      fetchStatus: "ReceivedResponse",
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

  renderBody() {
    if (["NoInput", "Requesting"].includes(this.state.fetchStatus)) {
      return (
        <div>
          {/* <ImageRecognitionRequest onSearchButtonClick=onSearchButtonClick 
                                       fetchStatus=this.state.fetchStatus /> */}
        </div>
      );
    } else if (["ReceivedResponse"].includes(this.state.fetchStatus)) {
      return (
        <div>
          <ImageRecognitionResponse
            // onTagsReceived={this.props.onTagsReceived}
            onNewSearchPress={() =>
              this.onSearchButtonClick(
                "https://samples.clarifai.com/metro-north.jpg"
              )
            }
            imageSrc={this.state.imageSrc}
            tags={this.state.tags}
          />
        </div>
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
