import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageInitial from "./pages/PageInitial";
import Details from "./pages/Projects/Details";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageInitial />} />
                <Route path="/details" element={<Details />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
