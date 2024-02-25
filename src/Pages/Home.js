import React, { Component } from 'react'
import {Container, CardGroup, Card, Button } from 'react-bootstrap'

import CarouselBox from '../Components/CarouselBox'

export default class Home extends Component {
    render() {
        return (
            <div>
                Well cum, its Home!
                <CarouselBox />
                <Container>
                    <h2 className='text-center m-4'> Our team</h2>
                    <CardGroup className='m-4'>
                        <Card bg="light" border="primary">
                            <Card.Img 
                                variant="primary"
                                src="https://robots.net/wp-content/uploads/2023/11/what-is-encrypted-digital-currency-1699796290.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Homies</Card.Title>
                                <Card.Text> The best homies ever </Card.Text>
                                <Button variant="primary"> About </Button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Title>Partners</Card.Title>
                                <Card.Text> The best partners ever </Card.Text>
                                <Button variant="primary"> About </Button>
                            </Card.Body>
                            <Card.Img 
                                variant="bottom"
                                src="https://www.graffiks.ru/wp-content/uploads/2021/12/Screenshot_95.png"
                            />
                        </Card>

                        <Card>
                            <Card.Img 
                                variant="top"
                                src="https://www.block-chain24.com/sites/default/files/styles/full_bg/public/img/us-bank-jpmorgan-korrigiert-langfristiges-bitcoin-kursziel-auf-130.000-coin-update.png?itok=ALPvOWC1"
                            />
                            <Card.Body>
                                <Card.Title>Jedies</Card.Title>
                                <Card.Text> The best jedies ever </Card.Text>
                                <Button variant="primary"> About </Button>
                            </Card.Body>
                        </Card>

                        <Card bg="light" border="primary">
                            <Card.Body>
                                <Card.Title>Devs</Card.Title>
                                <Card.Text> The best devs ever </Card.Text>
                                <Button variant="primary"> About </Button>
                            </Card.Body>
                            <Card.Img 
                                variant="buttom"
                                src="https://www.block-chain24.com/sites/default/files/styles/full_bg/public/img/metamask_nigeria_moonpay.jpg?itok=Nyw_Hbol"
                            />
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        )
    }
}