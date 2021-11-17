import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./style";

import AuthContext from "../../context/auth";
import api from "../../services/api";

function Login({ navigation }) {
    const { signed, signIn, user, idMT5, idsMT5 } = useContext(AuthContext);
    const [entryBtn, setEntryBtn] = useState("Entrar");
    const [email, setEmail] = useState();
    const [emailText, setEmailText] = useState("Insira seu ID");
    const [password, setPassword] = useState();
    const [passwordText, setPasswordText] = useState("Insira sua senha");
    const [token, setToken] = useState();
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem("@token_managerfx", value);
        } catch (e) {
            // saving error
        }
    };

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem("@token_managerfx");
        } catch (e) {
            // error reading value
        }
    };
    async function handleSignInPress() {
        if (email.length === 0 || password.length === 0) {
        } else {
            try {
                setEntryBtn("Aguarde...");
                await api
                    .post("/sessions", {
                        email: email,
                        password: password,
                    })
                    .then(function (response) {
                        setToken(response.data.token);
                        idMT5(
                            response.data.user[0].id_metatrader,
                            response.data.user[0].first_name,
                            response.data.user[0].second_name,
                            response.data.user[0].email
                        );
                    });

                if (token !== null) {
                    storeData(token);
                    getData;
                    signIn();
                    //navigation.push("Home");
                }
            } catch (_err) {
                console.log(_err);
                setEmail("");
                setEmailText("ID ou senha inválida");
                setPassword("");
                setPasswordText("ID ou senha inválida");
                setEntryBtn("Entrar");
            }
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
                    <Icon
                        //style={styles.searchIcon}
                        name="user"
                        size={30}
                        color="#FFFFFF"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={emailText}
                        placeholderTextColor="#FFFFFF"
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                    />
                </View>
                <View style={styles.inputView}>
                    <Icon
                        //style={styles.searchIcon}
                        name="lock"
                        size={30}
                        color="#FFFFFF"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={passwordText}
                        placeholderTextColor="#FFFFFF"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(e) => setPassword(e)}
                    />
                </View>
                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => navigation.push("ForgotPassword")}
                >
                    <Text style={styles.textForgotPassword}>
                        Esqueci minha senha
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignInPress}
                >
                    <Text style={styles.textButton}>{entryBtn}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => navigation.push("Register")}
                >
                    <Text style={styles.textRegister}>Registre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;
