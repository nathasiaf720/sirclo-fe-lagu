import { ConstListTracks } from "store/constants/topTracks";

const initialState = {
  filter: null,
  response: null,
  loading: false,
  error: null,
};

const listTrack = (state = initialState, action) => {
  switch (action.type) {
    case ConstListTracks.SET_TRACK:
      return {
        filter: state.filter,
        response: action.payload,
        loading: false,
        error: null,
      };
    case ConstListTracks.CLEAR_TRACK:
      return {
        filter: null,
        response: null,
        loading: false,
        error: null,
      };
    case ConstListTracks.FILTER_TRACK:
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

export default listTrack;
