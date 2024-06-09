import { configureStore } from "@reduxjs/toolkit"
import { loadingReducer } from "./slices/loadingSlice"
import { authReducer } from "./slices/authSlice"

export const store = configureStore({
    reducer: {
      loading:loadingReducer,
      auth: authReducer,
    }
      
   
  })
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch