import React, { useState, useEffect, useCallback, useRef } from 'react';
import Modal from './../../../utils/Modal';
import Btn from './../../../utils/Button';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import Box from '@material-ui/core/Box';
import { addSession, getSessions } from './../../../firebase/firebaseService';

import {
    MuiPickersUtilsProvider,
    KeyboardDateTimePicker,
} from '@material-ui/pickers';

const ScheduleSession = () => {
    const [open, setOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const sessionNameRef = useRef();
    const errorRef = useRef();
    const closeModal = useCallback(() => {
        setOpen(false);
    }, []);
    const openModal = useCallback(() => {
        setOpen(true);
    }, []);
    const handleStartDate = useCallback((date) => {
        setStartDate(date);
    }, []);
    const handleEndDate = useCallback((date) => {
        setEndDate(date);
    }, []);
    const handleConfirmSession = async () => {
        //console.log(new Date(startDate.toDateString()).getTime());
        if (sessionNameRef.current.value.trim() === '') {
            errorRef.current.innerHTML = 'Session name cannot be blank !';
        } else if (
            new Date(startDate.toDateString()).getTime() >
            new Date(endDate.toDateString()).getTime()
        ) {
            errorRef.current.innerHTML =
                'Start date cannot be after end date !';
        } else if (
            new Date(startDate.toDateString()).getTime() < new Date().getTime()
        ) {
            errorRef.current.innerHTML = 'Start date cannot be a past date !';
        } else {
            errorRef.current.innerHTML = '';
            const formData = {
                user: localStorage.getItem('employeeId'),
                ownerName: localStorage.getItem('employeeName'),
                sessionId: '' + new Date().getTime() + '',
                startDate: new Date(startDate.toDateString()).getTime(),
                startTime: new Date(startDate).getTime(),
                endDate: new Date(endDate.toDateString()).getTime(),
                endTime: new Date(endDate).getTime(),
                sessionName: sessionNameRef.current.value,
            };

            await addSession({ ...formData });
            closeModal();
        }
    };

    return (
        <>
            <Btn
                onClick={() => openModal()}
                variant="contained"
                size="large"
                color="primary"
            >
                Schedule A Session
            </Btn>
            <Modal
                headerTitle={'Schedule Session'}
                textCOnfirm={'Schedule'}
                textCancel={'Cancel'}
                handleConfirm={handleConfirmSession}
                handleClose={closeModal}
                openModal={open}
            >
                <>
                    <form>
                        <Box display="flex" flexDirection="column">
                            <TextField
                                id="sessionName"
                                label="Session Name"
                                multiline
                                rows={4}
                                variant="outlined"
                                inputRef={sessionNameRef}
                            />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDateTimePicker
                                    margin="normal"
                                    id="startDate"
                                    label="Start Date & Time"
                                    value={startDate}
                                    onChange={handleStartDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                <KeyboardDateTimePicker
                                    margin="normal"
                                    id="endDate"
                                    label="End Date & Time"
                                    value={endDate}
                                    onChange={handleEndDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Box>
                        <div ref={errorRef} style={{ color: 'red' }}></div>
                    </form>
                </>
            </Modal>
        </>
    );
};

export default ScheduleSession;
