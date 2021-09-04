import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/routes";
import { AuthProvider } from "./src/context/auth";

export default function App() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Router />
            </AuthProvider>
        </NavigationContainer>
    );
}