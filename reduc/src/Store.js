import {configureStore} from "@reduxjs/toolkit";
import countReducer from "./counterSlice";

const Store = configureStore({
    reducer:{
        counter: countReducer,
    }
})
export default Store;