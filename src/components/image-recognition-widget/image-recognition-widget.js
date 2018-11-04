import React, { Component } from "react";

import { requestTagsForImageURL } from "../../utilities/clarifai-handler";

export class ImageRecognitionWidget extends Component {
  constructor() {
    super();
    this.state = {
      fetchStatus: "NoInput",
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

  render() {
    if (["NoInput", "Requesting"].includes(this.state.fetchStatus)) {
      return (
        <div>{/* <ImageRecognitionRequest></ImageRecognitionRequest> */}</div>
      );
    } else if (["ReceivedResponse"].includes(this.state.fetchStatus)) {
      return (
        <div>{/* <ImageRecognitionResponse></ImageRecognitionResponse> */}</div>
      );
    }
  }
}

export default ImageRecognitionWidget;
