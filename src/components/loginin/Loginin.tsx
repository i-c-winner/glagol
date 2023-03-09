import React from "react";
import BasicTextFields from "../../UI/BasicTextField";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

function Loginin(){
 return  <div className="loginin">
    <BasicTextFields />
    <Button variant="contained"  color='primary'><Typography>Loginin</Typography></Button>
  </div>
}

export default Loginin