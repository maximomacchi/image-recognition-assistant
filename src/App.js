import React, { Component } from "react";
import logo from "./logo.svg";
import "./scss/main.scss";
import Image from "./components/Image";

import ImageGroup from "./components/image-group/image-group.js";

const testTags = [
  {'name': 'sunset'},
  {'name': 'beach'},
  {'name': 'waves'},
  {'name': 'water'},
  {'name': 'sunrise'}
]

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = e => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch("/.netlify/functions/hello")
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <p>
        <button onClick={this.handleClick}>
          {loading ? "Loading..." : "Call Lambda"}
        </button>
        <br />
        <span>{msg}</span>
      </p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ImageGroup tags={testTags} maxImages={5} />
        </header>
      </div>
    );
  }
}

export default App;
