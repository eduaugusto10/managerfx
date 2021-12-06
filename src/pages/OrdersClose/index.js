import React, { useContext, useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./style";
import AuthContext from "../../context/auth";
import api from "../../services/api";
import { format } from "date-fns";

function OrdersClose() {
    const { user, idsMT5 } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [dataII, setDataII] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function apiOrdersClose() {
            try {
                await api
                    .get(`close/${idsMT5}&page=${page}`)
                    .then(function (response) {
                        setData(response.data.balance.data);
                        setDataII(response.data.close);
                        setPage(page + 1);
                        setLoading(false);
                    });
            } catch (_err) {
                console.log(_err);
            }
        }
        apiOrdersClose();
    }, []);

    async function loadOrders() {
        if (loading === true) return;
        console.log("Passou por aqui!");
        setLoading(true);
        try {
            await api
                .get(`close/${idsMT5}&page=${page}`)
                .then(function (response) {
                    setData([...data, ...response.data.balance.data]);
                    setDataII([...dataII, ...response.data.close]);
                    setPage(page + 1);
                    setLoading(false);
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

    function DateClose(tickets) {
        for (let i = 0; i < data.length; i++) {
            if (tickets == data[i].ticket) {
                return Days(data[i].date_operation);
            }
        }
        return null;
    }
    function Share(tickets) {
        for (let i = 0; i < data.length; i++) {
            if (tickets == data[i].ticket) {
                return data[i].percentual;
            }
        }
        return null;
    }
    function ProfitFund(tickets) {
        for (let i = 0; i < data.length; i++) {
            if (tickets == data[i].ticket) {
                return (
                    parseFloat(data[i].lucro) / parseFloat(data[i].percentual)
                ).toFixed(2);
            }
        }
        return null;
    }
    function InvestProfit(tickets) {
        for (let i = 0; i < data.length; i++) {
            if (tickets == data[i].ticket) {
                return parseFloat(data[i].lucro).toFixed(2);
            }
        }
        return null;
    }

    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            <View style={styles.card}>
                <View>
                    <Text style={styles.title}>
                        {dataII != 0 ? item.symbol : null}
                    </Text>
                    <Text
                        style={
                            item.operation_type > 0 ? styles.buy : styles.sell
                        }
                    >
                        {item.operation_type > 0 ? "BUY" : "SELL"}
                    </Text>
                    <Text style={styles.title3}>Share</Text>
                    <Text style={styles.title2}>
                        {(parseFloat(Share(item.order_id)) * 100).toFixed(2)}%
                    </Text>
                </View>
                <View style={styles.columncenter}>
                    <Text style={styles.title}>Dt Abertura</Text>
                    <Text style={styles.title2}>
                        {dataII == 0 ? "1970.01.01" : Days(item.date)}
                    </Text>
                    <Text style={styles.title3}>Dt Fechamento</Text>
                    <Text style={styles.title}>{DateClose(item.order_id)}</Text>
                    <Text style={styles.title3}>Lucro Fundo</Text>
                    <Text style={styles.title2}>
                        {ProfitFund(item.order_id)}
                    </Text>
                </View>
                <View style={styles.columncenter}>
                    <Text style={styles.title}>Lucro Investidor</Text>
                    <Text
                        style={
                            InvestProfit(item.order_id) > 0
                                ? styles.buy
                                : styles.sell
                        }
                    >
                        $ {InvestProfit(item.order_id)}
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
                data={dataII}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                extraData={selectedId}
                onEndReached={() => loadOrders()}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
}

export default OrdersClose;
