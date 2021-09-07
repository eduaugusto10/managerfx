import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/AntDesign";
import styles from "./style";

function ForgotPassword({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Registre-se</Text>
            <View style={styles.containerInput}>
                <View style={styles.inputView}>
                    <Icons
                        //style={styles.searchIcon}
                        name="lock"
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
                    <Icons
                        //style={styles.searchIcon}
                        name="lock"
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
                    <Icons
                        //style={styles.searchIcon}
                        name="lock"
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
                <View style={styles.inputView}>
                    <Icons
                        //style={styles.searchIcon}
                        name="lock"
                        size={30}
                        color="#FFFFFF"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Nova Senha"
                        placeholderTextColor="#FFFFFF"
                        secureTextEntry={true}
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
                        placeholder="Confirmar Nova Senha"
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
                    <Text style={styles.textButton}>Alterar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ForgotPassword;
