import React from 'react';
import './Home.css';
import { Video } from '../../components/Video/Video'
import { About } from '../../components/About/About'
import { Media } from '../../components/Media/Media';
import { ReviewModal } from '../../components/Reviews/ReviewModal';
//import Container from 'react-bootstrap/Container'

export const Home = () => (
    <React.Fragment>
        <Video />
        <ReviewModal />
        <About />
        <Media />
    </React.Fragment>
)