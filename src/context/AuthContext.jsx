import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        setAccessToken(localStorage.getItem('accessToken'));
        setRefreshToken(localStorage.getItem('refreshToken'));
        setRole(localStorage.getItem('role'));
    }, []);

    const authValues = {
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken,
        role,
        setRole
    };

    return (

        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
