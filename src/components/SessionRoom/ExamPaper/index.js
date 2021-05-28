import React, { useCallback, useEffect, useState, createRef } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { getTitle, getIcons, getTime } from './../../../helpers';
import List from '@material-ui/core/List';
import OptionListAns from './OprionListAns';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';

const ExamPaper = ({ examDetails, handleQuizComplete, forceEndExam }) => {
    const [correctAns, setCorrectAns] = useState({});

    const setQuesAns = (index, qtnIndex) => {
        console.log(qtnIndex);
        setCorrectAns({
            ...correctAns,
            [qtnIndex]:
                examDetails.questionList[qtnIndex].answerIndex === index
                    ? true
                    : false,
        });
    };

    const handleFinishQuiz = () => {
        let correctCount = 0;
        Object.keys(correctAns).forEach((qz) => {
            correctAns[qz] ? (correctCount += 1) : (correctCount += 0);
        });
        console.log(correctAns);
        handleQuizComplete(
            correctCount,
            Object.keys(examDetails.questionList).length
        );
    };

    useEffect(() => {
        if (forceEndExam) {
            handleFinishQuiz();
        }
    }, [forceEndExam]);

    return (
        <>
            <Box mt={8}>{examDetails.quizName}</Box>
            {getTitle('Answer the following')}
            <Box>
                {Object.keys(examDetails.questionList).map((qtnIndex, indx) => {
                    return (
                        <Box key={indx}>
                            {indx + 1}.{' '}
                            {examDetails.questionList[qtnIndex].data}
                            <OptionListAns
                                examDetails={examDetails}
                                qtnIndex={qtnIndex}
                                getFinalSelection={(index) =>
                                    setQuesAns(index, qtnIndex)
                                }
                            />
                        </Box>
                    );
                })}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleFinishQuiz()}
                >
                    Finish Quiz
                </Button>
            </Box>
        </>
    );
};

export default ExamPaper;
