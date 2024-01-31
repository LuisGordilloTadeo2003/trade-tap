import React from "react";
import Profession from "./Profession";
import ProfessionIcon from "./ProfessionIcon";

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
                        <td style={{ minWidth: "100px", textAlign: "center" }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <ProfessionIcon key={profesion} icono={icono} />
                                <Profession key={profesion} profesion={profesion} />
                            </div>
                        </td>

                    )
                })
            }
        </table>
    );
}

export default ProfessionsList;