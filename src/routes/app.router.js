import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/AntDesign";
import Home from "../pages/Home";

const Stack = createBottomTabNavigator();

function Router() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if(route.name === 'Home'){
                        iconName = focused ? 'home': 'home';
                    }else if(route.name ==='Evolução'){
                        iconName = focused ? 'barschart': 'barschart';
                    }else if(route.name ==='Carteira'){
                        iconName = focused ? 'wallet': 'wallet';
                    }else if(route.name ==='Perfil'){
                        iconName = focused ? 'user': 'user';
                    }
                    return <Icon name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor:'#FFFFFF',
                tabBarActiveBackgroundColor:'#245CA0',
                tabBarInactiveBackgroundColor:'#245CA0'
            })}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Evolução" component={Home} />
            <Stack.Screen name="Carteira" component={Home} />
            <Stack.Screen name="Perfil" component={Home} />
        </Stack.Navigator>
    );
}

export default Router;
