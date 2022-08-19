import { createSlice } from "@reduxjs/toolkit";
// import { createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";
import { allBGImages } from "./localBackgrounds";

export const backgroundImageSlice = createSlice({
  name: 'backgroundImage',
  initialState: {
    images: allBGImages,
    imageIndex: 0
  },
  reducers: {
    getNextImage: (state) => {      
      state.imageIndex = (state.imageIndex + 1) % state.images.length;
    },
    getPrevImage: (state) => {      
      let prevIndex = state.imageIndex - 1;
      if (prevIndex < 0) {
        prevIndex = state.images.length -1;
      }
      state.imageIndex = prevIndex;
    }
  },
});

export const { getNextImage, getPrevImage } = backgroundImageSlice.actions;
export default backgroundImageSlice.reducer;