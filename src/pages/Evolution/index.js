import React, { useContext } from "react";
import { View, Text } from "react-native";
import styles from "./style";

import AuthContext from "../../context/auth";
import LineChartExample from "../../components/Graph";

function Evolution() {
    const { user } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text>Olá, {user.name}</Text>

        </View>
    );
}

export default Evolution;
