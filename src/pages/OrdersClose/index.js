import React, { useContext, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./style";
import AuthContext from "../../context/auth";
import api from "../../services/api";
import { format } from "date-fns";

function OrdersClose() {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState();
    const [selectedId, setSelectedId] = useState(null);

    async function apiOrdersClose() {
        try {
            await api.get("/operationsave").then(function (response) {
                setData(response.data);
                console.log(response.data);
            });
        } catch (_err) {
            console.log(_err);
        }
    }

    function Days(days) {
        let newDays = new Date(days);
        newDays = format(newDays, "yyyy.MM.dd");
        return newDays;
    }

    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            <View style={styles.card}>
                <View>
                    <Text style={styles.title}>{item.symbol}</Text>
                    <Text style={styles.title}>
                        {item.operation_type > 0 ? "Buy" : "Sell"}
                    </Text>
                    <Text style={styles.title}>Share</Text>
                    <Text style={styles.title}>14,79%</Text>
                </View>
                <View>
                    <Text style={styles.title}>Dt Abertura</Text>
                    <Text style={styles.title}>{Days(item.date_open)}</Text>
                    <Text style={styles.title}>Dt Fechamento</Text>
                    <Text style={styles.title}>{Days(item.date_close)}</Text>
                </View>
                <View>
                    <Text style={styles.title}>Tx Performance</Text>
                    <Text style={styles.title}>$ 0,00</Text>
                    <Text style={styles.title}>Tx Plataforma</Text>
                    <Text style={styles.title}>$ 0,00</Text>
                </View>
                <View>
                    <Text style={styles.title}>Lucro Gerente</Text>
                    <Text style={styles.title}>$ {item.return_profit}</Text>
                    <Text style={styles.title}>Lucro Investidor</Text>
                    <Text style={styles.title}>$ {item.return_profit}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                style={{ backgroundColor }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Text>Load</Text>
            <TouchableOpacity onPress={apiOrdersClose} style={styles.item}>
                <Text style={styles.title}>Carregar Itens</Text>
            </TouchableOpacity>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </View>
    );
}

export default OrdersClose;
