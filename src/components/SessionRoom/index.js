import React, { useCallback, useEffect, useState } from 'react';
import Btn from './../../utils/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { getTitle, getIcons, getTime } from './../../helpers';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import ParticipantList from './ParticipantList';
import Snackbar from '@material-ui/core/Snackbar';
import HaltAttendance from './HaltAttendance';

import {
    getSessionDetails,
    getParticipantLive,
    getSessionStatusLive,
    updateSessionStatus,
    removeParticipant,
} from './../../firebase/firebaseService';
import { useHistory } from 'react-router-dom';

const SessionRoom = () => {
    const [sessionDetails, setSessionDetails] = useState({});
    // const [showSnack, setShowSnack] = useState(false);
    const history = useHistory();
    const getSessionDetailFunc = useCallback(async () => {
        if (
            localStorage.getItem('activeSessionId') &&
            localStorage.getItem('sessionOwnerId')
        ) {
            const sessionDetails = await getSessionDetails(
                localStorage.getItem('sessionOwnerId'),
                localStorage.getItem('activeSessionId')
            );
            if (
                sessionDetails.data().status === 'active' ||
                sessionDetails.data().status === 'expired'
            ) {
                setSessionDetails(sessionDetails.data());
                getSessionStatusOnlineLive(); // set live counter for status change
            } else if (sessionDetails.data().status === 'off') {
                localStorage.removeItem('sessionOwnerId');
                localStorage.removeItem('activeSessionId');
            } else if (sessionDetails.data().status === 'closed') {
                setSessionDetails({});
                if (
                    localStorage.getItem('sessionOwnerId') ||
                    localStorage.getItem('activeSessionId')
                ) {
                    localStorage.removeItem('sessionOwnerId');
                    localStorage.removeItem('activeSessionId');
                }
            }
        }
    }, []);

    const closeAndRedirectHome = () => {
        setSessionDetails({});
        localStorage.removeItem('activeSessionId');
        localStorage.removeItem('sessionOwnerId');
        // setShowSnack(true);
        history.push('/Home');
    };

    const getSessionStatusOnlineLive = () => {
        const liveData = getSessionStatusLive(
            localStorage.getItem('sessionOwnerId'),
            localStorage.getItem('activeSessionId')
        );
        liveData.onSnapshot((doc) => {
            if (doc.data().status === 'closed') {
                closeAndRedirectHome();
            }
        });
    };

    const getLiveParticipantsList = () => {
        if (
            localStorage.getItem('sessionOwnerId') &&
            localStorage.getItem('sessionOwnerId') !==
                localStorage.getItem('employeeId')
        ) {
            const liveData = getParticipantLive(
                localStorage.getItem('activeSessionId')
            );
            liveData.onSnapshot((querySnapShot) => {
                let participantList = [];

                querySnapShot.forEach((doc) => {
                    participantList.push(doc.data().empId);
                });

                if (
                    participantList.find(
                        (el) => el === localStorage.getItem('employeeId')
                    ) === undefined
                ) {
                    // navigate out to home page
                    closeAndRedirectHome();
                }
            });
        }
    };

    const closeSession = async () => {
        await updateSessionStatus(
            localStorage.getItem('sessionOwnerId'),
            localStorage.getItem('activeSessionId'),
            'closed'
        );
        closeAndRedirectHome();
    };

    const exitSession = async () => {
        await removeParticipant(
            localStorage.getItem('activeSessionId'),
            localStorage.getItem('employeeId')
        );
        closeAndRedirectHome();
    };

    useEffect(() => getSessionDetailFunc(), [getSessionDetailFunc]);
    useEffect(() => getLiveParticipantsList(), []);

    return Object.keys(sessionDetails).length === 0 ? (
        <>
            You have not joined any active session or the session is yet to be
            started by the host.
        </>
    ) : (
        <>
            {localStorage.getItem('sessionOwnerId') ===
            localStorage.getItem('employeeId') ? (
                <>
                    <Btn
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={() => closeSession()}
                    >
                        Stop Session
                    </Btn>
                </>
            ) : (
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <Box display="flex" justifyContent="justify-center" p={1}>
                        {getIcons('Dot', {
                            color: 'error',
                        })}{' '}
                        Live
                    </Box>
                    <Btn
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={() => exitSession()}
                    >
                        Exit Session
                    </Btn>
                </Box>
            )}

            {getTitle('Session Details')}
            <Card elevation={2}>
                <CardHeader
                    avatar={
                        <Avatar variant="rounded" aria-label="recipe">
                            R
                        </Avatar>
                    }
                    title={sessionDetails.sessionName}
                    subheader={sessionDetails.ownerName}
                />
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-end"
                    pb={1}
                    pr={1}
                ></Box>
            </Card>
            {getTitle('Session Quiz')}
            <>No quizes allocated till now.</>

            {localStorage.getItem('sessionOwnerId') ===
            localStorage.getItem('employeeId') ? (
                <>
                    {getTitle('Participants')}
                    <HaltAttendance />
                    <Box mt={1}>
                        <ParticipantList sessionId={sessionDetails.sessionId} />
                    </Box>
                </>
            ) : null}
            {/* <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={showSnack}
                onClose={setShowSnack(false)}
                message="You have been logged out of session !"
            /> */}
        </>
    );
};

export default SessionRoom;
