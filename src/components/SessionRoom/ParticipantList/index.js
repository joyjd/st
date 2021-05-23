import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { getTitle, getIcons, getTime } from './../../../helpers';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import {
    getParticipantLive,
    removeParticipant,
} from './../../../firebase/firebaseService';
import Modal from './../../../utils/Modal';

const ParticipantList = ({ sessionId }) => {
    const [participantsList, setParticipantList] = useState([]);
    const [openAttendance, setOpenAttendance] = useState(false);
    const [selectedParticipant, setSelectedParticipant] = useState();

    const getLiveParticipantsList = (sessionId) => {
        const liveData = getParticipantLive(sessionId);
        liveData.onSnapshot((querySnapShot) => {
            let participantList = [];

            querySnapShot.forEach((doc) => {
                participantList.push(doc.data());
            });
            setParticipantList(participantList);
        });
    };
    const handleMarkAbsent = (empId) => {
        setSelectedParticipant(empId);
        setOpenAttendance(true);
    };
    const markAbsent = async () => {
        await removeParticipant(sessionId, selectedParticipant);
        setOpenAttendance(false);
    };

    useEffect(() => getLiveParticipantsList(sessionId), [sessionId]);

    return (
        <>
            <List style={{ paddingTop: 0 }}>
                {participantsList.map((data, index) => {
                    return (
                        <Box key={index}>
                            <Divider />
                            <ListItem style={{ paddingLeft: 0 }}>
                                {data.empName}
                                <ListItemSecondaryAction
                                    onClick={() => handleMarkAbsent(data.empId)}
                                >
                                    <IconButton edge="end" aria-label="delete">
                                        {getIcons('RemoveUser', {
                                            color: 'error',
                                        })}
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider />
                        </Box>
                    );
                })}
            </List>
            <Modal
                headerTitle={'Mark Absent'}
                textCOnfirm={'Confirm'}
                textCancel={'Cancel'}
                handleConfirm={() => markAbsent()}
                handleClose={() => setOpenAttendance(false)}
                openModal={openAttendance}
            >
                <>
                    Are you sure you want to remove the participant from
                    session? This will mark the participant as absent.
                </>
            </Modal>
        </>
    );
};

export default ParticipantList;
