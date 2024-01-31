import React from "react";
import InfoPage from "../Pages/HomePage/HomePage";
import NavBar from "./NavBar";
import Footer from "./Footer";

const InfoPageLayout = () => {
    return (
        <div className="justify-content-center align-items-center text-white">
            <div className="row mb-4">
                <NavBar />
            </div>
            <div className="row">
                <InfoPage />
            </div>
            <div className="row mt-4">
                <Footer />
            </div>
        </div>
    );
}

export default InfoPageLayout;