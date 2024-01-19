import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselElement = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 vh-50"
                    src="https://via.placeholder.com/800x400"
                    alt="Primer slide"
                />
                <Carousel.Caption>
                    <h3>Primer slide</h3>
                    <p>Descripción del primer slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 vh-50"
                    src="https://via.placeholder.com/800x400"
                    alt="Segundo slide"
                />
                <Carousel.Caption>
                    <h3>Segundo slide</h3>
                    <p>Descripción del segundo slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Agrega más items según sea necesario */}
        </Carousel>
    );
}

export default CarouselElement;