import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
// The configureStore function will automatically set up an empty store for you
// with the relevant settings you will need in the future.
const store =  configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store
