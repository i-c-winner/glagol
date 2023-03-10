import React, { useState } from 'react'
import Loginin from "../components/loginin/Loginin";
import { useSelector } from "react-redux";
import Premeeting from "../components/premeeting/Premeeting";

function Room() {
  const conference = useSelector((state: any) => state.conference)
  const [ conferenceConnected, setConferenceConnected ] = useState(conference.connected)
  return (
    <div className='room'>
      <p>This is Room Component</p>
      { !conferenceConnected ? <Loginin/> : null }
      { !conferenceConnected ? <Premeeting/> : null }
    </div>
  )
}

export default Room
