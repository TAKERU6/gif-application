import axios from "axios";
export const FETCH_GIFS = "FETCH_GIFS";

export const fetchGifs = (dispatch) => {
  const response = axios.get("");
  dispatch({ type: FETCH_GIFS, payload: response.date });
};
