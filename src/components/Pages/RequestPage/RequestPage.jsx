import React from "react";
import ElementCard from "../../ElementCard";

const RequestPage = () => {
    let array = [
        {
            title: '2 sillas',
            name: 'Luis',
            imgSrc: '/assets/img/profile.jpg'
        },
        {
            title: 'Cambiar tuberias',
            name: 'Fatima',
            imgSrc: '/assets/img/profile.jpg'
        },
        {
            title: 'Programar Web',
            name: 'Marcos',
            imgSrc: '/assets/img/profile.jpg'
        },
    ]

    return (
        <div>
            <h1>Request Page</h1>
            <ElementCard array={array} />
        </div>
    );
}

export default RequestPage;