import React from "react";
import {
    Container,
    ImageLogo,
    Text,
    Title,
    Div,
    Card,
    ImageCheck,
    CardII,
    TitleII,
    Columns,
    Subtitle,
    Description,
    SquadOrange,Button
} from "./style";
import Logo from "../../assets/Logoapp.png";
import CelLeft from "../../assets/celleft.png";
import CelCenter from "../../assets/celcenter.png";
import CelRight from "../../assets/celright.png";
import Check from "../../assets/check.png";
import Graphic from "../../assets/graphic.png";
import Orders from "../../assets/orders.png";
import Dashboard from "../../assets/dashboard.png";
import Extract from "../../assets/extract.png";
import DisplayBlue from "../../assets/displayblue.png";

export default function LandingPage() {
    return (
        <Container>
            <ImageLogo src={Logo} alt="Logo OGEFX" />
            <Card>
                <Div>
                    <Title>
                        OGEFX app
                        <p />
                    </Title>
                    <Title
                        style={{
                            fontSize: "20px",
                            display: "flex",
                            textAlign: "left",
                            marginLeft: "68px",
                            marginBottom: "30px",
                        }}
                    >
                        Para acompanhar os investimentos na palma da sua mão!
                    </Title>
                    <div style={{ display: "flex", textAlign: "left" }}>
                        <ImageCheck src={Check} />
                        <Text>
                            Praticidade para analisar os investimentos
                            utilizando o celular
                        </Text>
                    </div>
                    <div style={{ display: "flex", textAlign: "left" }}>
                        <ImageCheck src={Check} />
                        <Text>
                            Clareza no acompanhamento da rentabilidade dos
                            investimentos
                        </Text>
                    </div>
                </Div>
                <Div>
                    <ImageLogo src={CelLeft} alt="smartphone esquerda" />
                    <ImageLogo src={CelCenter} alt="smartphone centro" />
                    <ImageLogo src={CelRight} alt="smartphone direita" />
                </Div>
            </Card>
            <CardII>
                <TitleII> OGEFX app Características</TitleII>
                <Text style={{ color: "#00000099", fontSize: "18px" }}>
                    <p />
                    Conheça as características e benfícios do OGEFX app{" "}
                </Text>
                <Columns>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <SquadOrange>
                                <ImageLogo src={Graphic} />
                            </SquadOrange>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column", textAlign:"left"
                                }}
                            >
                                <Subtitle>Gráfico de Growth</Subtitle>
                                <Description>
                                    Fornece o gráfico de crescimento individual
                                    de cada cliente
                                </Description>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", marginTop:"90px" }}>
                            <SquadOrange>
                                <ImageLogo src={Orders} />
                            </SquadOrange>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column", textAlign:"left"
                                }}
                            >
                                <Subtitle>Ordens</Subtitle>
                                <Description>
                                    Fornece o acompanhamento das ordens abertas
                                    e fechadas e qual o share em cada ordem
                                </Description>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ImageLogo src={DisplayBlue} />
                                <Button>Adquirir</Button>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <SquadOrange>
                                <ImageLogo src={Dashboard} />
                            </SquadOrange>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column", textAlign:"left"
                                }}
                            >
                                <Subtitle>Dashboard</Subtitle>
                                <Description>
                                    Fornece um resumo da situação atual da
                                    conta, como: Balance, Equity, lucro e taxas
                                </Description>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", marginTop:"90px" }}>
                            <SquadOrange>
                                <ImageLogo src={Extract} />
                            </SquadOrange>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column", textAlign:"left"
                                }}
                            >
                                <Subtitle>Extrato</Subtitle>
                                <Description>
                                    Fornece o acompanhamento da movimentação da
                                    conta, como: Depósito, Saque e taxas
                                </Description>
                            </div>
                        </div>
                    </div>
                </Columns>
            </CardII>
        </Container>
    );
}
