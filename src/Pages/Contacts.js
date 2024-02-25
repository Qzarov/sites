import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'


export default class Contacts extends Component {
    render() {
        return (
            <Container style={{ width: '500px'}}>
                <h1 className='text-center'> Fill me </h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Email address </Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text>
                            We'll answer ASAP
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label> Create your's password </Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Tap me" />
                    </Form.Group>

                    <Button variant="primary" type="submit"> Submit </Button>

                </Form>
            </Container>
        )
    }
}