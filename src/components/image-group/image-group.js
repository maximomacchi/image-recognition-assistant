import FetchHelper from "../../utilities/fetch-helper.js";
import React, { Component } from "react";
import Image from "../Image.js";
const LIMIT = 5;

export default class ImageGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }
  componentDidMount() {
    this.getData();
  }
  getParams(tags) {
    tags.splice(LIMIT - 1, tags.length);
    console.log(tags);
    return {
      q: this._assembleQuery(tags),
      image_type: "photo"
    };
  }
  getData() {
    this.fetch(this.getParams(this.props.tags))
      .then(resp => resp.json())
      .then(json => {
        console.log(json);
        this.setState({
          images: json.hits.splice(this.props.maxImages, json.hits.length)
        });
      });
  }
  fetch(params = {}) {
    return fetch(
      `/.netlify/functions/pixabay?${FetchHelper.serializeParams(params)}`
    );
  }
  _assembleQuery(tags) {
    return tags.reduce((acc, curr, idx, src) => {
      console.log("acc", acc, "curr", curr, src);
      return `${acc}+${curr.name}`;
    }, "");
  }
  renderImages(images) {
    console.log("rendering images", images);
    return images.map(image => <Image imgURL={image.previewURL} />);
  }
  renderPlacholder() {
    return <p> Please upload an image </p>;
  }
  renderGroup() {
    console.log("rendering group", this.props, this.state);
    if (this.props.tags && this.state && this.state.images) {
      console.log("rendering images");
      return this.renderImages(this.state.images);
    } else {
      console.log("rendering placeholder");
      return this.renderPlacholder();
    }
  }
  render() {
    console.log("rendering image group called", this.props, this.state);
    return (
      <div id="imageGroup">
        {this.state.images.map(image => (
          <Image imageURL={image.largeImageURL} />
        ))}
      </div>
    );
  }
}
