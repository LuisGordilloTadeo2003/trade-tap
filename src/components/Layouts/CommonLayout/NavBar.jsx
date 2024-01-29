import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="row p-3 custom-bg-color border-bottom border-color">
            <div className="col-2 px-4">
                <img src="/logoTradeTap.jpg"
                    alt="Logo"
                    className="img-fluid"
                    style={{ maxWidth: '60px', maxHeight: '60px' }}
                />
            </div>

            <div className="col-6">
            </div>

            <div className="col-4 d-flex justify-content-end align-items-center">
                <button className="btn mx-3 color-button-general"
                    style={{ minWidth: '100px' }}>
                    <strong>Sign In</strong>
                </button>
                <button className="btn mx-3 color-button-general"
                    style={{ minWidth: '100px' }}>
                    <strong>Sign Up</strong>
                </button>
            </div>
        </div>
    );
};

export default NavBar;
