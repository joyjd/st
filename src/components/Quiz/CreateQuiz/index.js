import React, { useEffect, useState } from 'react';
import Btn from './../../../utils/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import QuizBank from './../QuizBank';

const CreateQuiz = () => {
    const [openQuestion, setOpenQuestion] = useState(false);
    const handleCloseQuestion = () => {
        setOpenQuestion(false);
    };

    const handleOpenQuestion = () => {
        setOpenQuestion(true);
    };
    return (
        <>
            <Btn
                onClick={() => handleOpenQuestion()}
                variant="contained"
                size="large"
                color="primary"
            >
                Create Quiz
            </Btn>

            <Dialog
                fullScreen
                open={openQuestion}
                onClose={() => handleCloseQuestion()}
            >
                <AppBar>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleCloseQuestion}
                            aria-label="close"
                        >
                            <CloseIcon /> Cancel Quiz
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <DialogContent>
                    <QuizBank handleClose={() => handleCloseQuestion()} />
                </DialogContent>
            </Dialog>
        </>
    );
};

export default CreateQuiz;
