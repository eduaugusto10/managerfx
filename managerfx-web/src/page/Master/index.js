import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { format } from "date-fns";
import {
    Container,
    Box,
    Title,
    Input,
    CircleButton,
    Button,
    ImageLogo,
    Text,
    List,
    ContentList,
} from "./style";
import Change from "../../assets/change.png";
import Xis from "../../assets/xis.png";
import AuthContext from "../../context/auth";

export default function Master() {
    const history = useNavigate();
    const { newUserID } = useContext(AuthContext);
    const [users, setUsers] = useState();
    const [usersAtivated, setUsersAtivated] = useState(1);

    function Redirect(e) {
        newUserID(e);
        history("/muser");
    }
    function RedirectCreateUser() {
 
        history("/manager");
    }

    useEffect(() => {
        queryUsers();
    }, []);
    async function queryUsers() {
        try {
            api.get("/users").then((result) => {
                setUsers(result.data);
                let countActivated = 0;
                for (let i = 0; i < result.data.length; i++) {
                    if (result.data[i].ativated === "1") countActivated++;
                }
                setUsersAtivated(countActivated);
            });
        } catch (err) {
            console.log(err);
        }
    }

    async function UpdateUser(ids, ativateds) {
        const data = new FormData();
        data.append("ativated", ativateds === "1" ? "0" : "1");
        data.append("_method", "PUT");
        try {
            api.put(`/users/${ids}`, data).then((result) => {
                queryUsers();
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Container>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <Title style={{ color: "#F7941D", paddingLeft: "40px" }}>
                    Clientes
                </Title>
                <Button onClick={()=>RedirectCreateUser()}>Cadastrar</Button>
                <Input placeholder="Pesquisar" />
            </Box>
            <div style={{ textAlign: "center", backgroundColor: "#FFFFFF" }}>
                {users &&
                    users.map((user) =>
                        user.admin === 1 ? (
                            <List key={user}>
                                <ContentList>
                                    <Text>{user.id_metatrader} </Text>
                                    <br />
                                    ID usuário
                                </ContentList>
                                <ContentList>
                                    <Text>
                                        {user.first_name +
                                            " " +
                                            user.second_name}
                                    </Text>
                                    <br />
                                    Nome
                                </ContentList>
                                <ContentList>
                                    <Text>{user.email}</Text>
                                    <br />
                                    E-mail
                                </ContentList>
                                <ContentList>
                                    <Text>{user.assign_plan}</Text>
                                    <br />
                                    Plano
                                </ContentList>
                                <ContentList>
                                    <Text>
                                        {format(
                                            new Date(user.validate_assign),
                                            "yyyy/MM/dd"
                                        )}
                                    </Text>
                                    <br />
                                    Vencimento
                                </ContentList>
                                <ContentList>
                                    {user.ativated === "1" ? (
                                        <Button
                                            onClick={() =>
                                                UpdateUser(
                                                    user.id,
                                                    user.ativated
                                                )
                                            }
                                        >
                                            Ativo
                                        </Button>
                                    ) : (
                                        <Button
                                            onClick={() =>
                                                UpdateUser(
                                                    user.id,
                                                    user.ativated
                                                )
                                            }
                                            style={{
                                                backgroundColor: "#DADEE3",
                                                color: "#595959",
                                            }}
                                        >
                                            Inativo
                                        </Button>
                                    )}
                                </ContentList>
                                <ContentList>
                                    <CircleButton
                                        onClick={() => Redirect(user.id)}
                                    >
                                        <ImageLogo src={Change} />
                                    </CircleButton>
                                </ContentList>
                                <ContentList>
                                    <CircleButton>
                                        <ImageLogo src={Xis} />
                                    </CircleButton>
                                </ContentList>
                            </List>
                        ) : null
                    )}
            </div>
        </Container>
    );
}
