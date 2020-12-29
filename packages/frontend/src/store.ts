import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./modules/blog/blog.slice";

const store = configureStore({
  reducer: {
    blog: blogSlice,
  },
});

export default store;
