import React from "react";
import Profession from "./Profession";

const ProfessionsList = () => {
    let profesiones = [
        "jardinero",
        "electricista",
        "carpintero",
        "programador",
        "fontanero",
        "butanero",
        "dj",
    ]

    return (
        <table>
            {
                profesiones.map((profesion) => {
                    return (
                        <td>
                            <tr style={{ maxWidth: "20px", maxHeight: "20px" }}>
                                <td style={{ backgroundColor: "white", borderRadius: "50%" }}>
                                    I
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