import React, { Component } from "react";
import logo from "./logo.svg";
import "./scss/main.scss";
import Image from "./Components/Image";

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
        <Image imageURL="https://res.cloudinary.com/demo/image/upload/w_250,h_250,c_mfit/w_700/sample.jpg" />
      </div>
    );
  }
}

export default App;
