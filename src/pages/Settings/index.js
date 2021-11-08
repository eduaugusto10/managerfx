import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Icons from "react-native-vector-icons/AntDesign";

import styles from "./style";

import AuthContext from "../../context/auth";

function Home() {
    const [entryBTN, setEntryBtn] = useState("Confirmar");
    const { user, idMT5, idsMT5, lastName, name, email } =
        useContext(AuthContext);

    async function handleChange() {
        try {
            setEntryBtn("Aguarde...");
            await api.post("/users", {
                first_name: name,
                second_name: lastName,
                email: email,
            });
            idMT5(idsMT5, name, lastName, email);
        } catch (_err) {
            setEntryBtn("Confirmar");
        }
    }
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
                        value={name}
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
                        value={lastName}
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
                        value={email}
                    />
                </View>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>{entryBTN}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Home;
