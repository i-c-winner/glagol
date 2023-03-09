import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Room {
  loginUser: string,
  roomName: string,
}
const initialState= {
  loginUser: '',
    roomName: window.location.pathname.split('/')[1]
} as Room
const roomSlice = createSlice({
  name: 'room',
  initialState,
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
export const { changeRoomName, changeLoginUser } = roomSlice.actions

export default roomSlice.reducer