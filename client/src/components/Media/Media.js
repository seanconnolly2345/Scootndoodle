import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import $ from 'jquery'
import './index.css'

import InstaGrid from './InstaGrid'

class Media extends React.Component {
    render() {
        return (
            <InstaGrid account="scootscribbledoodletest" numberOfMediaElements={9} />
        );
    }
}

export default Media;
