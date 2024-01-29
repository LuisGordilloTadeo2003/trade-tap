import React from "react";
import InfoTable from "./InfoTable";
import RightColumn from "./RightColumn";
import SearchBar from "./SearchBar";
import ProfessionsList from "./ProfessionsList";

const InfoPage = () => {
    return (
        <div className="row d-flex justify-content-center">
            <div className="d-flex col-12 justify-content-center">
                <SearchBar />
            </div>
            <div className="d-flex col-12 justify-content-center mt-3">
                <ProfessionsList />
            </div>
            <div className="row mt-4">
                <InfoTable />
                <RightColumn />
            </div>
        </div>
    );
}

export default InfoPage;