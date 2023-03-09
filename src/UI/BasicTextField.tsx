import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeLoginUser, changeRoomName } from "../store/ConferenceSlice";


export default function BasicTextFields() {
  const selector = useSelector((state: any) => state.conference)
  const dispatch = useDispatch()
  const [ roomName, setRoomName ] = useState(selector.roomName)
  const [loginUser, setLoginUser]= useState('')

    function newRoomName(event:  React.ChangeEvent<HTMLInputElement>) {
    setRoomName(event.target.value)
    dispatch(changeRoomName(event.target.value))
  }
  function newLoginUser(event:  React.ChangeEvent<HTMLInputElement>) {
    setLoginUser(event.target.value)
    dispatch(changeLoginUser(event.target.value))
  }

  return (
    <Box
      component="form"
      sx={ {
        '& > :not(style)': {m: 1, width: '25ch'},
      } }
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label='Login' value={loginUser} onChange={newLoginUser} variant="outlined"/>
      <TextField id="outlined-basic" label='Room' variant="outlined" onChange={ newRoomName } value={ roomName }
      />
    </Box>
  );
}