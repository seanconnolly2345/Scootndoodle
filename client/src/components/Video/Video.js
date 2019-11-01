'use strict'

import React from 'react'
import Demo from '../../assets/demo.mov'
import './Video.css'

export const Video = () => (
    <div className='video-container'>
        <video id='background-video' loop autoPlay muted>
            <source src={Demo} type="video/mp4" />
            <source src={Demo} type="video/ogg" />
            Your browswer does not support this video.
        </video>
    </div>
)