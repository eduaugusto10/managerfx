import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import AuthContext from "../../context/auth";

function Extract() {
    const { user } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
                <View style={styles.card}>
                    <View>
                        <Text style={styles.title}>Saque</Text>
                    </View>
                    <View style={styles.columncenter}>
                        <Text style={styles.title}>Dt Abertura</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Lucro Investidor</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <View style={styles.card}>
                    <View>
                        <Text style={styles.title}>Depósito</Text>
                    </View>
                    <View style={styles.columncenter}>
                        <Text style={styles.title}>Dt Abertura</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Lucro Investidor</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <View style={styles.card}>
                    <View>
                        <Text style={styles.title}>Taxa de performance</Text>
                    </View>
                    <View style={styles.columncenter}>
                        <Text style={styles.title}>Dt Abertura</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Lucro Investidor</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <View style={styles.card}>
                    <View>
                        <Text style={styles.title}>Taxa de plataforma</Text>
                    </View>
                    <View style={styles.columncenter}>
                        <Text style={styles.title}>Dt Abertura</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Lucro Investidor</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Extract;
