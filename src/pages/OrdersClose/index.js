import React, { useContext, useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./style";
import AuthContext from "../../context/auth";
import api from "../../services/api";
import { format } from "date-fns";

function OrdersClose() {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState();
    const [dataII, setDataII] = useState(undefined);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        async function apiOrdersClose() {
            try {
                await api.get("close/1163").then(function (response) {
                    setData(response.data.balance.data);
                    setDataII(response.data.close);
                    console.log(response.data.close);
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
    function Symbol(tickets) {
        console.log(tickets);
        for (let i = 0; i < data.length; i++) {
            if (tickets == dataII[i].order_id) {
                return dataII[i].symbol;
            }
        }
        return null;
    }
    function DateClose(tickets) {
        console.log(tickets);
        for (let i = 0; i < data.length; i++) {
            if (tickets == dataII[i].order_id) {
                
                return Days(dataII[i].date);
            }
        }
        return null;
    }
    function TypeOperation(tickets) {
        console.log(tickets);
        for (let i = 0; i < data.length; i++) {
            if (tickets == dataII[i].order_id) {
                return dataII[i].operation_type;
            }
        }
        return null;
    }
    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            <View style={styles.card}>
                <View>
                    <Text style={styles.title}>
                        {dataII != undefined ? Symbol(item.ticket) : null}
                    </Text>
                    <Text
                        style={
                            TypeOperation(item.ticket) > 0
                                ? styles.buy
                                : styles.sell
                        }
                    >
                        {TypeOperation(item.ticket) > 0 ? "BUY" : "SELL"}
                    </Text>
                    <Text style={styles.title3}>Share</Text>
                    <Text style={styles.title2}>
                        {(parseFloat(item.percentual) * 100).toFixed(2)}%
                    </Text>
                </View>
                <View style={styles.columncenter}>
                    <Text style={styles.title}>Dt Abertura</Text>
                    <Text style={styles.title2}>
                        {DateClose(item.ticket)}
                    </Text>
                    <Text style={styles.title3}>Dt Fechamento</Text>
                    <Text style={styles.title}>
                        {Days(item.date_operation)}
                    </Text>
                    <Text style={styles.title3}>Lucro Fundo</Text>
                    <Text style={styles.title2}>
                        ${" "}
                        {(
                            parseFloat(item.lucro) / parseFloat(item.percentual)
                        ).toFixed(2)}
                    </Text>
                </View>
                <View>
                    <Text style={styles.title}>Lucro Investidor</Text>
                    <Text style={item.lucro > 0 ? styles.buy : styles.sell}>
                        $ {item.lucro}
                    </Text>
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
