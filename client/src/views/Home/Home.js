import React from 'react';
import './Home.css';
import { Video } from '../../components/Video/Video'
import { About } from '../../components/About/About'
import { Media } from '../../components/Media/Media';
import { ReviewSlider } from '../../components/Reviews/ReviewSlider';
//import Container from 'react-bootstrap/Container'

export const Home = () => (
    <React.Fragment>
        <Video />
        <ReviewSlider />
        <About />
        <Media />
    </React.Fragment>
)

// https://github.com/reactjs/react-modal