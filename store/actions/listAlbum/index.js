import { ConstListAlbums } from "store/constants/topAlbums";

export const actionSetListAlbum = (value) => {
  return {
    type:  ConstListAlbums.SET_ALBUM,
    payload: value,
  };
};

export const actionClearListAlbum = () => {
  return {
    type:  ConstListAlbums.CLEAR_ALBUM,
  };
};

export const actionSetFilterListAlbum = (value) => {
  return {
    type:  ConstListAlbums.FILTER_ALBUM,
    payload: value,
  };
};

export const actionErrorListAlbum = (value) => {
  return {
    type:  ConstListAlbums.FAILED,
    payload: value,
  };
};

export const actionLoadListAlbum = () => {
  return {
    type:  ConstListAlbums.LOADING,
  };
};
