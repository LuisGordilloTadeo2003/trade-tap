import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import RequestPage from "./Pages/RequestPage/RequestPage";
import ReservesPage from "./Pages/ReservesPage/ReservesPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

const MainContent = () => {
    return (
        <>
            <Routes>
                <Route element={<HomePage />} path="/"></Route>
                <Route element={<RequestPage />} path="/request"></Route>
                <Route element={<ReservesPage />} path="/reserves"></Route>
                <Route element={<ProfilePage />} path="/profile/worker"></Route>
                <Route element={<ProfilePage />} path="/profile/client"></Route>
            </Routes>
        </>
    );
}

export default MainContent;