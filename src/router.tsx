import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageInitial from "./pages/PageInitial";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageInitial />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
