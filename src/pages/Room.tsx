import React, {useState} from 'react'
import Loginin from "../components/loginin/Loginin";
import {useSelector} from "react-redux";



function Room () {
  const conference = useSelector((state: any)=>state.conference)
  const [conferenceConnected, setConferenceConnected]=useState(conference.connected)
  console.log(conference)
  return (
    <div className='Room'>
      <p>This is Room Component</p>
      {!conferenceConnected?<Loginin />:null}
    </div>

  )
}

export default Room
