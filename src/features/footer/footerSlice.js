// import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getQuoteApi from "../../api/quotes/quoteApi";
// import { allQuotes } from "./localFooters";

export const getQuote = createAsyncThunk("footer/getQuote", getQuoteApi);

export const footerSlice = createSlice({
  name: 'footer',
  initialState: {
    quote: "",
    author: ""
  },
  extraReducers: {
    [getQuote.fulfilled]: (state, action) => {
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    }
  }
});

// export const footerSlice = createSlice({
//   name: 'footer',
//   initialState: {
//     quote: "I've got a bad feeling about this",
//     source: "Han Solo"
//   },
//   reducers: {
//     getQuote: (state) => {
//       const index = Math.floor(Math.random() * (allQuotes.length));
//       state.quote = allQuotes[index].quote;
//       state.source = allQuotes[index].source;
//     }
//   }
// });

// export const { getQuote } = footerSlice.actions;


export default footerSlice.reducer;