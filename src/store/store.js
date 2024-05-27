import { configureStore } from "@reduxjs/toolkit";
import { denzerApi } from '../services/DenzerApi.tsx'

export const store = configureStore({
    reducer:{
        [ denzerApi.reducerPath ] : shazamCoreApi.reducer,

        player: playerReducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(denzerApi.middleware)
})
