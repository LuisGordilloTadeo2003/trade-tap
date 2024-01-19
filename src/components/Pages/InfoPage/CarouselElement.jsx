import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselElement = () => {
    return (
        <div className="container-fluid justify-content-center">
            <Carousel>
                <Carousel.Item className="container-fluid justify-content-center">
                    <img
                        src="/image1.jpg"
                        alt="Primer slide"
                        style={{ width: "100vw", height: "40vh" }}
                    />
                    <Carousel.Caption>
                        <h3>Primer slide</h3>
                        <p>Descripción del primer slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="/image2.jpg"
                        alt="Segundo slide"
                        style={{ width: "100vw", height: "40vh" }}
                    />
                    <Carousel.Caption>
                        <h3>Segundo slide</h3>
                        <p>Descripción del segundo slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Agrega más items según sea necesario */}
            </Carousel>
        </div>
    );
}

export default CarouselElement;