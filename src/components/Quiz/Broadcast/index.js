import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';

import Modal from './../../../utils/Modal';
import { getTitle, getTitleSm, getIcons } from './../../../helpers';
import IconButton from '@material-ui/core/IconButton';

import { updateQuizList } from './../../../firebase/firebaseService';

const Broadcast = ({ quizId, quizName }) => {
    const [broadcast, setBroadcast] = useState(false);

    const broadcastQuiz = async () => {
        await updateQuizList(
            localStorage.getItem('employeeId'),
            localStorage.getItem('activeSessionId'),
            quizId,
            quizName
        );
        setBroadcast(false);
    };

    return (
        <>
            <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => setBroadcast(true)}
                disabled={
                    localStorage.getItem('sessionOwnerId') === undefined ||
                    localStorage.getItem('sessionOwnerId') !==
                        localStorage.getItem('employeeId')
                }
                color="primary"
            >
                {getIcons('Host')}
            </IconButton>
            <Modal
                headerTitle={'Broadcast Quiz'}
                textCOnfirm={'Yes'}
                textCancel={'No'}
                handleConfirm={() => broadcastQuiz()}
                handleClose={() => setBroadcast(false)}
                openModal={broadcast}
            >
                <>
                    Are you sure you want to broadcast this quiz in your current
                    session?.
                </>
            </Modal>
        </>
    );
};

export default Broadcast;
