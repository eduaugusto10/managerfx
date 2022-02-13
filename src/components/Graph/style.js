import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        alignContent: "center",
        alignItems: "center",
    },
    card: {
        borderColor: "#92A3B7",        
        borderBottomWidth: 2,
    },
    title: {
        fontSize: 12,
        textAlign: "center",
        color: "#245CA0",
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: "bold",
    },
    buttons:{
        flexDirection:"row",
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between"
    }
});
