import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import customerReducer from "./slices/customersSlice.ts";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        customers: customerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

