// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import listSC from "./suggestionContract/listSC";
import listTrack from "./listTracks";
const rootReducer = combineReducers({
  listTrack,
  listSC,
});

export default rootReducer;
