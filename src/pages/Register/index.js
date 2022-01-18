import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./style";
import api from "../../services/api";

function Register({ navigation }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [id, setID] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [confPassword, setConfPassword] = useState();
    const [answer, setAnswer] = useState("");
    const [question, setQuestion] = useState("");
    const [pamm, setPAMM] = useState("");
    const [entryBTN, setEntryBtn] = useState("Confirmar");

    async function handleSignInPress() {
        if (
            email.length === 0 ||
            password.length === 0 ||
            confPassword != password
        ) {
        } else {
            try {
                setEntryBtn("Aguarde...");
                await api
                    .post("/users", {
                        first_name: name,
                        second_name: lastName,
                        id_metatrader: id,
                        email: email,
                        question: question,
                        answer: answer,
                        password: password,
                        id_adm: pamm,
                        ativated: 0,
                        admin: 0,
                    })
                    .then((result) => {                        
                        navigation.push("Login");
                    });
            } catch (_err) {
                console.log(_err);
                setEmail("");
                setPassword("");
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
                        placeholder="Primeiro Nome"
                        placeholderTextColor="#FFFFFF"
                        value={name}
                        onChangeText={(e) => setName(e)}
                    />
                </View>
                <View style={styles.inputView}>
                    <Icon
                        //style={styles.searchIcon}
                        name="user"
                        size={30}
                        color="#FFFFFF"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Último Nome"
                        placeholderTextColor="#FFFFFF"
                        value={lastName}
                        onChangeText={(e) => setLastName(e)}
                    />
                </View>
                <View style={styles.inputView}>
                    <Icon
                        //style={styles.searchIcon}
                        name="user"
                        size={30}
                        color="#FFFFFF"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="ID"
                        placeholderTextColor="#FFFFFF"
                        value={id}
                        onChangeText={(e) => setID(e)}
                    />
                </View>
                <View style={styles.inputView}>
                    <Icon
                        //style={styles.searchIcon}
                        name="mail"
                        size={30}
                        color="#FFFFFF"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
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
                        placeholder="Senha"
                        placeholderTextColor="#FFFFFF"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(e) => setPassword(e)}
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
                        placeholder="Confirmar Senha"
                        placeholderTextColor="#FFFFFF"
                        secureTextEntry={true}
                        value={confPassword}
                        onChangeText={(e) => setConfPassword(e)}
                    />
                </View>
                <View style={styles.inputView}>
                    <Icon
                        //style={styles.searchIcon}
                        name="questioncircleo"
                        size={30}
                        color="#FFFFFF"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Pergunta"
                        placeholderTextColor="#FFFFFF"
                        secureTextEntry={true}
                        value={question}
                        onChangeText={(e) => setQuestion(e)}
                    />
                </View>
                <View style={styles.inputView}>
                    <Icon
                        //style={styles.searchIcon}
                        name="exclamationcircleo"
                        size={30}
                        color="#FFFFFF"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Resposta Secreta"
                        placeholderTextColor="#FFFFFF"
                        secureTextEntry={true}
                        value={answer}
                        onChangeText={(e) => setAnswer(e)}
                    />
                </View>
                <View style={styles.inputView}>
                    <Icon
                        //style={styles.searchIcon}
                        name="user"
                        size={30}
                        color="#FFFFFF"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Número conta PAMM"
                        placeholderTextColor="#FFFFFF"
                        value={pamm}
                        onChangeText={(e) => setPAMM(e)}
                    />
                </View>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleSignInPress()}
                >
                    <Text style={styles.textButton}>{entryBTN}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Register;
