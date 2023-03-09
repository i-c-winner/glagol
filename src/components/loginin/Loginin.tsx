import React from "react";
import BasicTextFields from "../../UI/BasicTextField";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Room } from "../../store/RoomSlice";
import { changeConnected } from "../../store/conferenceSlice";

function Loginin() {
  const dispatch=useDispatch()
  const state: Room = useSelector((state: any) => state.room)
  const {loginUser, roomName} = state

  function initApp() {
    dispatch(changeConnected())
    console.info(`Отправляем запрос на подключение к конференции с login: ${ loginUser } и roomName: ${ roomName }`)
  }

  return <div className="loginin">
    <BasicTextFields/>
    <Button variant="contained" onClick={ initApp } color='primary'><Typography>Loginin</Typography></Button>
  </div>
}

export default Loginin