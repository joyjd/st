import React, { useEffect, useState } from 'react';
import './index.css';
import Btn from './../../utils/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { getTitle, getIcons } from './../../helpers';

import { Typography } from '@material-ui/core';
import ScheduleSession from './ScheduleSession';

import { getSessions } from './../../firebase/firebaseService';
import SessionList from './SessionList';

const Home = () => {
    console.log('Home executed');
    return (
        <>
            <Paper>
                <Box
                    display="flex"
                    flexDirection="column"
                    mx="auto"
                    px={2}
                    pb={2}
                    justifyContent="center"
                >
                    <p>Schedule a new session as you plan to host</p>
                    <ScheduleSession />
                </Box>
            </Paper>
            {getTitle("Today's Sessions")}
            <Box mb={2} display="flex" flexDirection="row">
                {getIcons('DateRangeIcon')}
                <Typography gutterBottom>
                    {new Date().toDateString()}
                </Typography>
            </Box>
            <>
                <SessionList />
            </>
        </>
    );
};

export default Home;
