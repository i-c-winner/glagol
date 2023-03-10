import React from 'react'
import Loginin from "../components/loginin/Loginin";
import { useSelector } from "react-redux";
import Premeeting from "../components/premeeting/Premeeting";

function Room() {
  const conferenceConnected = useSelector((state: any) => state.conference.connected)
  return (
    <div className='room'>
      <p>This is Room Component</p>
      {/*this will be conferenceConnecte*/}
      { true? <Loginin/> : null }
      { true ? <Premeeting/> : null }
    </div>
  )
}

export default Room
