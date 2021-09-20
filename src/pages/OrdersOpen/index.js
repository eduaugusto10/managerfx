import React, { useContext } from "react";
import { View, Text } from "react-native";
import styles from "./style";
import AuthContext from "../../context/auth";

function OrdersOpen() {
    const { user } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text>Olá, {user.name}</Text>

        </View>
    );
}

export default OrdersOpen;