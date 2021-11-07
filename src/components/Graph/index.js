import React from "react";
import { View, Text, Dimensions } from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
} from "expo-chart-kit";
import styles from "./style";

export function AreaChartExample(props) {
    const screenWidth = Dimensions.get("window").width;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{props.text}</Text>
            </View>
            <LineChart
                data={{
                    labels: [
                        "Janeiro",
                        "Fevereiro",
                        "Março",
                        "Abril",
                        "Maio",
                        "Junho",
                    ],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
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
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
