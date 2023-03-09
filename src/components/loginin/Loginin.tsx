import React from "react";
import BasicTextFields from "../../UI/BasicTextField";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Conference } from "../../store/ConferenceSlice";

function Loginin() {
  const state: Conference = useSelector((state: any) => state.conference)
  const {loginUser, roomName} = state

  function initApp() {
    console.info(`Отправляем запрос на подключение к конференции с login: ${ loginUser } и roomName: ${ roomName }`)
  }

  return <div className="loginin">
    <BasicTextFields/>
    <Button variant="contained" onClick={ initApp } color='primary'><Typography>Loginin</Typography></Button>
  </div>
}

export default Loginin