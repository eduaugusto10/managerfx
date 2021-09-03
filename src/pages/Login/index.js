import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/AntDesign";
import styles from "./style";

function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <View style={styles.containerInput}>
                <View style={styles.inputView}>
                    <Icon
                        //style={styles.searchIcon}
                        name="person-outline"
                        size={30}
                        color="#FFFFFF"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="ID ou CPF"
                        placeholderTextColor="#FFFFFF"
                    />
                </View>
                <View style={styles.inputView}>
                    <Icons
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
                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => navigation.push("Home")}
                >
                    <Text style={styles.textRegister}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.push("Logo")}
                >
                    <Text style={styles.textButton}>Entrar</Text>
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
