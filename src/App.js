import React, { Component } from "react";
import "./scss/main.scss";
import { ImageRecognitionWidget } from "./components/image-recognition-widget/image-recognition-widget";
import ImageGroup from "./components/image-group/image-group.js";
import DownloadController from "./components/download-controller/download-controller";

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appStatus: "NoResponseFromWidget",
      imageURLs: [],
      tags: []
    };
  }

  selectAll = () => {};
  downloadSelected = () => {};
  downloadAll = () => {};

  onTagsReceived(newTags) {
    console.log("tags recieved");
    this.setState({
      appStatus: "ReceivedResponseFromWidget",
      tags: newTags
    });
  }
  renderImageGroup() {
    if (this.state.appStatus === "ReceivedResponseFromWidget") {
      return <ImageGroup tags={this.state.tags} maxImages={5} />;
    }
  }
  render() {
    return (
      <div>
        <ImageRecognitionWidget
          onTagsReceived={newTags => this.onTagsReceived(newTags)}
        />
        <DownloadController
          downloadAll={this.downloadAll}
          selectAll={this.selectAll}
          downloadSelected={this.downloadSelected}
        />
        {this.renderImageGroup()}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LambdaDemo />
        </header>
      </div>
    );
  }
}

export default App;
