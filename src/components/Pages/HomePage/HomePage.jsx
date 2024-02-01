import React from "react";
import RankingTable from "./RankingTable";
import SixWorkers from "./SixWorkers";
import SearchBar from "./SearchBar";
import ProfessionsList from "./ProfessionsList";

const HomePage = () => {
    return (
        <div className="row d-flex justify-content-center">
            <SearchBar />
            <div className="d-flex col-12 justify-content-center mt-3">
                <ProfessionsList />
            </div>
            <div className="row mt-4">
                <RankingTable />
                <SixWorkers />
            </div>
        </div>
    );
}

export default HomePage;