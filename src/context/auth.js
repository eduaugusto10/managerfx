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
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [idsMT5, setsIDMT5] = useState();
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();

    async function signIn() {
        const response = await auth.signIn();
        setUser(response.user);
    }
    async function idMT5(id, names, lastNames, emails) {
        setsIDMT5(id);
        setName(names);
        setEmail(emails);
        setLastName(lastNames);
    }

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                signIn,
                idMT5,
                idsMT5,
                lastName,
                name,
                email,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
