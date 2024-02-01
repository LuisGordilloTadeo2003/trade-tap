import React from "react";

const ElementCard = ({ data }) => {
    return (
        <div>
            {
                data.map((item, index) =>
                    <div key={index} className="row d-flex mx-5 my-3" style={{ border: "2px solid #74c87a", borderRadius: "20px" }}>
                        <div className="col-1 d-flex align-items-center justify-content-center">
                            <img style={{ maxWidth: "100px", maxHeight: "100px" }} src="/Profile.png" alt="" />
                        </div>
                        <div className="col-7 px-4 align-self-center">
                            <h5 className="">{item.title}</h5>
                            <h6>{item.name}</h6>
                        </div>
                        <div className="col-4 px-1 d-flex justify-content-end">
                            <button className="my-1 mx-1" style={{ border: "none", borderRadius: "20px", backgroundColor: "#74c87a", minWidth: "70px" }} >
                                <img style={{ maxWidth: "50px", maxHeight: "50px" }} src="/Iconos/Icono-Tick.png" alt="" />
                            </button>
                            <button className="my-1 mx-1" style={{ border: "none", borderRadius: "20px", backgroundColor: "#F45252", minWidth: "70px" }} >
                                <img style={{ maxWidth: "70px", maxHeight: "60px" }} src="/Iconos/Icono-X.png" alt="" />
                            </button>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default ElementCard;