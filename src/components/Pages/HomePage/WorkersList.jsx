import React from "react";
import Workers from "./Workers";

const WorkersList = () => {
    return (
        <div className="col-md-6 d-flex justify-content-center border-start border-end border-color">
            <table>
                <thead>
                    <tr>
                        <th><h3>TOP 10 TRABAJADORES DEL MES</h3></th>
                    </tr>
                </thead>
                <tbody>
                    <Workers />
                </tbody>
            </table>
        </div>
    );
}

export default WorkersList;