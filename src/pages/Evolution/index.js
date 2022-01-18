import React, { useContext, useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./style";
import api from "../../services/api";
import AuthContext from "../../context/auth";
import LineChartExample from "../../components/Graph";
import BarChart from "../../components/BarChart";

function Evolution() {
    const { user, idsMT5 } = useContext(AuthContext);
    const [profitPerMonth, setProfitPerMonth] = useState(0);
    useEffect(() => {
        async function ProfitPerMonth() {
            try {
                await api.get(`/month/${idsMT5}`).then(function (response) {
                    setProfitPerMonth(response.data);
                    return response.data;
                });
            } catch (_err) {
                //console.log(_err);
            }
        }
        ProfitPerMonth();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <LineChartExample
                    text={"GANHO ACUMULADO"}
                    data={profitPerMonth}
                />
            </View>
            <View>
                <BarChart text={"GANHO MENSAL"} data={profitPerMonth}/>
            </View>
        </View>
    );
}

export default Evolution;
