import React from "react";
import { View, Text, Dimensions } from "react-native";
import {
    LineChart,
} from "expo-chart-kit";
import styles from "./style";

export function AreaChartExample(props) {
    const length = props.data.length
    const screenWidth = Dimensions.get("window").width;
    const month = [
        "",
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
    ];

    function SumBalance(number) {
        let sum = 0;
        for (let i = 0; i <= number; i++) {
            sum = parseFloat(props.data.balances[i].sum) + sum;
        }
        return sum;
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{props.text}</Text>
            </View>
            <LineChart
                data={{
                    labels: [
                        props.data == 0
                            ? 0
                            : length-6<0 ? 0 : month[props.data.balances[length-6].month],
                            props.data == 0
                            ? 0
                            : length-5<0 ? 0 : month[props.data.balances[length-5].month],
                            props.data == 0
                            ? 0
                            : length-4<0 ? 0 : month[props.data.balances[length-4].month],
                            props.data == 0
                            ? 0
                            : length-3<0 ? 0 : month[props.data.balances[length-3].month],
                            props.data == 0
                            ? 0
                            : length-2<0 ? 0 : month[props.data.balances[length-2].month],
                            props.data == 0
                            ? 0
                            : length-1<0 ? 0 : month[props.data.balances[length-1].month],
                    ],
                    datasets: [
                        {
                            data: [
                                props.data == 0 ? 0 : SumBalance(length-6),
                                props.data == 0 ? 0 : SumBalance(length-5),
                                props.data == 0 ? 0 : SumBalance(length-4),
                                props.data == 0 ? 0 : SumBalance(length-3),
                                props.data == 0 ? 0 : SumBalance(length-2),
                                props.data == 0 ? 0 : SumBalance(length-1),
                            ],
                        },
                    ],
                }}
                width={Dimensions.get("window").width - 15} // from react-native
                height={220}
                chartConfig={{
                    backgroundColor: "#FFF",
                    backgroundGradientFrom: "#FFF",
                    backgroundGradientTo: "#FFF",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgb(36, 92, 160)`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: "#ddd",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    elevation: 1,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 10,
                }}
            />
        </View>
    );
}

export default AreaChartExample;
