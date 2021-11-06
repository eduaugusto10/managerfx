import React, { useContext, useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./style";
import AuthContext from "../../context/auth";
import api from "../../services/api";
import { format } from "date-fns";

function OrdersClose() {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState();
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
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
        apiOrdersClose();
    }, []);

    function Days(days) {
        console.log(days);
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
                        {item.operation_type > 0 ? "BUY" : "SELL"}
                    </Text>
                    <Text style={styles.title3}>Share</Text>
                    <Text style={styles.title2}>14,79%</Text>
                </View>
                <View style={styles.columncenter}>
                    <Text style={styles.title}>Dt Abertura</Text>
                    <Text style={styles.title2}>{Days(item.date_open)}</Text>
                    <Text style={styles.title3}>Dt Fechamento</Text>
                    <Text style={styles.title}>{Days(item.date_close)}</Text>
                    <Text style={styles.title3}>Lucro Fundo</Text>
                    <Text style={styles.title2}>$ {item.return_profit}</Text>
                </View>
                <View>
                    <Text style={styles.title}>Lucro Investidor</Text>
                    <Text style={styles.title}>$ {item.return_profit}</Text>
                    <Text style={styles.title3}>Tx Performance</Text>
                    <Text style={styles.title2}>$ 0,00</Text>
                    <Text style={styles.title3}>Tx Plataforma</Text>
                    <Text style={styles.title2}>$ 0,00</Text>
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
