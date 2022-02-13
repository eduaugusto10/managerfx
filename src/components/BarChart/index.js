import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { BarChart } from "expo-chart-kit";
import styles from "./style";

export function BarsChart(props) {
    const screenWidth = Dimensions.get("window").width;
    const length = props.data.length;
    const [variable, setVariable] = useState(0);
    const onPressPlus = () =>
        variable == length - 6
            ? length - 1
            : setVariable((prevCount) => prevCount + 1);
    const onPressMinus = () =>
        variable == 0 ? 0 : setVariable((prevCount) => prevCount - 1);
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
        let sum = parseFloat(props.data.deposits[0].sum);
        let lastSum = parseFloat(props.data.deposits[0].sum);
        let finalSum = 0;
        for (let i = 0; i < number; i++) {
            sum = parseFloat(props.data.balances[i + 1].sum) + sum;
            lastSum = parseFloat(props.data.balances[i].sum) + lastSum;
        }
        finalSum = (sum / lastSum - 1) * 100;
        return finalSum;
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{props.text}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={onPressPlus}>
                    <Text style={styles.title}>{" << "}</Text>
                </TouchableOpacity>
                <Text style={styles.title}>
                    {props.data.balances == undefined
                        ? "Carregando"
                        : props.data.balances[length - 1 - variable].year}
                </Text>
                <TouchableOpacity onPress={onPressMinus}>
                    <Text style={styles.title}>{" >> "}</Text>
                </TouchableOpacity>
            </View>
            <BarChart
                data={{
                    labels: [
                        props.data == 0
                            ? 0
                            : length - 6 - variable < 0
                            ? 0
                            : month[
                                  props.data.balances[length - 6 - variable]
                                      .month
                              ],
                        props.data == 0
                            ? 0
                            : length - 5 - variable < 0
                            ? 0
                            : month[
                                  props.data.balances[length - 5 - variable]
                                      .month
                              ],
                        props.data == 0
                            ? 0
                            : length - 4 - variable < 0
                            ? 0
                            : month[
                                  props.data.balances[length - 4 - variable]
                                      .month
                              ],
                        props.data == 0
                            ? 0
                            : length - 3 - variable < 0
                            ? 0
                            : month[
                                  props.data.balances[length - 3 - variable]
                                      .month
                              ],
                        props.data == 0
                            ? 0
                            : length - 2 - variable < 0
                            ? 0
                            : month[
                                  props.data.balances[length - 2 - variable]
                                      .month
                              ],
                        props.data == 0
                            ? 0
                            : length - 1 - variable < 0
                            ? 0
                            : month[
                                  props.data.balances[length - 1 - variable]
                                      .month
                              ],
                    ],
                    datasets: [
                        {
                            data: [
                                props.data == 0
                                    ? 0
                                    : SumBalance(length - 6 - variable),
                                props.data == 0
                                    ? 0
                                    : SumBalance(length - 5 - variable),
                                props.data == 0
                                    ? 0
                                    : SumBalance(length - 4 - variable),
                                props.data == 0
                                    ? 0
                                    : SumBalance(length - 3 - variable),
                                props.data == 0
                                    ? 0
                                    : SumBalance(length - 2 - variable),
                                props.data == 0
                                    ? 0
                                    : SumBalance(length - 1 - variable),
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
