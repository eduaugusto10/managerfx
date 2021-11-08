import React from "react";
import { View, Text, Dimensions } from "react-native";
import { BarChart } from "expo-chart-kit";
import styles from "./style";

export function BarsChart(props) {
    const screenWidth = Dimensions.get("window").width;
    const length = props.data.length;
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
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{props.text}</Text>
            </View>
            <BarChart
                data={{
                    labels: [
                        props.data == 0
                            ? 0
                            : month[props.data.balances[length - 6].month],
                        props.data == 0
                            ? 0
                            : month[props.data.balances[length - 5].month],
                        props.data == 0
                            ? 0
                            : month[props.data.balances[length - 4].month],
                        props.data == 0
                            ? 0
                            : month[props.data.balances[length - 3].month],
                        props.data == 0
                            ? 0
                            : month[props.data.balances[length - 2].month],
                        props.data == 0
                            ? 0
                            : month[props.data.balances[length - 1].month],
                    ],
                    datasets: [
                        {
                            data: [
                                props.data == 0
                                    ? 0
                                    : parseFloat(
                                          props.data.balances[length - 6].sum
                                      ),
                                props.data == 0
                                    ? 0
                                    : parseFloat(
                                          props.data.balances[length - 5].sum
                                      ),
                                props.data == 0
                                    ? 0
                                    : parseFloat(
                                          props.data.balances[length - 4].sum
                                      ),
                                props.data == 0
                                    ? 0
                                    : parseFloat(
                                          props.data.balances[length - 3].sum
                                      ),
                                props.data == 0
                                    ? 0
                                    : parseFloat(
                                          props.data.balances[length - 2].sum
                                      ),
                                props.data == 0
                                    ? 0
                                    : parseFloat(
                                          props.data.balances[length - 1].sum
                                      ),
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

export default BarsChart;
