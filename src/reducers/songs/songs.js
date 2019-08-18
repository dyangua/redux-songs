import { ADD_SONG, REMOVE_SONG } from "../../actions/songs/types";

export const songs = (album = [], action) => {
  switch (action.type) {
    case ADD_SONG: {
      return [...album, action.payload];
    }
    case REMOVE_SONG: {
      return album.filter(song => song.name !== action.payload);
    }

    default:
      return album;
  }
};
