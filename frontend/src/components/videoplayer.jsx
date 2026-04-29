import React from 'react'

export const Videoplayer = ({ src }) => {
  return (
    <div className='video-container'>
      <div className='video-overlay'>
        <video 
          src={src}
          className='video-player'
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  )
}
