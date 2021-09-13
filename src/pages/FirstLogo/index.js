import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

function Logo() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../assets/logo_branco.png")}
            />
        </View>
    );
}

export default Logo;
