import { combineReducers } from "redux";
import { songs } from "./songs/songs";
import { selectedSong } from "./songs/selectedSong";

export default combineReducers({
  songs,
  selectedSong
});
