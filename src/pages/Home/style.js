import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
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
        fontSize:12,
    },
    textWhiteValue: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 26,
        fontWeight: "bold",
        padding: 15,
    },
    textBlue: {
        color: "#245CA0",
        textAlign: "center",
        paddingTop: 5,
        fontSize:12,
    },
    textBlueValue: {
        color: "#245CA0",
        textAlign: "center",
        fontSize: 26,
        fontWeight: "bold",
        padding: 15,
    },
    textComission: {
        color: "#FF0000",
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        padding: 15,
    },
    textGain: {
        color: "#2DFF3C",
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        padding: 15,
    },
    cardBlue: {
        flex: 1,
        backgroundColor: "#245CA0",
        margin: 6,
        borderRadius: 8,
    },
    cardWhite: {
        flex: 1,
        backgroundColor: "#FFF",
        margin: 6,
        borderWidth: 2,
        borderColor: "#245CA066",
        borderRadius: 8,
    },
    logo: {
        width: 144,
        height: 51,
    },
    containerLogo: {
        marginTop: 10,
    },
});
