import React, { createRef, useEffect } from 'react'
import BasicTextFields from "../UI/BasicTextField";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

function StartPage () {
 function clickButton() {
   console.log('clcik')
 }
  return (
<div className="form login-form">
  <BasicTextFields label='Логин'/>
  <BasicTextFields label='Комната' />
  <Button variant="contained" color="primary" onClick={clickButton} ><Typography>Подключиться</Typography></Button>
</div>

  )
}

export default StartPage