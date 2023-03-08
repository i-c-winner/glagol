import React, { createRef, useEffect } from 'react'
import BasicTextFields from "../UI/BasicTextField";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

function StartPage () {
  const refRoom=React.createRef()
 function clickButton() {
   console.log('clcik')
 }
  return (
<div className="form login-form">
  <BasicTextFields label='Login'/>
  <Button variant="contained" color="primary" onClick={clickButton} ><Typography>Подключиться</Typography></Button>
</div>

  )
}

export default StartPage