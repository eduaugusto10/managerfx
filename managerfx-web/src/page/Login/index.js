import React, { useState, useContext } from "react";
import { Form } from "./style";
import { Container, Title, Button, Input } from "./style";
import api from "../../services/api";
import AuthContext from "../../context/auth";

export default function Login() {
    const { signed, signIn, user, idMT5, idsMT5 } = useContext(AuthContext);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        if (!email || !password) {
        } else {
            try {
                api.post(
                    "/sessions",
                    {
                        email,
                        password,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*",
                        },
                    }
                ).then((result) => {
                    signIn(result.data.token.token);
                    idMT5(result.data.user[0]);
                });
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <Container>
            <Title>Login</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">
                    {loading ? "Carregando..." : "Acessar conta"}
                </Button>
            </Form>
        </Container>
    );
}
