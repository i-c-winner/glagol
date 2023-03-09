import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  const [roomName, setRoomName]=React.useState(getRoomName)

  function getRoomName(){
console.log(window.location)
    return window.location.pathname.split('/')[1]
  }

  function changeRoomName(event: any) {
    setRoomName(event.target.value)
  }
  const inputRefLogin = React.createRef()

  return (
    <Box
      component="form"
      sx={ {
        '& > :not(style)': {m: 1, width: '25ch'},
      } }
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label='Login' variant="outlined"/>
      <TextField id="outlined-basic" label='Room' variant="outlined" onChange={changeRoomName} value={roomName} inputRef={ inputRefLogin }/>
    </Box>
  );
}