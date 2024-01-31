import React from "react";
import InfoTable from "./Table/InfoTable";
import SixWorkers from "./SixWorkers/SixWorkers";
import SearchBar from "./SearchBar/SearchBar";
import ProfessionsList from "./SearchBar/ProfessionsList";

const InfoPage = () => {
    return (
        <div className="row d-flex justify-content-center">
            <SearchBar />
            <div className="d-flex col-12 justify-content-center mt-3">
                <ProfessionsList />
            </div>
            <div className="row mt-4">
                <InfoTable />
                <SixWorkers />
            </div>
        </div>
    );
}

export default InfoPage;