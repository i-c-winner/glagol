import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Conference {
  loginUser: string,
  roomName: string
}
const initialState= {
  loginUser: '',
    roomName: window.location.pathname.split('/')[1]
} as Conference
const conferenceSlice = createSlice({
  name: 'conference',
  initialState
,
  reducers: {
    changeLoginUser: (state, action:PayloadAction<string>) => {
      state.loginUser=action.payload
    },
    changeRoomName: (state, action:PayloadAction< string >) => {
      state.roomName=action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeRoomName, changeLoginUser } = conferenceSlice.actions
export type {Conference}
export default conferenceSlice.reducer