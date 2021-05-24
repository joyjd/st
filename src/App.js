import React, { useRef, useContext } from 'react';
import './App.css';
import Landing from './components/LandingPage';
import Login from './components/Login';
import AuthContext from './store/auth-context';

const App = () => {
    const ctx = useContext(AuthContext);
    //localStorage.clear();
    return ctx.isLoggedIn ? (
        <Landing onLogoutFunc={ctx.onLogOut} />
    ) : (
        <Login onLoginFunc={ctx.onLogin} />
    );
};

export default App;
