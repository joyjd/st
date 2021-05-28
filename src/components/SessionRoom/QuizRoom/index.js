import React, { useCallback, useEffect, useState } from 'react';
import { getSessionStatusLive } from './../../../firebase/firebaseService';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ExamRoom from './../ExamRoom';

const QuizRoom = () => {
    const [qzArr, setQzArr] = useState([]);
    const [qzArrNames, setQzArrNames] = useState([]);

    const getSessionStatusOnlineLive = () => {
        const liveData = getSessionStatusLive(
            localStorage.getItem('sessionOwnerId'),
            localStorage.getItem('activeSessionId')
        );
        liveData.onSnapshot((doc) => {
            setQzArr([...qzArr, ...doc.data().quizes]);
            setQzArrNames([...qzArrNames, ...doc.data().quizNames]);
        });
    };

    useEffect(() => getSessionStatusOnlineLive(), []);

    return qzArr.length !== 0 ? (
        <List style={{ paddingTop: 0 }}>
            {qzArr.map((qz, index) => {
                return (
                    <Box key={index}>
                        <ListItem style={{ paddingLeft: 0 }} key={index}>
                            Quiz {index + 1}
                            <ListItemSecondaryAction>
                                <ExamRoom
                                    quizId={qz}
                                    quizName={qzArrNames[index]}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                    </Box>
                );
            })}
        </List>
    ) : (
        <>No quiz associated yet by host.</>
    );
};

export default QuizRoom;
