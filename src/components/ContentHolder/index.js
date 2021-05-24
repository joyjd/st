import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';

import Home from './../Home';
import SessionRoom from './../SessionRoom';
import Report from './../Report';

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

const ContentHolder = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Route path="/Home">
                <Home />
            </Route>
            <Route path="/SessionRoom">
                <SessionRoom />
            </Route>
            <Route path="/Report">
                <Report />
            </Route>
        </main>
    );
};

export default ContentHolder;
