'use strict'

import React from 'react'
import Demo from '../../assets/demo.mov'

export const Video = () => (
    <video id='background-video' loop autoPlay muted>
        <source src={Demo} type="video/mp4" />
        <source src={Demo} type="video/ogg" />
        Your browswer does not support this video.
    </video>

)