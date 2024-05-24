import { configureStore } from "@reduxjs/toolkit";
import { denzerApi, shazamCoreApi } from '../services/DenzerApi.tsx'

export const store = configureStore({
    reducer:{
        [ denzerApi.reducerPath ] : shazamCoreApi.reducer,

        player: playerReducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(shazamCoreApi.middleware)
})
