import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/Ionicons";
import Home from "../pages/Home";

const Stack = createBottomTabNavigator();

function Router() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if(route.name === 'Home'){
                        iconName = focused ? 'home': 'home-outline';
                    }else if(route.name ==='Carteira'){
                        iconName = focused ? 'md-wallet': 'md-wallet-outline';
                    }else if(route.name ==='Evolução'){
                        iconName = focused ? 'analytics': 'analytics-outline';
                    }
                    return <Icon name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor:'gray'
            })}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Evolução" component={Home} />
            <Stack.Screen name="Carteira" component={Home} />
        </Stack.Navigator>
    );
}

export default Router;
