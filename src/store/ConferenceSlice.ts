import { createSlice } from "@reduxjs/toolkit";

const conferenceSlice = createSlice({
  name: 'conference',
  initialState: {
    loginUser: '',
    roomName: window.location.pathname.split('/')[1]
  },
  reducers: {
    changeLoginUser: (state, actyon) => {
      state.loginUser=actyon.payload.loginUser
    },
    changeRoomName: (state, actyon) => {
      state.roomName=actyon.payload.roonName
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeRoomName, changeLoginUser } = conferenceSlice.actions

export default conferenceSlice.reducer