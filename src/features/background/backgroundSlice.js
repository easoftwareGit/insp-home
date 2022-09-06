import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getImageApi from "../../api/background/backgroundApi";
// import { allBGImages } from "./localBackgrounds";

export const getBackground = createAsyncThunk("backgroundImage/getBackground", getImageApi);

export const backgroundImageSlice = createSlice({
  name: 'backgroundImage',
  initialState: {
    images: [],
    imageIndex: 0
  },
  reducers: {
    getNextImage: (state) => {      
      state.imageIndex = (state.imageIndex + 1) % state.images.length;
    },
    getPrevImage: (state) => {      
      let newIndex = state.imageIndex - 1;
      if (newIndex < 0) {
        newIndex = state.images.length -1;
      }
      state.imageIndex = newIndex;
    }
  },
  extraReducers: {
    [getBackground.fulfilled]: (state, action) => {
      state.images = action.payload;
      state.imageIndex = 0;
    }
  }
});

// export const backgroundImageSlice = createSlice({
//   name: 'backgroundImage',
//   initialState: {
//     images: allBGImages,
//     imageIndex: 0
//   },
//   reducers: {
//     getNextImage: (state) => {      
//       state.imageIndex = (state.imageIndex + 1) % state.images.length;
//     },
//     getPrevImage: (state) => {      
//       let prevIndex = state.imageIndex - 1;
//       if (prevIndex < 0) {
//         prevIndex = state.images.length -1;
//       }
//       state.imageIndex = prevIndex;
//     }
//   },
// });

export const { getNextImage, getPrevImage } = backgroundImageSlice.actions;
export default backgroundImageSlice.reducer;