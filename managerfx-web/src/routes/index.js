import React, { useContext } from "react";
import Home from "../page/Home";
import SignIn from "../page/SignIn";
import UserSignIn from "../page/UserSignIn";
import Login from "../page/Login";
import LandingPage from "../page/LandingPage";
import AuthContext from "../context/auth";
import Master from "../page/Master";
import Manager from "../page/Manager";

import { Route, Routes, BrowserRouter } from "react-router-dom";

const PrivateRoute = () => {
    const { signed, idsMT5, idAdm } = useContext(AuthContext);

    return signed ? <Home /> : <Login />;
};
const MasterRoute = () => {
    const { signed, idsMT5, idAdm } = useContext(AuthContext);

    return signed ? <Master /> : <Login />;
};

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/muser" element={<SignIn />} />
            <Route path="/user" element={<UserSignIn />} />
            <Route path="/home" element={<Home />} />
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/login" element={<PrivateRoute />} />
            <Route path="/admin" element={<MasterRoute />} />
            <Route path="/manager" element={<Manager />} />
            <Route path="*" element={() => <h1>Page not found</h1>} />
        </Routes>
    </BrowserRouter>
);

export default Router;
