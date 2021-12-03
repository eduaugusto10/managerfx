import React, { createContext, useState } from "react";
import * as auth from "../services/auth";

const AuthContext = createContext({
    signed: false,
    user: {},
    signIn: {},
    idMT5: {},
    idsMT5: {},
    name: {},
    lastName: {},
    email: {},
    newUserID:{},
    userID: {},
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [idsMT5, setsIDMT5] = useState();
    const [idAdm, setIDAdm] = useState();
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [userID,setUserID] = useState()

    async function signIn(token) {
        setUser(token);
    }
    async function idMT5(response) {
        setsIDMT5(response.id_metatrader);
        setName(response.first_name);
        setEmail(response.email);
        setLastName(response.second_name);
        setIDAdm(response.id_adm);
    }
async function newUserID(response){
    setUserID(response)
}
    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                signIn,
                idMT5,
                idsMT5,
                idAdm,
                lastName,
                name,
                email,
                userID,
                newUserID
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
