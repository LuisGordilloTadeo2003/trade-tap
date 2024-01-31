import React from "react";
import NavBar from "./NavBar";
import InfoPage from "../Pages/HomePage/HomePage";
import Footer from "./Footer";

const MainContent = () => {
    const path = window.location.pathname;

    /*
    const getPageComponent = () => {
        if (path.includes("request")) {
            return <RequestPage />;
        } else if (path.includes("reserves")) {
            return <ReservesPage />;
        } else if (path.includes("profile")) {
            return <ProfilePage />;
        } else if (path.includes("login")) {
            return <ProfilePage />;
        } else {
            return <InfoPage />;
        }
    };
    */

    return (
        <div className="justify-content-center align-items-center text-white">
            <div className="row mb-4">
                <NavBar />
            </div>
            <div className="row">
                {getPageComponent()}
            </div>
            <div className="row mt-4">
                <Footer />
            </div>
        </div>
    );
}

export default MainContent;