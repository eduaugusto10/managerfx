import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#FFF",
        paddingTop:20,
    },
    item: {
        //padding: 20,
        marginVertical: 8,
        //marginHorizontal: 16,
        borderWidth: 1,
        borderColor: "#245CA066",
        borderRadius: 7,
    },
    title: {
        fontSize: 12,
        textAlign: "center",
        color: "#245CA0",
    },
    buy: {
        fontSize: 12,
        textAlign: "center",
        color: "#00C900",
        fontWeight: "bold",
    },
    sell: {
        fontSize: 12,
        textAlign: "center",
        color: "#FF0000",
        fontWeight: "bold",
    },
    title3: {
        fontSize: 12,
        textAlign: "center",
        color: "#245CA0",
        marginTop: 8,
    },
    title2: {
        fontSize: 12,
        textAlign: "center",
        color: "#92A3B7",
    },
    card: {
        flexWrap: "wrap",
        flexDirection: "row",
        height: 88,
        marginTop: 15,
        marginLeft: 35,
        marginRight: 17,
    },
    columncenter: {
        marginRight: 15,
        marginLeft: 15,
    }
});
