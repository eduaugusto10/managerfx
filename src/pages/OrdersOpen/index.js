import React, { useContext, useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./style";
import AuthContext from "../../context/auth";
import api from "../../services/api";
import { format } from "date-fns";

function OrdersOpen() {
    const { user, idsMT5 } = useContext(AuthContext);
    const [data, setData] = useState();
    const [allOrders, setAllOrders] = useState(0);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        async function OrderOpen() {
            try {
                await api
                    .get(`operation/id_cliente=${idsMT5}&id_adm=1140`)
                    .then(function (response) {
                        setData(response.data.operation);
                        setAllOrders(response.data.allOrders);
                        
                    });
            } catch (_err) {
                console.log(_err);
            }
        }
        OrderOpen();
    }, []);

    function Days(days) {
        let newDays = new Date(days);
        newDays = format(newDays, "yyyy.MM.dd");
        return newDays;
    }
    function AllOrders(ticket) {
        for (let i = 0; i < allOrders.length; i++) {
            if (ticket == allOrders[i].ticket) {
                return (parseFloat(allOrders[i].percentual) * 100).toFixed(2);
            }
        }
        return 0;
    }

    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            <View style={styles.card}>
                <View>
                    <Text style={styles.title}>{item.symbol}</Text>
                    <Text
                        style={
                            item.operation_type > 0 ? styles.buy : styles.sell
                        }
                    >
                        {item.operation_type > 0 ? "BUY" : "SELL"}
                    </Text>
                </View>
                <View style={styles.columncenter}>
                    <Text style={styles.title}>Data Abertura</Text>
                    <Text style={styles.title2}>{Days(item.date_open)}</Text>
                    <Text style={styles.title3}>Share</Text>
                    <Text style={styles.title2}>
                        {allOrders.length > 0
                            ? AllOrders(item.ticket) + "%"
                            : 0.0 + "%"}
                    </Text>
                </View>
                <View>
                    <Text style={styles.title}>Lucro Investidor</Text>
                    <Text
                        style={
                            item.return_profit > 0 ? styles.buy : styles.sell
                        }
                    >
                        ${" "}
                        {(
                            (parseFloat(item.return_profit) *
                                parseFloat(AllOrders(item.ticket))) /
                            100
                        ).toFixed(2)}
                    </Text>
                    <Text style={styles.title3}>Lucro Fundo</Text>
                    <Text style={styles.title2}>$ {item.return_profit}</Text>
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
                keyExtractor={(item) => item.id.toString()}
                extraData={selectedId}
            />
        </View>
    );
}

export default OrdersOpen;
