import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./style";
import AuthContext from "../../context/auth";
import api from "../../services/api";
import { format } from "date-fns";

function Extract() {
    const { user, idsMT5 } = useContext(AuthContext);
    const [data, setData] = useState()
    const [selectedId, setSelectedId] = useState(null);
    useEffect(() => {
        async function AllDeposits() {
            try {
                await api.get(`/deposit/${idsMT5}`).then(function (response) {                                       
                    setData(response.data);
                    return response.data;
                });
            } catch (_err) {
                //console.log(_err);
            }
        }
        AllDeposits();
    }, []);

    function Days(days) {
        let newDays = new Date(days);
        newDays = format(newDays, "yyyy.MM.dd");
        return newDays;
    }

    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            <View style={styles.card}>
                <View>                    
                    <Text style={styles.title}>  {item.return_profit > 0
                                ? "Depósito"
                                : "Retirada"}
                                </Text>
                </View>
                <View style={styles.columncenter}>
                    <Text style={styles.title2}>
                        {data == 0 ? "1970.01.01" : Days(item.date)}
                    </Text>
                </View>
                <View style={styles.columncenter}>                    
                    <Text
                        style={
                            item.return_profit > 0
                                ? styles.buy
                                : styles.sell
                        }
                    >
                        $ {parseFloat(item.return_profit).toFixed(2)}
                    </Text>
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

export default Extract;
