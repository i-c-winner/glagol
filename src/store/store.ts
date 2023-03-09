import { configureStore } from '@reduxjs/toolkit'
import  conferenceSlice  from "./ConferenceSlice";
export default configureStore({
  reducer: {
    conference: conferenceSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
