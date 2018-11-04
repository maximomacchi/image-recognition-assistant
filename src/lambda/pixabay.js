// // show object spread works, i.e. babel 
import FetchHelper from '../utilities/fetch-helper.js';
const https = require('https');
require('dotenv').config();


export function handler(event, context, callback) {

  let baseUrl = `https://pixabay.com/api/?`;
  let params = event.queryStringParameters;
  params.key = process.env.REACT_APP_PIXABAY_KEY;
  let url = `${baseUrl}${FetchHelper.serializeParams(params)}`;
  console.log('url', url);

  https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      callback(null, {
        statusCode: 200,
        body: data,
      });
    });

  }).on("error", (err) => {
    callback(null, {
      statusCode: 400,
      body: err,
    });
  });
}
