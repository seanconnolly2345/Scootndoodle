import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const ContactForm = () => (
    <Form>
        <Form.Row>
            <Col>
                <Form.Control placeholder="First name" style={{marginBottom: '1rem'}}/>
            </Col>
            <Col>
                <Form.Control placeholder="Email" style={{marginBottom: '1rem'}}/>
            </Col>
        </Form.Row>
        <Form.Row>
            <Col>
                <Form.Control placeholder="Subject" style={{marginBottom: '1rem'}}/>
            </Col>
        </Form.Row>
        <Form.Row>
            <Form.Control as="textarea" rows="4" style={{marginBottom: '1rem'}}/>
        </Form.Row>
    </Form>
)