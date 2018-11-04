import React, { Component } from "react";
import "./scss/main.scss";
import { ImageRecognitionWidget } from "./components/image-recognition-widget/image-recognition-widget";

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appStatus: "NoResponseFromWidget",
      imageURLs: [],
      tags: []
    };
  }

  onTagsReceived(newTags) {
    this.setState({
      appStatus: "ReceivedResponseFromWidget",
      tags: newTags
    });
  }

  render() {
    return (
      <ImageRecognitionWidget
        onTagsReceived={newTags => this.onTagsReceived(newTags)}
      />
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
