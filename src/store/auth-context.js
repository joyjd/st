import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (employeeName, employeeId) => {
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('employeeName', employeeName);
        localStorage.setItem('employeeId', employeeId);
        setIsLoggedIn(true);
    };

    useEffect(() => {
        const storedLogInfo = localStorage.getItem('isLoggedIn');
        if (storedLogInfo) {
            setIsLoggedIn(true);
        }
    }, []);
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogin: loginHandler,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
