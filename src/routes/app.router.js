import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";

const Stack = createNativeStackNavigator();

function Router() {
    return (
        
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        
    );
}

export default Router;
