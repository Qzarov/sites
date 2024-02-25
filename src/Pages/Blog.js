import React, { Component } from 'react'
import {Container, Col, Row, Card, ListGroup } from 'react-bootstrap'

import logo from '../Assets/logo.png'

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <h2 className='text-center mt-3 mb-3'>
                    Bored blog
                </h2>
                <Row>
                    <Col md="3">
                        <h5 className='text-center mt-3 mb-3'>Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Bitcoin</ListGroup.Item>
                                <ListGroup.Item>Ethereum</ListGroup.Item>
                                <ListGroup.Item>Toncoim</ListGroup.Item>
                                <ListGroup.Item>Solyana</ListGroup.Item>
                                <ListGroup.Item>NRT</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col md="9">
                        <div class="d-flex align-items-center">
                            <div className="media m-3">
                                <img 
                                    width={150}
                                    height={150}
                                    className='mr-3'
                                    src={logo}
                                />
                            </div>
                            <div className="media-body">
                                <h5>Blog post</h5>
                                <p> Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text</p>
                            </div> 
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}