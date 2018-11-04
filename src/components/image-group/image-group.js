import FetchHelper from "../../utilities/fetch-helper.js";
import React, { Component } from "react";

import Image from "../Image";

export default class ImageGroup extends Component {
  fetch(params = {}) {
    return fetch(
      `/.netlify/functions/pixabay?${FetchHelper.serializeParams(params)}`
    );
  }
  render() {
    let images = [];
    for (let i = 0; i < 5; i++) {
      images.push(
        <Image imageURL="https://i.pinimg.com/originals/44/b6/53/44b6537b7578d7667232ce6ceb807892.jpg" />
      );
    }
    return <div>{images}</div>;
  }
}
