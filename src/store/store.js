import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{

        player: playerReducer,
    }
})
export default store