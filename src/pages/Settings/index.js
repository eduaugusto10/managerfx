import React, { useContext } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Icons from "react-native-vector-icons/AntDesign";

import styles from "./style";

import AuthContext from "../../context/auth";

function Home() {
    const { user } = useContext(AuthContext);
    return (
        <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Image
                style={styles.logo}
                source={require("../../assets/logo_branco.png")}
            />
        </View>
        <View style={styles.containerInput}>
            <View style={styles.inputView}>
                <Icons
                    //style={styles.searchIcon}
                    name="edit"
                    size={30}
                    color="#FFFFFF"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Primeiro Nome"
                    placeholderTextColor="#FFFFFF"
                />
            </View>
            <View style={styles.inputView}>
                <Icons
                    //style={styles.searchIcon}
                    name="edit"
                    size={30}
                    color="#FFFFFF"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Último Nome"
                    placeholderTextColor="#FFFFFF"
                />
            </View>
            <View style={styles.inputView}>
                <Icons
                    //style={styles.searchIcon}
                    name="edit"
                    size={30}
                    color="#FFFFFF"
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#FFFFFF"
                />
            </View>
        </View>
        <View style={styles.buttonView}>
            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.textButton}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}

export default Home;
