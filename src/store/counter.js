import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    // This is the name of the slice of state that we will implement in our
    // empty store.
    name: "counter",

    // This is the initial state for your slice of state. This can be
    // anything from an empty array or other data structure that your
    // application requires to avoid prop drilling.
    // For this example, we use a number.
    initialState: {
        value: 0,
    },

    // As indicated before. The reducer is used to manipulate the initial
    // state or current state.
    reducers: {
    // This is one example of an action type the reducer will identify
    // how to manipulate this slice of state.
    // In our case, we want the increment action type to add one to our
    // value, which is now set to zero in our initial state.
        increment: (state) => {
            state.value += 1;
        },
    // Second example, our action type will reduce the initial state or
    // current state by decrementing by 1.
        decrement: (state) => {
            state.value -= 1;
        },
    // The third example is probably the most important as this function
    // passes the action value or payload to our reducer to increment or
    // decrement the value of the state depending on what the user enters
    // or submits.
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function.
export const { increment, decrement, incrementByAmount, resetValuetoZero} = counterSlice.actions;

// Exporting the reducer function we will implement into our empty store, previously created.
export default counterSlice.reducer;
