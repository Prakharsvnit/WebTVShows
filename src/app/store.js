import { configureStore } from "@reduxjs/toolkit";
import showReducer from "../features/shows/showSlice";

export default configureStore({
  reducer: {
    show: showReducer,
  },
});
