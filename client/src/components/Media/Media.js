import React from 'react'
//import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import $ from 'jquery'
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons' 
import { SocialIcon } from 'react-social-icons'
import './index.css'
import InstaGrid from './InstaGrid'

//library.add(faFacebookSquare); 

class Media extends React.Component {
    render() {
        return (
            <div>
                <div id="media" />
                <Row>
                    <Col xs={12} md={6}>
                        <Row style={{marginLeft: 0, marginRight: 0}}>Contact Us</Row>
                        <Row style={{marginLeft: 0, marginRight: 0}}>
                            <SocialIcon url='https://www.facebook.com/'/>
                            <SocialIcon url='https://www.instagram.com/scootscribbledoodletest/'/>
                        </Row>
                        <Row style={{marginLeft: 0, marginRight: 0}}>
                            Contact Form
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        Facebook Widget goes here
                    </Col>
                </Row>
                <Row>
                    <InstaGrid account="scootscribbledoodletest" numberOfMediaElements={6} />
                </Row>
            </div>
        );
    }
}

export default Media;
