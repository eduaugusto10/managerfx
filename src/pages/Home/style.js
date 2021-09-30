import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#FFF"
    },
    blueView: {
        backgroundColor: "#245CA0",
    },
    cards: {
        flex: 1,
        flexDirection: "row",
    },
    textWhite: {
        color: "#FFFFFF",
        textAlign: "center",
        paddingTop: 5,
    },
    textBlue: {
        color: "#245CA0",
        textAlign: "center",
        paddingTop: 5,
    },
    cardBlue: {
        flex: 1,
        backgroundColor: "#245CA0",
        margin: 6,
    },
    cardWhite: {
        flex: 1,
        backgroundColor: "#FFF",
        margin: 6,
        borderWidth: 2,
        borderColor: "#245CA066",
    },
    logo: {
        width: 144,
        height: 51,
    },
    containerLogo: {
        marginTop: 10,
    },
});
