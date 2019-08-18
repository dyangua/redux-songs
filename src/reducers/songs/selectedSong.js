import { SELECTED_SONG, REMOVE_SONG } from "../../actions/songs/types";

export const selectedSong = (song = null, action) => {
  switch (action.type) {
    case SELECTED_SONG: {
      return action.payload;
    }
    case REMOVE_SONG: {
      return null;
    }
    default:
      return song;
  }
};
