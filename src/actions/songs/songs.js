import { ADD_SONG, REMOVE_SONG } from "./types";

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
