import { configureStore } from "@reduxjs/toolkit";
import postReucer from "./features/postSlice";

const store = configureStore({
    reducer: {
        posts: postReucer
    }
})

export default store;