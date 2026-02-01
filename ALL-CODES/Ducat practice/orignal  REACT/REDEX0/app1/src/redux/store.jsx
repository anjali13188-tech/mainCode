import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./conterSlice"

  const store = configureStore({
    reducer:{
        counter:counterSlice

    }
})
export default store