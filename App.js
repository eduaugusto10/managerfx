import React, { Fragment } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View,StatusBar  } from "react-native";
import Router from "./src/routes";
import { AuthProvider } from "./src/context/auth";
import { SafeAreaView } from "react-native";
export default function App() {
    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: "white" }} />
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1, backgroundColor: "#245CA0" }}>
                <NavigationContainer>
                    <AuthProvider>
                        <Router />
                    </AuthProvider>
                </NavigationContainer>
            </SafeAreaView>
        </>
    );
}
