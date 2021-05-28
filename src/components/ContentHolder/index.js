import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';

import Home from './../Home';
import SessionRoom from './../SessionRoom';
import Report from './../Report';
import Quiz from './../Quiz';
import AuthContext from './../../store/auth-context';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
}));

const ContentHolder = ({ onLogoutFunc }) => {
    const classes = useStyles();
    const theme = useTheme();
    const ctx = useContext(AuthContext);

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />

            <Route path="/Home" exact>
                <Home />
            </Route>
            <Route path="/SessionRoom" exact>
                <SessionRoom />
            </Route>
            <Route path="/Report" exact>
                <Report />
            </Route>
            <Route path="/Quiz" exact>
                <Quiz />
            </Route>
            <Route path="/" exact>
                <Home />
            </Route>
        </main>
    );
};

export default ContentHolder;
