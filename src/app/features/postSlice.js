import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostsByString, getSubredditPosts } from "../features/http/httpRequests";

export const searchPost = createAsyncThunk(
    'posts/searchPost',
    async (text, thunkAPI) => {
        const data = await getPostsByString(text);
        return data;
    }
);

export const loadSubredit = createAsyncThunk(
    'posts/loadSubredit',
    async (subreddit, thunkAPI) => {
        const data = await getSubredditPosts(subreddit);
        return data;
    }
)

const postSlices = createSlice({
    name: "posts",
    initialState: {
      posts: [],
      isLoading: false,
      hasError: false
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(searchPost.pending, (state) => {
          state.isLoading = true;
          state.hasError = false;
        })
        .addCase(searchPost.fulfilled, (state, action) => {
          state.posts = action.payload;
          state.isLoading = false;
          state.hasError = false;
        })
        .addCase(searchPost.rejected, (state) => {
          state.isLoading = false;
          state.hasError = true;
        })
        .addCase(loadSubredit.pending, (state) => {
          state.isLoading = true;
          state.hasError = false;
        })
        .addCase(loadSubredit.fulfilled, (state, action) => {
          state.posts = action.payload;
          state.isLoading = false;
          state.hasError = false;
        })
        .addCase(loadSubredit.rejected, (state) => {
          state.isLoading = false;
          state.hasError = true;
        });
    }
  });

export default postSlices.reducer;