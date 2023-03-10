import React, {useState, useEffect} from "react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Room } from "../../store/RoomSlice";
import { changeConnected } from "../../store/conferenceSlice";
import { Link } from 'react-router-dom'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


function Loginin() {
  const dispatch = useDispatch()
  const state: Room = useSelector((state: any) => state.room)
  const {roomName} = state
  const [loginUser, setLoginUser]=useState(state.loginUser)
  const [url, setUrl]=useState('')

  function initApp(event: any) {
    event.preventDefault()
    dispatch(changeConnected())
    console.info(`Отправляем запрос на подключение к конференции с login: ${ loginUser } и roomName: ${ roomName }`)

  }
  function changeLoginUser (event: React.ChangeEvent<HTMLInputElement>) {
    setLoginUser(event.target.value)
  }
useEffect (()=>{
  setUrl(`/:${roomName}`)
},[roomName])


  return <div className="loginin">
    <Box
      onSubmit={initApp}
      component="form"
      sx={ {
        '& > :not(style)': {m: 1, width: '25ch'},
      } }
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label='Login' value={ loginUser } onChange={ changeLoginUser } variant="outlined"/>
    </Box>

      <Button variant="contained" onClick={ initApp } color='primary'><Link to={url}><Typography>Loginin</Typography></Link></Button>
  </div>
}

export default Loginin