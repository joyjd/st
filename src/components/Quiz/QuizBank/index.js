import React, { useEffect, useState, createRef } from 'react';
import Box from '@material-ui/core/Box';
import Btn from './../../../utils/Button';
import QuizForm from './QuizForm';
import { getTitle, getTitleSm, getIcons } from './../../../helpers';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { addQuiz } from './../../../firebase/firebaseService';

const QuizBank = ({ handleClose }) => {
    const [showForm, setShowForm] = useState(false);
    const [showAdd, setShowAdd] = useState(true);
    const [questionList, setQuestionList] = useState([]);

    const quizNameRef = createRef();
    const quizDurationRef = createRef();
    const errorNameRef = createRef();
    const handleShowForm = (val) => {
        setShowForm(val);
        setShowAdd(!val);
    };

    const handleQuestionSubmit = (data) => {
        handleShowForm(false);
        if (data !== null) {
            setQuestionList([...questionList, data]);
        }
    };

    const submitQuizSet = async () => {
        if (quizNameRef.current.value.trim() === '') {
            errorNameRef.current.innerHTML = 'Quiz name cannot be blank !';
        } else if (quizDurationRef.current.value === '') {
            errorNameRef.current.innerHTML = 'Quiz duration cannot be blank !';
        } else {
            errorNameRef.current.innerHTML = '';
            const tempData = {
                quizID:
                    localStorage.getItem('employeeId') +
                    '_' +
                    new Date().getTime(),
                quizName: quizNameRef.current.value,
                quizOwnerId: localStorage.getItem('employeeId'),
                quizOwnerName: localStorage.getItem('employeeName'),
                quizDuration: quizDurationRef.current.value,
                qtnData: questionList,
            };

            await addQuiz({ ...tempData });
            handleClose();
        }
    };
    return (
        <Box pt={8}>
            {showAdd ? (
                <Card>
                    {questionList.map((dataObjQtn, index) => {
                        return (
                            <Box key={index} style={{ padding: 6 }}>
                                <Box
                                    display="flex"
                                    alignItems="flex-start"
                                    flexDirection="column"
                                >
                                    <Box display="flex" alignItems="flex-start">
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
                                        {dataObjQtn.options.map((op, ind) => (
                                            <ListItem
                                                key={ind}
                                                style={{ paddingTop: 0 }}
                                            >
                                                {getIcons(
                                                    ind !==
                                                        dataObjQtn.answerIndex
                                                        ? 'AnswerOption'
                                                        : 'RightAnswer',
                                                    {
                                                        fontSize: 'small',
                                                    }
                                                )}
                                                <span
                                                    style={{ paddingLeft: 6 }}
                                                >
                                                    {op}
                                                </span>
                                            </ListItem>
                                        ))}
                                        <Divider />
                                    </List>
                                </Box>
                            </Box>
                        );
                    })}
                </Card>
            ) : null}
            <Box>
                {showForm ? (
                    <QuizForm
                        getFormDetails={(data) => handleQuestionSubmit(data)}
                    />
                ) : null}
            </Box>

            <Box>
                {showAdd ? (
                    <>
                        {getTitleSm('Add a new Question')}
                        <Btn
                            onClick={() => handleShowForm(true)}
                            variant="outlined"
                            size="small"
                            color="primary"
                        >
                            + Add
                        </Btn>
                    </>
                ) : null}
            </Box>
            {questionList.length !== 0 && showAdd ? (
                <Box display="flex" flexDirection="column">
                    {getTitle('Complete Quiz')}
                    <form>
                        <List style={{ padding: 0 }}>
                            <ListItem
                                style={{
                                    paddingTop: 0,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                }}
                            >
                                <TextField
                                    id="filled-multiline-static"
                                    label="Provide a Quiz Name"
                                    multiline
                                    rows={2}
                                    variant="outlined"
                                    fullWidth={true}
                                    inputRef={quizNameRef}
                                />
                            </ListItem>
                            <ListItem style={{ padding: 0 }}>
                                <TextField
                                    id="filled-multiline-static"
                                    label="Provide quiz duration (in minutes)"
                                    type="number"
                                    variant="outlined"
                                    fullWidth={true}
                                    inputRef={quizDurationRef}
                                />
                            </ListItem>
                        </List>
                        <span
                            style={{ padding: 6, color: 'red' }}
                            ref={errorNameRef}
                        ></span>
                        <Box
                            display="flex"
                            flexDirection="column"
                            mx="auto"
                            justifyContent="center"
                            style={{ marginTop: 10 }}
                        >
                            <Btn
                                onClick={() => submitQuizSet()}
                                variant="contained"
                                size="large"
                                color="primary"
                            >
                                Submit Quiz
                            </Btn>
                        </Box>
                    </form>
                </Box>
            ) : null}
        </Box>
    );
};

export default QuizBank;
