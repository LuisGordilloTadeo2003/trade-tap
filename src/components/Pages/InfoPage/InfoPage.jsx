import React from "react";
import CarouselElement from "./CarouselElement";
import InfoTable from "./InfoTable";
import { Row } from "react-bootstrap";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const InfoPage = () => {
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-9">
                <CarouselElement />
            </div>
            <div className="row mt-4">
                <LeftColumn />
                <InfoTable />
                <RightColumn />
            </div>
        </div>
    );
}

export default InfoPage;