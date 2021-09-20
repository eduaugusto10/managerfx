import React, { useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text } from "react-native";
import styles from "./style";
import OrdersClose from "../OrdersClose";
import OrdersOpen from "../OrdersOpen";
import Extract from "../BankStatement";

//import AuthContext from "../../context/auth";
const TabTop = createMaterialTopTabNavigator();

function Wallet() {
    return (
        <TabTop.Navigator>
            <TabTop.Screen name="Ordens Abertas" component={OrdersOpen} />
            <TabTop.Screen name="Ordens Fechadas" component={OrdersClose} />
            <TabTop.Screen name="Extrato" component={Extract} />
        </TabTop.Navigator>
    );
}

export default Wallet;
