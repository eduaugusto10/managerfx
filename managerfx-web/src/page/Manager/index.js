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


    async function CreateUser() {
        const data = new FormData();
        data.append("first_name", names);
        data.append("email", emails);
        data.append("id_metatrader", idMetatrader);
        data.append("id_adm", idMetatrader);
        data.append("accountname", accountName);
        data.append("phone", phone);
        data.append("validate_assign", expiration);
        data.append("assign_plan", plan);
        data.append("admin", 1);
        data.append("ativated", 1);
        if (password !== undefined) data.append("password", password);

        try {
            api.post(`/users`, data).then((result) => {                
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
            <ButtonGreen onClick={() => CreateUser()}>Salvar</ButtonGreen>
        </Container>
    );
}
