import React, { useCallback, useEffect, useState, createRef } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import { getScoreLive } from './../../../firebase/firebaseService';
import { getTitle, getIcons, getTime, getTitleSm } from './../../../helpers';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
const CheckDetails = ({ openDetails, closeOpenDetails, quizId, quizName }) => {
    let liveDataSubs;
    const [score, setScore] = useState([]);
    const getLivescoreUpdate = () => {
        liveDataSubs = getScoreLive(
            quizId,
            localStorage.getItem('activeSessionId')
        ).onSnapshot((snpshot) => {
            let scores = [];
            snpshot.forEach((doc) => {
                scores.push(doc.data());
            });

            setScore(scores);
        });
    };

    useEffect(() => {
        if (
            localStorage.getItem('employeeId') ===
            localStorage.getItem('sessionOwnerId')
        ) {
            getLivescoreUpdate();
            return () => liveDataSubs();
        }
    }, []);
    return (
        <Dialog fullScreen open={openDetails} onClose={closeOpenDetails}>
            <AppBar>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={closeOpenDetails}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box mt={8}>
                <Box pl={2} pr={2}>
                    {quizName}
                    {getTitleSm('Quiz Scores')}
                </Box>
                <List>
                    {score.map((dt, index) => {
                        return (
                            <Box key={index}>
                                <ListItem>
                                    {dt.userName}

                                    <ListItemSecondaryAction>
                                        {dt.score} / {dt.total}
                                    </ListItemSecondaryAction>
                                </ListItem>
                                <Divider />
                            </Box>
                        );
                    })}
                </List>
            </Box>
        </Dialog>
    );
};

export default CheckDetails;
