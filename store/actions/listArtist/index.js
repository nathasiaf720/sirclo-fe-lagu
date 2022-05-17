import { ConstListArtists } from "store/constants/topArtists";

export const actionSetListArtist = (value) => {
  return {
    type:  ConstListArtists.SET_ARTIST,
    payload: value,
  };
};

export const actionClearListArtist = () => {
  return {
    type:  ConstListArtists.CLEAR_ARTIST,
  };
};

export const actionSetFilterListArtist = (value) => {
  return {
    type:  ConstListArtists.FILTER_ARTIST,
    payload: value,
  };
};

export const actionErrorListArtist = (value) => {
  return {
    type:  ConstListArtists.FAILED,
    payload: value,
  };
};

export const actionLoadListArtist = () => {
  return {
    type:  ConstListArtists.LOADING,
  };
};
