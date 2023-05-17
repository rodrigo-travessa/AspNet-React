import {configureStore} from "@reduxjs/toolkit"
import {counterReducer} from "./slice/counterSlice"


export const store = configureStore({
    reducer : {
        counterStore : counterReducer,


    },
    
})


//Calling the method using store.dispatch and passing the path to the method.
// store.dispatch({
//     type:"counter/increment",
// })
// console.log(store.getState());

