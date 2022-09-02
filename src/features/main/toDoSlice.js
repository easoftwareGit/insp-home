import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: 'toDo',
  initialState: {
    items: [
      { text: 'To Do #1', isDone: false },
      { text: 'To Do item #two', isDone: false },
      { text: '3rd up on the list', isDone: false }
    ],
    doneItems:[]
  },
  reducers: {
    addItem: (state, action) => {
      if (state.items.find(({ text }) => text === action.payload)) {
        alert(`"${action.payload}" is already entered.`);
        return;
      }
      // action.payload has text of item to add
      state.items.push({ text: action.payload, isDone: false });
    },
    removeItem: (state, action) => {
      // action.payload has index of item to remove
      state.items.splice(action.payload, 1); 
    }, 
    toggleItemDone: (state, action) => {
      // action.payload has index of item to toggle isDone value
      state.items[action.payload].isDone = !state.items[action.payload].isDone;
    }
  }
});

export const { addItem, removeItem, toggleItemDone } = toDoSlice.actions;
export default toDoSlice.reducer;