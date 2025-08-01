import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "songs",
  initialState: {
    likedSongs: [],
    filter: "all",
  },
  reducers: {
    toggleLike: (state, action) => {
      const id = action.payload;
      if (state.likedSongs.includes(id)) {
        state.likedSongs = state.likedSongs.filter((song) => song !== id);
      } else {
        state.likedSongs.push(id);
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { toggleLike, setFilter } = songsSlice.actions;
export default songsSlice.reducer;
