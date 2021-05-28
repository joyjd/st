import React, { useEffect, useState, useRef, createRef } from 'react';
import Box from '@material-ui/core/Box';
import Btn from './../../../../utils/Button';
import TextField from '@material-ui/core/TextField';
import { getTitle, getTitleSm } from './../../../../helpers';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';

const QuizForm = ({ getFormDetails }) => {
    const idealAns = {
        ansOne: false,
        ansTwo: false,
        ansThree: false,
        ansFour: false,
    };

    const qtnRef = createRef();
    const errorRef = createRef();

    const [optionOne, setOptionOne] = useState('');
    const [optionTwo, setOptionTwo] = useState('');
    const [optionThree, setOptionThree] = useState('');
    const [optionFour, setOptionFour] = useState('');

    const [answer, setAnswer] = useState({
        ansOne: false,
        ansTwo: false,
        ansThree: false,
        ansFour: false,
    });

    const handleChangeAnser = (event) => {
        setAnswer({ ...idealAns, [event.target.name]: event.target.checked });
    };

    const handleQtnSubmit = () => {
        let errorMsg = '';
        if (qtnRef.current.value.trim() === '') {
            errorMsg = 'Question cannot be blank !';
        } else if (optionOne.trim() === '') {
            errorMsg = 'Option 1 cannot be blank !';
        } else if (optionTwo.trim() === '') {
            errorMsg = 'Option 2 cannot be blank !';
        } else if (optionThree.trim() === '') {
            errorMsg = 'Option 3 cannot be blank !';
        } else if (optionFour.trim() === '') {
            errorMsg = 'Option 4 cannot be blank !';
        } else if (JSON.stringify(answer) === JSON.stringify(idealAns)) {
            errorMsg = 'Correct answer must be selected !';
        } else {
            errorMsg = '';
        }
        errorRef.current.innerHTML = errorMsg;
        if (errorMsg === '') {
            const qtnDesc = {
                qtnId:
                    localStorage.getItem('employeeId') +
                    '_' +
                    new Date().getTime(),
                data: qtnRef.current.value.trim(),
                options: [optionOne, optionTwo, optionThree, optionFour],
                answerIndex: Object.keys(answer).findIndex(
                    (key) => answer[key]
                ),
            };
            getFormDetails(qtnDesc);
        }
    };

    const handleQtnCancel = () => {
        getFormDetails(null);
    };

    return (
        <Box>
            <form>
                {getTitleSm('New Question')}

                <TextField
                    id="filled-multiline-static"
                    label="Provide question description"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth={true}
                    inputRef={qtnRef}
                />
                {getTitle('Answer Options')}
                <List style={{ paddingTop: 0 }}>
                    <ListItem style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <TextField
                            id="filled-multiline-static"
                            label="Provide answer option 1"
                            multiline
                            rows={1}
                            variant="outlined"
                            fullWidth={true}
                            onChange={(e) =>
                                setOptionOne(e.target.value.trim())
                            }
                        />
                    </ListItem>
                    <ListItem style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <TextField
                            id="filled-multiline-static"
                            label="Provide answer option 2"
                            multiline
                            rows={1}
                            variant="outlined"
                            fullWidth={true}
                            onChange={(e) =>
                                setOptionTwo(e.target.value.trim())
                            }
                        />
                    </ListItem>

                    <ListItem style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <TextField
                            id="filled-multiline-static"
                            label="Provide answer option 3"
                            multiline
                            rows={1}
                            variant="outlined"
                            fullWidth={true}
                            onChange={(e) =>
                                setOptionThree(e.target.value.trim())
                            }
                        />
                    </ListItem>
                    <ListItem style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <TextField
                            id="filled-multiline-static"
                            label="Provide answer option 4"
                            multiline
                            rows={1}
                            variant="outlined"
                            fullWidth={true}
                            onChange={(e) =>
                                setOptionFour(e.target.value.trim())
                            }
                        />
                    </ListItem>
                </List>
                {getTitleSm('Designated Answer')}
                <List style={{ paddingTop: 0 }}>
                    {optionOne !== '' ? (
                        <ListItem style={{ paddingTop: 0 }}>
                            <Checkbox
                                name="ansOne"
                                checked={answer.ansOne}
                                onChange={handleChangeAnser}
                                color="primary"
                                inputProps={{
                                    'aria-label': 'secondary checkbox',
                                }}
                            />
                            {optionOne}
                        </ListItem>
                    ) : null}
                    {optionTwo !== '' ? (
                        <ListItem style={{ paddingTop: 0 }}>
                            <Checkbox
                                name="ansTwo"
                                checked={answer.ansTwo}
                                onChange={handleChangeAnser}
                                color="primary"
                                inputProps={{
                                    'aria-label': 'secondary checkbox',
                                }}
                            />
                            {optionTwo}
                        </ListItem>
                    ) : null}
                    {optionThree !== '' ? (
                        <ListItem style={{ paddingTop: 0 }}>
                            <Checkbox
                                name="ansThree"
                                checked={answer.ansThree}
                                onChange={handleChangeAnser}
                                color="primary"
                                inputProps={{
                                    'aria-label': 'secondary checkbox',
                                }}
                            />
                            {optionThree}
                        </ListItem>
                    ) : null}
                    {optionFour !== '' ? (
                        <ListItem style={{ paddingTop: 0 }}>
                            <Checkbox
                                name="ansFour"
                                checked={answer.ansFour}
                                onChange={handleChangeAnser}
                                color="primary"
                                inputProps={{
                                    'aria-label': 'secondary checkbox',
                                }}
                            />
                            {optionFour}
                        </ListItem>
                    ) : null}
                    <Divider />
                </List>
                <>
                    <span
                        ref={errorRef}
                        style={{ color: 'red', padding: 5 }}
                    ></span>
                    <Box display="flex" justifyContent="space-between">
                        <Btn
                            onClick={() => handleQtnSubmit()}
                            color="primary"
                            autoFocus
                            variant="contained"
                            size="small"
                        >
                            Submit Question
                        </Btn>
                        <Btn
                            onClick={() => handleQtnCancel()}
                            color="primary"
                            autoFocus
                            variant="contained"
                            size="small"
                        >
                            Cancel
                        </Btn>
                    </Box>
                </>
            </form>
        </Box>
    );
};

export default QuizForm;
