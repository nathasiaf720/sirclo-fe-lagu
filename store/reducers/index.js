import { combineReducers } from "redux";
import auth from "./auth"
import listTrack from "./listTracks";
import listArtist from "./listArtist";

export default combineReducers({
    listArtist,
    listTrack,
    auth,
})
