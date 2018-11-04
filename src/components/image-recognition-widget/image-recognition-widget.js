import React, { Component } from "react";

import { ImageRecognitionResponse } from "./image-recognition-response-phase";
import { requestTagsForImageURL } from "../../utilities/clarifai-handler";

export class ImageRecognitionWidget extends Component {
  constructor() {
    super();
    this.state = {
      // fetchStatus: "NoInput",
      fetchStatus: "ReceivedResponse",
      image: "",
      tags: []
    };
  }

  onSearchButtonClick = url => {
    requestTagsForImageURL(url, response => {
      this.setState({
        fetchStatus: "ReceivedResponse",
        image: "image",
        tags: response["outputs"][0]["data"]["concepts"]
      });
    });
  };

  renderHead() {
    return (
      <div className="img-rec-wgt-head">
        <span id="img-rec-wgt-head-text">Image Recognition Widget</span>
      </div>
    );
  }

  renderSearchButton() {
    // temp
    return (
      <button
        onClick={this.onSearchButtonClick(
          "https://samples.clarifai.com/metro-north.jpg"
        )}
      >
        Test Search
      </button>
    );
  }

  renderBody() {
    const testTags = [
      { name: "tag1", value: "1" },
      { name: "tag2", value: "2" },
      { name: "tag3", value: "3" }
    ];

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
            onTagsReceived="null"
            image={this.state.image}
            // tags={this.state.tags}
            tags={testTags}
          />
        </div>
      );
    } else {
      // Opportunity to add error boundaries
      return <div>error</div>;
    }
  }

  renderFooter() {
    // start a new search button
    return (
      <div className="img-rec-wgt-head">
        <button>New Search</button>
      </div>
    );
  }

  render() {
    return (
      <div className="img-rec-wgt-component">
        {this.renderHead()}
        {this.renderSearchButton()}
        {this.renderBody()}
        {this.renderFooter()}
      </div>
    );
  }
}

export default ImageRecognitionWidget;
