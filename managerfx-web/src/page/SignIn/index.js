import React, { useEffect, useContext, useState } from "react";
import api from "../../services/api";
import AuthContext from "../../context/auth";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Box,
    Title,
    Button,
    Input,
    ButtonGreen,
    Cards,
} from "./style";
import { format } from "date-fns";

export default function Home() {
    const {
        signed,
        signIn,
        user,
        idMT5,
        idsMT5,
        name,
        lastName,
        email,
        userID,
    } = useContext(AuthContext);
    const history = useNavigate();
    const [emails, setEmails] = useState();
    const [names, setNames] = useState();
    const [password, setPassword] = useState();
    const [accountName, setAccountName] = useState();
    const [phone, setPhone] = useState();
    const [idMetatrader, setIDMetatrader] = useState();
    const [expiration, setExpiration] = useState();
    const [plan, setPlan] = useState();

    useEffect(() => {
        queryUsers();
    }, []);
    async function queryUsers() {
        try {
            await api.get(`/userss/${userID}`).then((result) => {
                setEmails(result.data[0].email);
                setNames(result.data[0].first_name);
                setIDMetatrader(result.data[0].id_metatrader);
                setPhone(result.data[0].phone);
                setAccountName(result.data[0].accountname);
                const expirationDate = new Date(result.data[0].validate_assign);
                setExpiration(format(expirationDate, "yyyy/MM/dd"));
                setPlan(result.data[0].assign_plan);
            });
        } catch (err) {
            console.log(err);
        }
    }

    async function UpdateUser() {
        const data = new FormData();
        data.append("first_name", names);
        data.append("email", emails);
        data.append("id_metatrader", idMetatrader);
        data.append("accountname", accountName);
        data.append("phone", phone);
        data.append("validate_assign", expiration);
        data.append("assign_plan", plan);
        data.append("_method", "PUT");
        if (password !== undefined) data.append("password", password);

        try {
            api.put(`/users/${userID}`, data).then((result) => {
                queryUsers();
                Redirect();
            });
        } catch (err) {
            console.log(err);
        }
    }

    function Redirect() {
        history("/admin");
    }

    return (
        <Container>
            <Title>Alterar Usuário</Title>
            <Cards>
                <Box style={{ textAlign: "right" }}>
                    <Input
                        placeholder="Nome"
                        value={names}
                        onChange={(e) => setNames(e.target.value)}
                    />
                    <Input
                        placeholder="E-mail"
                        value={emails}
                        onChange={(e) => setEmails(e.target.value)}
                    />
                    <Input
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        placeholder="Telefone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Box>
                <Box style={{ textAlign: "left" }}>
                    <Input
                        placeholder="Nome da Conta"
                        value={accountName}
                        onChange={(e) => setAccountName(e.target.value)}
                    />
                    <Input
                        placeholder="Número da Conta PAMM"
                        value={idMetatrader}
                        onChange={(e) => setIDMetatrader(e.target.value)}
                    />
                    <Input
                        placeholder="Expiração da Assinatura"
                        value={expiration}
                        onChange={(e) => setExpiration(e.target.value)}
                    />
                    <Input
                        placeholder="Plano"
                        value={plan}
                        onChange={(e) => setPlan(e.target.value)}
                    />
                </Box>
            </Cards>
            <Button onClick={() => Redirect()}>Voltar</Button>
            <ButtonGreen onClick={() => UpdateUser()}>Salvar</ButtonGreen>
        </Container>
    );
}
