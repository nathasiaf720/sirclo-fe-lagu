import { ConstListTracks } from "store/constants/topTracks";

export const actionSetListTracks = (value) => {
  return {
    type: ConstListTracks.SET_TRACK,
    payload: value,
  };
};

export const actionClearListTrack = () => {
  return {
    type: ConstListTracks.CLEAR_TRACK,
  };
};

export const actionSetFilterListTrack = (value) => {
  return {
    type: ConstListTracks.FILTER_TRACK,
    payload: value,
  };
};

export const actionErrorListTrack = (value) => {
  return {
    type: ConstListTracks.FAILED,
    payload: value,
  };
};

export const actionLoadListTrack = () => {
  return {
    type: ConstListTracks.LOADING,
  };
};
