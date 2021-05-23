import React, { useEffect, useState } from 'react';

import Btn from './../../../utils/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { getTitle, getIcons, getTime } from './../../../helpers';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import {
    getSessionsLive,
    updateSessionStatus,
    markPresent,
} from './../../../firebase/firebaseService';

import { useHistory } from 'react-router-dom';

const SessionList = () => {
    const history = useHistory();
    const [sessionList, setSessionList] = useState([]);
    const userId = localStorage.getItem('employeeId');
    const getLiveSessionData = () => {
        const liveData = getSessionsLive(
            new Date(new Date().toDateString()).getTime()
        );
        liveData.onSnapshot((querySnapShot) => {
            let sessionList = [];

            querySnapShot.forEach((doc) => {
                sessionList.push(doc.data());
            });
            setSessionList(sessionList);
        });
    };

    useEffect(() => getLiveSessionData(), []);

    const startSession = async (sessionId, ownerId) => {
        await updateSessionStatus(userId, sessionId, 'active');
        if (ownerId !== userId) {
            await markPresent(
                sessionId,
                userId,
                localStorage.getItem('employeeName')
            );
        }
        localStorage.setItem('activeSessionId', sessionId);
        localStorage.setItem('sessionOwnerId', ownerId);

        history.push('/SessionRoom');
    };

    return (
        <>
            {sessionList.map((data, index) => {
                return (
                    <Grid key={index} container spacing={1}>
                        <Grid item xs={0} sm={0} className="timelineY"></Grid>
                        <Grid item xs={1} sm={1} className="timelineX"></Grid>
                        <Grid item xs={10} sm={10}>
                            <Box mb={2} display="flex" flexDirection="column">
                                <Box display="flex" flexDirection="row">
                                    {getIcons('AccessAlarmIcon', {
                                        color: 'disabled',
                                    })}
                                    <Typography
                                        style={{ color: '#797979' }}
                                        variant="button"
                                        gutterBottom
                                    >
                                        {getTime(
                                            new Date(data.startTime)
                                                .toTimeString()
                                                .split(' ')[0]
                                        )}{' '}
                                        -{' '}
                                        {getTime(
                                            new Date(data.endTime)
                                                .toTimeString()
                                                .split(' ')[0]
                                        )}
                                    </Typography>
                                </Box>
                                <Card elevation={2}>
                                    <CardHeader
                                        avatar={
                                            <Avatar
                                                variant="rounded"
                                                aria-label="recipe"
                                            >
                                                R
                                            </Avatar>
                                        }
                                        title={data.sessionName}
                                        subheader={data.ownerName}
                                    />
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        justifyContent="flex-end"
                                        pb={1}
                                        pr={1}
                                    >
                                        {data.status === 'active' ? (
                                            <Box
                                                display="flex"
                                                justifyContent="justify-center"
                                                p={1}
                                            >
                                                {getIcons('Dot', {
                                                    color: 'error',
                                                })}{' '}
                                                Live
                                            </Box>
                                        ) : null}
                                        {userId === data.ownerId ? (
                                            <Btn
                                                variant="contained"
                                                color="primary"
                                                disabled={
                                                    data.status === 'active' ||
                                                    data.status === 'closed' ||
                                                    data.status === 'expired'
                                                }
                                                onClick={() =>
                                                    startSession(
                                                        data.sessionId,
                                                        data.ownerId
                                                    )
                                                }
                                            >
                                                {data.status === 'off'
                                                    ? 'Start Session'
                                                    : data.status === 'expired'
                                                    ? 'Session Expired'
                                                    : data.status === 'closed'
                                                    ? 'Closed'
                                                    : 'Active'}
                                            </Btn>
                                        ) : (
                                            <Btn
                                                variant="contained"
                                                color="primary"
                                                disabled={
                                                    data.status === 'expired' ||
                                                    data.status === 'closed' ||
                                                    data.status === 'off'
                                                }
                                                onClick={() =>
                                                    startSession(
                                                        data.sessionId,
                                                        data.ownerId
                                                    )
                                                }
                                            >
                                                {data.status === 'off' ||
                                                data.status === 'active'
                                                    ? 'Join Session'
                                                    : data.status === 'expired'
                                                    ? 'Session Expired'
                                                    : 'Session Closed'}
                                            </Btn>
                                        )}
                                    </Box>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                );
            })}
        </>
    );
};

export default SessionList;
