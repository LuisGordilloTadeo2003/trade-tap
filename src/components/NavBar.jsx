import React from "react";
import { Link } from "react-router-dom";

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
                <Link to="/login">
                    <button className="btn mx-3 color-button-general"
                        style={{ minWidth: '100px' }}>
                        <strong>Sign In</strong>
                    </button>
                </Link>
                <Link to="/register">
                    <button className="btn mx-3 color-button-general"
                        style={{ minWidth: '100px' }}>
                        <strong>Sign Up</strong>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
