import React from "react";
import Profession from "./Profession";

const ProfessionsList = () => {
    let profesiones = [
        "jardinero",
        "electricista",
        "carpintero",
        "programador",
        "fontanero",
        "crupier",
        "dj",
    ]

    return (
        <table>
            {
                profesiones.map((profesion) => {
                    let icono = `/Iconos/Icono-${profesion}.png`;

                    console.log(icono);

                    return (
                        <td>
                            <tr>
                                <td className="d-flex justify-content-center" style={{ backgroundColor: "white" }}>
                                    <img style={{ maxWidth: "40px", maxHeight: "40px" }} src={icono} alt="" srcset="" />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3">
                                    <Profession key={profesion} profesion={profesion} />
                                </td>
                            </tr>
                        </td>
                    )
                })
            }
        </table>
    );
}

export default ProfessionsList;