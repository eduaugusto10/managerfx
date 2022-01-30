import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Icons from "react-native-vector-icons/AntDesign";
import api from "../../services/api";
import styles from "./style";

import AuthContext from "../../context/auth";

function Settings() {
    const { user, idMT5, idsMT5, lastName, name, email } =
        useContext(AuthContext);
    const [entryBTN, setEntryBtn] = useState("Confirmar");
    const [names, setNames] = useState(name);
    const [lastNames, setLastNames] = useState(lastName);
    const [emails, setEmails] = useState(email);

    async function handleChange() {
        setEntryBtn("Aguarde...");
        const data = new FormData();
        data.append("first_name", names);
        data.append("second_name", lastNames);
        data.append("email", emails);
        data.append("_method", "PUT");
        try {
            await api.put("/users/12", data).then(function (response) {
                idMT5(idsMT5, name, lastName, email);
                setEntryBtn("Salvo!");
            });
        } catch (_err) {
            setEntryBtn("Confirmar");
            //console.log(_err);
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
                        value={names}
                        onChangeText={(e) => setNames(e)}
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
                        value={lastNames}
                        onChangeText={(e) => setLastNames(e)}
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
                        value={emails}
                        onChangeText={(e) => setEmails(e)}
                    />
                </View>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={handleChange}>
                    <Text style={styles.textButton}>{entryBTN}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Settings;
