import { createSlice } from "@reduxjs/toolkit";
// import { createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";

import { allQuotes } from "./localFooters";

export const footerSlice = createSlice({
  name: 'footer',
  initialState: {
    quote: "I've got a bad feeling about this",
    source: "Han Solo"
  },
  reducers: {
    getQuote: (state) => {
      const index = Math.floor(Math.random() * (allQuotes.length+1));
      state.quote = allQuotes[index].quote;
      state.source = allQuotes[index].source;
    }
  }
});

export const { getQuote } = footerSlice.actions;
export default footerSlice.reducer;