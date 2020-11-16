import axios from "axios";

const giphyApi = (word) => {
  const originUrl = "https://api.giphy.com/v1/gifs/search";
  const q = word;
  const apiKey = process.env.REACT_APP_GIPHY_APP_KEY;
  const limit = 3;
  const fetchUrl = `${originUrl}?q=${q}&api_key=${apiKey}&limit=${limit}`;
  return axios.get(fetchUrl);
};

export default giphyApi;
