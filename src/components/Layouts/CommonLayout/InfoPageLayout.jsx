import React from "react";
import InfoPage from "../../Pages/InfoPage/InfoPage";
import NavBar from "../CommonLayout/NavBar";
import Footer from "../CommonLayout/Footer";

const InfoPageLayout = () => {
    return (
        <div>
            <NavBar />
            <InfoPage />
            <Footer />
        </div>
    );
}

export default InfoPageLayout;