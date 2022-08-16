import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

export const messageSlice = createSlice({
  name: "messages",
  initialState,

  reducers: {
    messageBox: (state, action) => {
        console.log(action.payload)
        state.messages.push(action.payload)
    },
  },
});

export const { messageBox } = messageSlice.actions;
export default messageSlice.reducer;
