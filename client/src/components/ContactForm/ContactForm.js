import React from 'react'
import { Form, Col, Button, FormGroup, Label, Input } from 'react-bootstrap'
import { Formik, ErrorMessage } from 'formik'

let yup = require('yup')

function handleSubmit(values, action) {
    alert(JSON.stringify(values, null, 2))
}

const user = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    subject: yup.string().required(),
    message: yup.string().required()
})

export const ContactForm = () => (
    <div>
        <Formik
            validationSchema={user}
            onSubmit={(values, actions) => {
                handleSubmit(values, actions)
            }}
            initialValues={{
                name: '',
                email: '',
                subject: '',
                message: ''
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId='validationFormik01'>
                            <Form.Control
                                name='name'
                                placeholder='John Smith'
                                value={values.name}
                                onChange={handleChange}
                                isValid={touched.name && !errors.name}
                            />
                            <Form.Control.Feedback>Cool name!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId='validationFormik02'>
                            <Form.Control
                                name='email'
                                placeholder='jsmith@gmail.com'
                                value={values.email}
                                onChange={handleChange}
                                isValid={touched.email && !errors.email}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId='validationFormik03'>
                            <Form.Control 
                                name='subject'
                                placeholder='Subject'
                                value={values.subject}
                                onChange={handleChange}
                                isValid={touched.subject && !errors.subject}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId='validationFormik04'>
                            <Form.Control as='textarea'
                                type='textarea'
                                rows='4'
                                name='message'
                                placeholder='Write your message here'
                                value={values.message}
                                onChange={handleChange}
                                isValid={touched.message && !errors.message}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Button type='submit'>Submit</Button>
                    </Form.Row>
                </Form>
            )}

        </Formik>
    </div>
)

// https://react-bootstrap.github.io/components/forms/ 
// look at formik library for validation and submission

// https://blog.mailtrap.io/react-send-email/