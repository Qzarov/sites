import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import img1 from '../Assets/1.jpg'
import img2 from '../Assets/2.jpg'
import img3 from '../Assets/3.jpg'


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={img1}
                        alt="Power"
                    />
                    <Carousel.Caption>
                        <h3>Power</h3>
                        <p>Choose ur Power</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={img2}
                        alt="Courage"
                    />
                    <Carousel.Caption>
                        <h3>Courage</h3>
                        <p>Show ur Courage</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={img3}
                        alt="Destiny"
                    />
                    <Carousel.Caption>
                        <h3>Destiny</h3>
                        <p>Take ur Destiny</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}