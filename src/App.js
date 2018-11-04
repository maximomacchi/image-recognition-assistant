import React, { Component } from "react";
import logo from "./logo.svg";
import "./scss/main.scss";
import { ImageRecognitionWidget } from "./components/image-recognition-widget/image-recognition-widget";

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appStatus: "NoResponseFromWidget",
      imageURLs: []
    };
  }

  onTagsReceived = () => {
    // request to pixabay code here
    this.setState({
      appStatus: "ReceivedResponseFromWidget"
    });
  };

  render() {
    return <ImageRecognitionWidget />;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <LambdaDemo />
        </header>
      </div>
    );
  }
}

export default App;
