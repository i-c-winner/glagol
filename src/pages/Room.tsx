import React from 'react'
import Loginin from "../components/loginin/Loginin";

function Room () {
  return (
    <div className='Room'>
      <p>This is Room Component</p>
      {true?<Loginin />:null}
    </div>

  )
}

export default Room
