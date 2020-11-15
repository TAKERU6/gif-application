import axios from "axios";
export const FETCH_GIFS = "FETCH_GIFS";

let id = 1;
export const fetchGifs = (dispatch) => {
  const url = "";
  const response = axios
    .get(url)
    .then((res) => res.json())
    .then((json) => json.date.date);
  dispatch({
    type: FETCH_GIFS,
    id: id++,
    gifUrl: response.images.downsized.url,
  });
};
