import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./style";

function Register({ navigation }) {
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
                    />
                </View>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.push("Logo")}
                >
                    <Text style={styles.textButton}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Register;
