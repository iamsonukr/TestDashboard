import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [role, setRole] = useState(null);
    const [isAuthenticated,setIsAuthenticated]=useState(false)

    
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        const storedRefreshToken = localStorage.getItem('refreshToken');
        const storedRole = localStorage.getItem('role');
        
        setAccessToken(token);
        setRefreshToken(storedRefreshToken);
        setRole(storedRole);
        
        console.log("Access Token on Auth Side:", token);
        if (token !== null && token !== undefined) {
            setIsAuthenticated(true);
        }
    }, []);
    
    

    const authValues = {
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken,
        role,
        setRole,
        isAuthenticated,
        setIsAuthenticated
    };

    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
