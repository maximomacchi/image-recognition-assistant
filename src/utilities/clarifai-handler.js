/**
 * Content here based on this guide:
 * https://clarifai.com/developer/guide/
 */

const Clarifai = require("clarifai");

const app = new Clarifai.App({
  apiKey: "f76d4ca4ffc14c16be6f014a29adbd36"
});

/**
 * Send request to Clarifai API to analyze an image.
 *
 * @param {string} url URL of image to be analyzed by Clarifai
 */
export function requestTagsForImageURL(url, successCallback) {
  app.models
    .initModel({
      id: Clarifai.GENERAL_MODEL
    })
    .then(generalModel => {
      return generalModel.predict(url);
    })
    // .then(response => {
    //   let concepts = response["outputs"][0]["data"]["concepts"];
    //   console.log(concepts);
    // });
    .then(successCallback);
}

/**
 * Send request to Clarifai API to analyze an image.
 *
 * @param {string} imgEncodedB64 Base64 encoded string of image's binary
 */
export function requestTagsForImageBytes(imgEncodedB64, successCallback) {
  app.models
    .predict(Clarifai.GENERAL_MODEL, {
      base64: imgEncodedB64
    })
    .then(
      // function(response) {
      //   let concepts = response["outputs"][0]["data"]["concepts"];
      //   console.log(concepts);
      // },
      successCallback,
      function(err) {
        console.log(err);
      }
    );
}
