import React from "react";
import BasicTextFields from "../../UI/BasicTextField";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import {useSelector } from "react-redux";

function Loginin(){
  function initApp() {

  }
 return  <div className="loginin">
    <BasicTextFields />
    <Button variant="contained"  onClick={initApp} color='primary'><Typography>Loginin</Typography></Button>
  </div>
}

export default Loginin