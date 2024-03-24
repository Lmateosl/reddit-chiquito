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

const postSlices = createSlice(
    {
        name: "posts",
        initialState: {
          posts: [],
          isLoading: false,
          hasError: false
        },
        reducers: {},
        extraReducers: {
          [searchPost.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
          },
          [searchPost.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
          },
          [searchPost.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
          },
          [loadSubredit.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
          },
          [loadSubredit.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
          },
          [loadSubredit.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
          }
        }
      }
);

export default postSlices.reducer;