import React, { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import { getTitle, getTitleSm, getIcons } from './../../../helpers';
import { getQuizDetail } from './../../../firebase/firebaseService';

const ViewStaticQuiz = ({ quizId, quizName }) => {
    const [openView, setOpenView] = useState(false);
    const [questionList, setQuestionList] = useState([]);

    const handleclose = () => {
        setOpenView(false);
    };
    const arrangeFullView = async (event, quizId) => {
        event.preventDefault();
        const quizView = await getQuizDetail(quizId);
        let qtnList = [];
        quizView.forEach((doc) => {
            const temp = doc.data().questionList;

            Object.keys(temp).forEach((dt, index) => {
                qtnList.push({
                    ...temp[dt],
                });
            });
        });
        setQuestionList(qtnList);
        setOpenView(true);
    };

    return (
        <>
            <Link href="#" onClick={(event) => arrangeFullView(event, quizId)}>
                {quizName}
            </Link>
            <Dialog fullScreen open={openView} onClose={handleclose}>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleclose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Box mt={8}>
                    <>
                        {questionList.map((dataObjQtn, index) => {
                            return (
                                <Box key={index} style={{ padding: 6 }}>
                                    <Box
                                        display="flex"
                                        alignItems="flex-start"
                                        flexDirection="column"
                                    >
                                        <Box
                                            display="flex"
                                            alignItems="flex-start"
                                        >
                                            {getIcons('Question', {
                                                fontSize: 'small',
                                            })}{' '}
                                            Question {index + 1}
                                        </Box>
                                        <Box
                                            style={{
                                                paddingLeft: 20,
                                                paddingBottom: 5,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {dataObjQtn.data}
                                            </span>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <List style={{ padding: 0 }}>
                                            {dataObjQtn.options.map(
                                                (op, ind) => (
                                                    <ListItem
                                                        key={ind}
                                                        style={{
                                                            paddingTop: 0,
                                                        }}
                                                    >
                                                        {getIcons(
                                                            ind !==
                                                                dataObjQtn.answerIndex
                                                                ? 'AnswerOption'
                                                                : 'RightAnswer',
                                                            {
                                                                fontSize:
                                                                    'small',
                                                            }
                                                        )}
                                                        <span
                                                            style={{
                                                                paddingLeft: 6,
                                                            }}
                                                        >
                                                            {op}
                                                        </span>
                                                    </ListItem>
                                                )
                                            )}
                                            <Divider />
                                        </List>
                                    </Box>
                                </Box>
                            );
                        })}
                    </>
                </Box>
            </Dialog>
        </>
    );
};

export default ViewStaticQuiz;
