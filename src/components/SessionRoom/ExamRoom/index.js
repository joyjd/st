import React, { useCallback, useEffect, useState, createRef } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import ExamPaper from './../ExamPaper';
import {
    getSingleQuizDetails,
    addQuizScore,
} from './../../../firebase/firebaseService';
import CheckDetails from './../CheckDetails';

import TimerHeader from './../TimerHeader';
const ExamRoom = ({ quizId, quizName }) => {
    const [openExam, setOpenExam] = useState(false);
    const [examDetails, setExamDetails] = useState({});
    const [stopTimer, setStopTimer] = useState(false);
    const [forceEndExam, setForceEndExam] = useState(false);

    const [openDetails, setOpenDetails] = useState(false);

    const getQuizDetails = async (quizId) => {
        const quiz = await getSingleQuizDetails(quizId);
        setExamDetails(quiz.data());
    };

    const updateScore = async (score, total) => {
        await addQuizScore(
            localStorage.getItem('employeeId'),
            localStorage.getItem('employeeName'),
            score,
            total,
            quizId,
            examDetails.quizName,
            localStorage.getItem('activeSessionId')
        );
    };

    const handleCloseExam = () => {
        setForceEndExam(true);
        setOpenExam(false);
    };

    const handleOpenExam = async () => {
        if (
            localStorage.getItem('employeeId') !==
            localStorage.getItem('sessionOwnerId')
        ) {
            await getQuizDetails(quizId);
            await setStopTimer(false);
            setOpenExam(true);
        } else {
            setOpenDetails(true);
        }
    };
    const handleQuizComplete = (correct, total) => {
        setStopTimer(true);
        setOpenExam(false);
        console.log(correct + '/' + total);
        updateScore(correct, total);
    };

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => handleOpenExam()}
            >
                {localStorage.getItem('sessionOwnerId') ===
                localStorage.getItem('employeeId')
                    ? 'Details'
                    : 'Attempt'}
            </Button>

            <Dialog fullScreen open={openExam}>
                <TimerHeader
                    handleCloseExam={() => handleCloseExam()}
                    timer={examDetails.quizDuration}
                    stopTimer={stopTimer}
                />
                <DialogContent>
                    <ExamPaper
                        forceEndExam={forceEndExam}
                        examDetails={examDetails}
                        handleQuizComplete={(correct, total) =>
                            handleQuizComplete(correct, total)
                        }
                    />
                </DialogContent>
            </Dialog>

            <CheckDetails
                openDetails={openDetails}
                closeOpenDetails={() => setOpenDetails(false)}
                quizId={quizId}
                quizName={quizName}
            />
        </>
    );
};

export default ExamRoom;
