import React from 'react'
import { Instagram } from './Instagram'
import { Facebook } from './Facebook'
import Container from 'react-bootstrap/Container'

import './Media.css'

export const Media = () => (
    <Container className='media-container'>
        This will be the media section.
        <Instagram />
        <Facebook />
    </Container>
)