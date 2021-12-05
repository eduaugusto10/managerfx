import React, { useContext, useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
import api from "../../services/api";
import AuthContext from "../../context/auth";
import LineChartExample from "../../components/Graph";

function Home() {
    const { idsMT5, idADM } = useContext(AuthContext);
    const [capitalInvestido, setCapitalInvestido] = useState(0);
    const [profitPerMonth, setProfitPerMonth] = useState(0);
    const [saldo, setSaldo] = useState(0);
    const [lucro, setLucro] = useState(0);
    const [orderOpen, setOrderOpen] = useState(0);
    const [comission, setComission] = useState(0);

    useEffect(() => {
        async function ProfitPerMonth() {
            try {
                await api.get(`/month/${idsMT5}`).then(function (response) {
                    setProfitPerMonth(response.data);
                    return response.data;
                });
            } catch (_err) {
                console.log(_err);
            }
        }
        async function Balance() {
            try {
                await api
                    .get(`/balancehome/${idsMT5}`)
                    .then(function (response) {
                        setSaldo(response.data.balance.banca);
                        setCapitalInvestido(
                            response.data.balanceCapital[0].sum
                        );
                        setLucro(saldo - response.data.balanceCapital[0].sum);
                        setComission(response.data.comissions[0].sum);
                    });
            } catch (_err) {
                console.log(_err);
            }
        }
        async function Equity() {
            try {
                await api
                    .get(`/operation/id_cliente=${idsMT5}&id_adm=${idADM}`)
                    .then(function (response) {
                        setOrderOpen(response.data.equity);
                    });
            } catch (_err) {
                console.log(_err);
            }
        }
        ProfitPerMonth();
        Balance();
        Equity();
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
                    <Text style={styles.textWhiteValue}>${saldo}</Text>
                </View>
                <View style={styles.cardBlue}>
                    <Text style={styles.textWhite}>Capital Líquido</Text>
                    <Text style={styles.textWhiteValue}>
                        ${capitalCalculated()}
                    </Text>
                </View>
            </View>
            <View style={styles.cards}>
                <View style={styles.cardBlue}>
                    <Text style={styles.textWhite}>Lucro Líquido</Text>
                    <Text style={styles.textGain}>${lucro.toFixed(2)}</Text>
                </View>
                <View style={styles.cardWhite}>
                    <Text style={styles.textBlue}>Valor Aplicado</Text>
                    <Text style={styles.textBlueValue}>
                        ${capitalInvestido.toFixed(2)}
                    </Text>
                </View>
            </View>
            <View style={styles.cards}>
                <View style={styles.cardWhite}>
                    <Text style={styles.textBlue}>Ordens Abertas</Text>
                    <Text style={styles.textComission}>
                        ${orderOpen.toFixed(2)}
                    </Text>
                </View>
                <View style={styles.cardWhite}>
                    <Text style={styles.textBlue}>Custos e Comissões</Text>
                    <Text style={styles.textComission}>
                        ${comission.toFixed(2)}
                    </Text>
                </View>
            </View>
            <LineChartExample text="GANHO ACUMULADO" data={profitPerMonth} />
        </View>
    );
}

export default Home;
