import React, { createContext, useState } from "react";
import * as auth from "../services/auth";

const AuthContext = createContext({
    signed: false,
    user: {},
    signIn: {},
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    
    async function signIn() {
        const response = await auth.signIn();
        console.log("Resposta usuário");
        setUser(response.user);
        console.log(response.token);
    }

    return (
        <AuthContext.Provider
            value={{ signed: !!user, user, signIn }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
