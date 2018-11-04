import FetchHelper from '../../utilities/fetch-helper.js';
import React, { Component } from 'react';
const LIMIT = 5;

export default class ImageGroup extends Component {
  constructor(props) {
    super(props);
    this.fetch(this.getParams(this.props.tags))
        .then(resp => resp.json())
        .then(json => {
          console.log(json);
          this.setState({images: json.hits.splice(this.props.maxImages, json.hits.length)});
        });
  }
  getParams(tags) {
    tags.splice(LIMIT-1, tags.length);
    console.log(tags);
    return {
      q: this._assembleQuery(tags),
      'image_type': 'photo'
    }
  }
  fetch(params = {}) {
    return fetch(`/.netlify/functions/pixabay?${FetchHelper.serializeParams(params)}`);
  }
  _assembleQuery(tags) {
    return tags.reduce((acc, curr, idx, src) => {
      console.log('acc', acc, 'curr', curr, src);
      return `${acc}+${curr.name}`
    }, '');
  }
  renderImages(images) {
    return images.map(image => {
      return (<div> Not an image </div>)
      // return new Image();
    });
  }
  renderPlacholder() {
    return(
      <p> Please upload an image </p>
    );
  }
  renderGroup() {
    console.log('rendering group', this.props, this.state);
    if (this.props.tags && this.state && this.state.images) {
      console.log('rendering images');
      return this.renderImages(this.state.images);
    } else {
    console.log('rendering placeholder');
    return this.renderPlacholder();
    }
  }
  render() {
    console.log('rendering image group called');
    return (
      <div id='imageGroup'>
        {this.renderGroup()}
      </div>
    )
  }
}

