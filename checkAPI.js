const axios = require("axios");
const { log } = require("./utils"); // Adjust the path as necessary
const settings = require("./config/config");

const urlChecking = "https://raw.githubusercontent.com/zainarain279/APIs-checking/refs/heads/main/endpoints.json";

async function checkBaseUrl() {
  console.log("Checking api...".blue);
  if (settings.ADVANCED_ANTI_DETECTION) {
    const result = await getBaseApi(urlChecking);
    if (result.endpoint) {
      log("No change in api!", "success");
      return result;
    }
  } else {
    return {
      endpoint: settings.BASE_URL,
      message:
        "https://t.me/AirdropScript6",
    };
  }
}

async function getBaseApi(url) {
  try {
    const response = await axios.get(url);
    const content = response.data;
    if (content?.zoo) {
      return { endpoint: content.zoo, message: content.copyright };
    } else {
      return {
        endpoint: null,
        message:
          "https://t.me/AirdropScript6",
      };
    }
  } catch (e) {
    return {
      endpoint: null,
      message:
        "https://t.me/AirdropScript6",
    };
  }
}

module.exports = { checkBaseUrl };
