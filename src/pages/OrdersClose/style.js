import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    item: {
        //padding: 20,
        marginVertical: 8,
        //marginHorizontal: 16,
        borderWidth: 1,
        borderColor: "#d6d6d6",
        borderRadius:7,
    },
    title: {
        fontSize: 12,
        textAlign: "center"
    },
    card: {
        flexWrap: "wrap",
        flexDirection: "row",
    },
});
