import React, { useContext, useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
import api from "../../services/api";
import AuthContext from "../../context/auth";
import LineChartExample from "../../components/Graph";

function Home() {
    const { user } = useContext(AuthContext);
    const [capitalInvestido, setCapitalInvestido] = useState(0);
    const [capitalLiquido, setCapitalLiquido] = useState(0);
    const [saldo, setSaldo] = useState(0);
    const [lucro, setLucro] = useState(0);
    const [orderOpen, setOrderOpen] = useState(0);
    const [comission, setComission] = useState(0);
    const [data, setData] = useState("");

    useEffect(() => {
        async function Balance() {
            try {
                await api.get("/balancehome/1163").then(function (response) {
                    setData(response.data);
                    setSaldo(response.data.balance.banca);
                    let totalCapital = 0;
                    for (
                        let i = 0;
                        i < response.data.balanceCapital.length;
                        i++
                    ) {
                        if (data.balanceCapital[i].return_profit > 0) {
                            totalCapital =
                                parseFloat(
                                    data.balanceCapital[i].return_profit
                                ) + totalCapital;
                        }
                    }
                    console.log("Tamanho do array: ", totalCapital);
                    setCapitalInvestido(totalCapital);
                    setLucro(saldo - totalCapital);
                });
            } catch (_err) {
                console.log(_err);
            }
        }
        async function Equity() {
            try {
                await api
                    .get("/operation/id_cliente=1163&id_adm=1140")
                    .then(function (response) {
                        setOrderOpen(response.data);
                    });
            } catch (_err) {
                console.log(_err);
            }
        }
        async function Comission() {
            try {
                await api.get("/comissionhome/1163").then(function (response) {
                    let comissions = 0;
                    const comissionLength = response.data.balanceCapital.length;
                    const resp = response.data;
                    for (let i = 0; i < comissionLength; i++) {
                        if (
                            resp.balanceCapital[i].comission != "0" &&
                            resp.balanceCapital[i].comission != undefined
                        ) {
                            console.log(i);
                            console.log(resp.balanceCapital[i].comission);
                            console.log(resp.balanceCapital[i].id);
                            comissions =
                                comissions +
                                parseFloat(resp.balanceCapital[i].comission);
                        }
                    }

                    setComission(comissions);
                });
            } catch (_err) {
                console.log(_err);
            }
        }
        Balance();
        Equity();
        Comission();
    }, [capitalInvestido, saldo]);

    function capitalCalculated() {
        const capital = (
            parseFloat(saldo) +
            parseFloat(orderOpen) +
            parseFloat(comission)
        ).toFixed(2);
        return capital;
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/logo_azul.png")}
                />
            </View>
            <View style={styles.cards}>
                <View style={styles.cardBlue}>
                    <Text style={styles.textWhite}>Balance</Text>
                    <Text
                        style={{
                            fontSize: 26,
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        ${saldo}
                    </Text>
                </View>
                <View style={styles.cardBlue}>
                    <Text style={styles.textWhite}>Capital Líquido</Text>
                    <Text style={styles.textWhite}>${capitalCalculated()}</Text>
                </View>
            </View>
            <View style={styles.cards}>
                <View style={styles.cardBlue}>
                    <Text style={styles.textWhite}>Lucro Líquido</Text>
                    <Text style={styles.textWhite}>${lucro.toFixed(2)}</Text>
                </View>
                <View style={styles.cardWhite}>
                    <Text style={styles.textBlue}>Valor Aplicado</Text>
                    <Text style={styles.textBlue}>
                        ${capitalInvestido.toFixed(2)}
                    </Text>
                </View>
            </View>
            <View style={styles.cards}>
                <View style={styles.cardWhite}>
                    <Text style={styles.textBlue}>Ordens Abertas</Text>
                    <Text style={styles.textBlue}>${orderOpen.toFixed(2)}</Text>
                </View>
                <View style={styles.cardWhite}>
                    <Text style={styles.textBlue}>Custos e Comissões</Text>
                    <Text style={styles.textBlue}>${comission.toFixed(2)}</Text>
                </View>
            </View>
            <LineChartExample />
        </View>
    );
}

export default Home;
