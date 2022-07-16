import { Container } from '@mui/system';
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        style={{ width: "90%" }}
                        src="https://i.postimg.cc/28PNByD1/pat-taylor-12-V36-G17-Ib-Q-unsplash.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ width: "90%" }}
                        src="https://i.postimg.cc/BnYDCrmP/smartwatch-screen-digital-device.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </Container>
    );
};

export default Banner;