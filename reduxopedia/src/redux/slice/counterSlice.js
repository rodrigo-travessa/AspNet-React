import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        //actions here
        increment: (state) => {
            state.count +=1;
        },
        decrement: (state) => {
            state.count -=1;
        },
        multiply: (state, action) => {
            state.count *= action.payload
        },
        divide: (state, action) => {
            state.count /= action.payload;
        },
    }
});


export const {increment, decrement, multiply, divide} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;