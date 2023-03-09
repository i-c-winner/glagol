import React, { createRef, useEffect } from 'react'
import Loginin from "../components/loginin/Loginin";

function StartPage () {
  const refRoom=React.createRef()
 function clickButton() {
   console.log('clcik')
 }
  return (
<Loginin />
  )
}

export default StartPage