import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { changeLoginUser } from "../../store/RoomSlice";


export default function LoginsForm() {
  const dispatch = useDispatch()
  const [ loginUser, setLoginUser ] = useState('')


  function newLoginUser(event: React.ChangeEvent<HTMLInputElement>) {
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
      <TextField id="outlined-basic" label='Login' value={ loginUser } onChange={ newLoginUser } variant="outlined"/>
    </Box>
  );
}