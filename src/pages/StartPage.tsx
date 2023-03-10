import React, { createRef, useEffect } from 'react'
import Loginin from "../components/loginin/Loginin";

function StartPage () {
  const refRoom=React.createRef()
 function clickButton() {
 }
  return (
    <div className='startPage'>
      <p>this is startPage Component</p>
      <Loginin />
    </div>

  )
}

export default StartPage