import React from "react";
import WorkerInfoTable from "./WorkersRankingTable";

const RankingTable = () => {
    return (
        <div className="col-md-4 d-flex justify-content-start border-start border-end border-color">
            <table>
                <thead>
                    <tr>
                        <th><h3>TOP 10 TRABAJADORES DEL MES</h3></th>
                    </tr>
                </thead>
                <tbody>
                    <WorkerInfoTable />
                </tbody>
            </table>
        </div>
    );
}

export default RankingTable;