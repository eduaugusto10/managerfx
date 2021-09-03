import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home";
import Logo from "./pages/FirstLogo";
import Login from "./pages/Login"; 
import ForgotPassword from "./pages/ForgotPassword"; 
import Register from "./pages/Register"; 

const Stack = createNativeStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Home"
                    component={Home}                                        
                />
                <Stack.Screen name="Logo" component={Logo} options={{headerShown:false}}/>
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
                <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;
