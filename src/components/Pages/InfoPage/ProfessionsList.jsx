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
        "cocinero",
        "jamonero",
        "soldador",
        "mecanico"
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
                                <td className="d-flex justify-content-center">
                                    <img style={{ maxWidth: "35px", maxHeight: "35px" }} src={icono} alt="" srcset="" />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 pt-1">
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