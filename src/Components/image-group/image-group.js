import FetchHelper from '../../utilities/fetch-helper.js';
import React, { Component } from 'react';

export default class ImageGroup extends Component {
  fetch(params = {}) {
    return fetch(`/.netlify/functions/pixabay?${FetchHelper.serializeParams(params)}`);
  }
  render() {
    return (
      <div id='imageGroup'></div>
    )
  }
}

