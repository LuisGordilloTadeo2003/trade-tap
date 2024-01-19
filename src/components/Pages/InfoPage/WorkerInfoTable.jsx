import React from "react";

const WorkerInfoTable = () => {
    const workers = [];

    for (let i = 0; i < 10; i++) {
        let worker = {
            id: i,
            nombre: "Luis",
            apellido1: "Gordillo",
            apellido2: "Tadeo",
            profesion: "Programador",
            valoracion: Math.floor(Math.random() * 5 + 1)
        }

        workers.push(worker);
    }

    workers.sort((a, b) => b.valoracion - a.valoracion);

    console.log(workers);

    const generarEstrellas = (valoracion) => {
        const estrellas = [];
        for (let j = 1; j <= valoracion; j++) {
            estrellas.push(<span key={j}>⭐</span>);
        }
        return estrellas;
    };
    return (
        <>
            {
                workers.map((worker) => {
                    return (
                        <tr key={worker.id}>
                            <td>
                                <div className="row d-flex align-items-end border-bottom border-dark">
                                    <p className="m-0 col-6"><strong>{worker.nombre + " " + worker.apellido1 + " " + worker.apellido2}</strong></p>
                                    <p className="m-0 col-6 small">{worker.profesion}</p>
                                    <p className="m-0 small">{generarEstrellas(worker.valoracion)}</p>
                                </div>
                            </td>
                        </tr>
                    )
                })
            }
        </>
    );
}

export default WorkerInfoTable;