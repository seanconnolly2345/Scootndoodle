import React from 'react'
import { Instagram } from './Instagram'
import { Facebook } from './Facebook'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

export const Media = () => (
    <Container>
        This will be the media section.
        <Instagram />
        <Facebook />
    </Container>
)