import { ConstListArtists } from "store/constants/topArtists";

const initialState = {
  filter: null,
  response: null,
  loading: false,
  error: null,
};

const listArtist = (state = initialState, action) => {
  switch (action.type) {
    case ConstListArtists.SET_ARTIST:
      return {
        filter: state.filter,
        response: action.payload,
        loading: false,
        error: null,
      };
    case ConstListArtists.CLEAR_ARTIST:
      return {
        filter: null,
        response: null,
        loading: false,
        error: null,
      };
    case ConstListArtists.FILTER_ARTIST:
      return {
        filter: action.payload,
        response: state.response,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default listArtist;
