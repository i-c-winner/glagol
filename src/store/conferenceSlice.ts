import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Confernce {
  connected: Boolean
}

const initialState: Confernce = {
  connected: false
}

const conferenceSlice= createSlice({
  name: 'conference',
  initialState,
  reducers: {
    changeConnected: (state) => {
      debugger
      state.connected= !state.connected
    }
  }
})

export const {changeConnected}=conferenceSlice.actions

export default conferenceSlice.reducer