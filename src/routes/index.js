import React, { useContext } from "react";

import AuthContext from "../context/auth";

import AuthRoutes from "./auth.router";
import AppRoutes from "./app.router";

export function Routes() {
    const { signed } = useContext(AuthContext);

    return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
