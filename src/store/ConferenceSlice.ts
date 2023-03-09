import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const conferenceSlice = createSlice({
  name: 'conference',
  initialState: {
    loginUser: '',
    roomName: window.location.pathname.split('/')[1]
  },
  reducers: {
    changeLoginUser: (state, action) => {
      state.loginUser=action.payload.loginUser
    },
    changeRoomName: (state, action) => {
      state.roomName=action.payload.roomName
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeRoomName, changeLoginUser } = conferenceSlice.actions

export default conferenceSlice.reducer