import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateBlogDto } from "@sandorbiba/shared";

interface BlogSlice {
  posts: CreateBlogDto[];
}

let initialState: BlogSlice = {
  posts: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    getBlogPosts(state, action: PayloadAction<CreateBlogDto[]>) {
      state.posts = action.payload;
    },
  },
});

export const { getBlogPosts } = blogSlice.actions;

export default blogSlice.reducer;
