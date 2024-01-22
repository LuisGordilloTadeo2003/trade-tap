import React from "react";
import InfoPage from "../../Pages/InfoPage/InfoPage";
import NavBar from "../CommonLayout/NavBar";
import Footer from "../CommonLayout/Footer";

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