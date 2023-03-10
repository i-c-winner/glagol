import React, { useEffect, createRef, useState, ReactNode } from 'react'

function Premeeting() {
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
      const video = document.querySelector('video')
      if (video !== null) {
        video.srcObject = stream
        video.play()
      }
    })
  }, [ document.querySelector('video') ])

  return (
    <div className='premeeting'>
      <video className='premeeting_video'></video>
    </div>
  )
}

export default Premeeting