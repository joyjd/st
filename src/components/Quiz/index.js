import React, { useEffect, useState } from 'react';
import Btn from './../../utils/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import CreateQuiz from './CreateQuiz';
import {
    getQuizes,
    getIndividualQuizScore,
} from './../../firebase/firebaseService';
import { getTitle, getTitleSm, getIcons } from './../../helpers';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Broadcast from './Broadcast';
import ViewStaticQuiz from './ViewStaticQuiz';

const Quiz = () => {
    const [quizeList, setQuizList] = useState([]);
    const [quizeScores, setQuizScores] = useState([]);

    const getLiveQuizeList = async () => {
        const liveData = await getQuizes(localStorage.getItem('employeeId'));

        liveData.onSnapshot((querySnapShot) => {
            let qzList = [];

            querySnapShot.forEach((doc) => {
                qzList.push(doc.data());
            });
            setQuizList(qzList);
        });
    };

    const getIndvdlQuizScore = async () => {
        const scoreData = await getIndividualQuizScore(
            localStorage.getItem('employeeId')
        );
        let score = [];
        scoreData.forEach((doc) => {
            score.push(doc.data());
        });
        setQuizScores(score);
    };

    useEffect(() => {
        getLiveQuizeList();
        getIndvdlQuizScore();
    }, []);

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
                    <p>Create a new Quiz question paper</p>
                    <CreateQuiz />
                </Box>
            </Paper>
            {getTitle('Created Quiz List')}
            {quizeList.length !== 0 ? (
                <>
                    <List style={{ padding: 0 }}>
                        {quizeList.map((qz, index) => {
                            return (
                                <Box key={index}>
                                    <ListItem style={{ paddingLeft: 0 }}>
                                        <ViewStaticQuiz
                                            quizName={qz.quizName}
                                            quizId={qz.quizID}
                                        />
                                        <ListItemSecondaryAction>
                                            <Broadcast
                                                quizId={qz.quizID}
                                                quizName={qz.quizName}
                                            />
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <Divider />
                                </Box>
                            );
                        })}
                    </List>
                </>
            ) : (
                <>You have not created any quiz yet.</>
            )}

            {getTitle('Quiz Participated')}
            {quizeScores.length !== 0 ? (
                <>
                    <List style={{ padding: 0 }}>
                        {quizeScores.map((qz, index) => {
                            return (
                                <Box key={index}>
                                    <ListItem style={{ paddingLeft: 0 }}>
                                        {qz.qzName}
                                        <ListItemSecondaryAction>
                                            {qz.score} / {qz.total}
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <Divider />
                                </Box>
                            );
                        })}
                    </List>
                </>
            ) : (
                <>You have not participated in any quiz yet.</>
            )}
        </>
    );
};

export default Quiz;
