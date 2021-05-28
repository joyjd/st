import React, { useCallback, useEffect, useState, createRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const TimerHeader = ({ handleCloseExam, stopTimer, timer }) => {
    const timeRef = createRef();
    let timeLimit;
    let timeRemaining;
    const parseMillisecondsIntoReadableTime = (distance) => {
        //Get hours from milliseconds
        return new Date(distance).toISOString().slice(11, 19);
    };

    const handleClose = () => {
        handleCloseExam();
    };

    const suddenComplete = () => {
        if (stopTimer) {
            clearInterval(timeRemaining);
        }
    };

    const SetTimer = () => {
        timeLimit = Number(timer * 60000);
        console.log('setTimer exec', timeLimit);

        timeRemaining = setInterval(() => {
            console.log('setInterval exec');
            if (timeLimit <= 0) {
                clearInterval(timeRemaining);
                handleClose();
            } else {
                timeRef.current.innerHTML =
                    'Time left : ' +
                    parseMillisecondsIntoReadableTime(timeLimit);
            }
            timeLimit -= 1000;
        }, 1000);
    };

    useEffect(() => {
        if (stopTimer) {
            suddenComplete();
        } else {
            SetTimer();
        }

        return () => clearInterval(timeRemaining);
    }, [stopTimer]);

    return (
        <AppBar>
            <Toolbar>
                <span ref={timeRef}></span>
            </Toolbar>
        </AppBar>
    );
};

export default TimerHeader;
