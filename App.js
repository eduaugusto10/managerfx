import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/routes";
import { AuthProvider } from "./src/context/auth";
import { SafeAreaView } from "react-native";
export default function App() {
    return (
        <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
            <AuthProvider>
                <Router />
            </AuthProvider>
        </NavigationContainer>
        </SafeAreaView>

    );
}