import { configureStore, createSlice } from "@reduxjs/toolkit";

// create our slice
const showSlice = createSlice({
  name: "show",
  initialState: {
    showDetail: [],
  },
  reducers: {
    addShowDetail: (state, action) => {
      state.showDetail.push(action.payload);
    },
  },
});

export default configureStore({
  reducer: {
    show: showSlice.reducer,
  },
});

export const { addShowDetail } = showSlice.actions;
