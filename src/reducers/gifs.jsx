import { FETCH_GIFS } from "../actions";
const initialState = {};

const gifs = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GIFS:
      return { ...state, [action.id]: action.gifUrl };
    default:
      return state;
  }
};

export default gifs;
