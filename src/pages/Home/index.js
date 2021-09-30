import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

import AuthContext from "../../context/auth";
import LineChartExample from "../../components/Graph";

function Home() {
    const { user } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/logo_azul.png")}
                />
            </View>
            <View style={styles.cards}>
                <View style={styles.cardBlue}>
                    <Text style={styles.textWhite}>Balance</Text>
                    <Text
                        style={{
                            fontSize: 26,
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        $999999,99
                    </Text>
                </View>
                <View style={styles.cardBlue}>
                    <Text style={styles.textWhite}>Capital Líquido</Text>
                </View>
            </View>
            <View style={styles.cards}>
                <View style={styles.cardBlue}>
                    <Text style={styles.textWhite}>Lucro Líquido</Text>
                </View>
                <View style={styles.cardWhite}>
                    <Text style={styles.textBlue}>Valor Aplicado</Text>
                </View>
            </View>
            <View style={styles.cards}>
                <View style={styles.cardWhite}>
                    <Text style={styles.textBlue}>Ordens Abertas</Text>
                </View>
                <View style={styles.cardWhite}>
                    <Text style={styles.textBlue}>Custos e Comissões</Text>
                </View>
            </View>
            <LineChartExample />
        </View>
    );
}

export default Home;
