import { createSlice, nanoid } from "@reduxjs/toolkit";

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: { items: [] },
  reducers: {
    addFeedback: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(text) {
        return { payload: { id: nanoid(), text } };
      },
    },
    deleteFeedback(state, action) {
      state.items = state.items.filter((f) => f.id !== action.payload);
    },
  },
});

export const { addFeedback, deleteFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
