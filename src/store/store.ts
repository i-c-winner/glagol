import { configureStore } from '@reduxjs/toolkit'
import  roomSlice  from "./RoomSlice";
import conferenceSlice from "./conferenceSlice";
export default configureStore({
  reducer: {
    room: roomSlice,
    conference: conferenceSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
