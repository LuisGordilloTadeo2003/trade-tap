import React from "react";
import WorkerInfoTable from "./WorkerInfoTable";

const InfoTable = () => {
    return (
        <div className="col-md-6 d-flex justify-content-center border-start border-end border-color">
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

export default InfoTable;