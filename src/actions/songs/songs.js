import { ADD_SONG, REMOVE_SONG, SELECTED_SONG } from "./types";

export const addSong = song => {
  return {
    type: ADD_SONG,
    payload: {
      ...song
    }
  };
};

export const deleteSong = name => {
  return {
    type: REMOVE_SONG,
    payload: name
  };
};

export const selectedSong = song => {
  return {
    type: SELECTED_SONG,
    payload: song
  };
};
