import React, { useEffect, useState, useCallback } from 'react';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { getIcons } from './../../../helpers';
import DetailReport from './../DetailReport';
import { getParticipantLive } from './../../../firebase/firebaseService';

const DetailWrapper = ({ session }) => {
    const [openDetails, setOpenDetails] = useState(false);
    const [pList, setPlist] = useState([]);

    const getParicipantList = useCallback(async (sessionId) => {
        const snapShot = await getParticipantLive(sessionId).get();
        const pListTemp = [];
        snapShot.forEach((el) => {
            pListTemp.push(el.data());
        });
        setPlist(pListTemp);
    }, []);
    const handleOpenReport = async () => {
        await getParicipantList(session.sessionId);
        setOpenDetails(true);
    };

    return (
        <>
            <ListItemSecondaryAction
                style={{ right: 0 }}
                onClick={() => handleOpenReport()}
            >
                {getIcons('Details')}
            </ListItemSecondaryAction>
            <DetailReport
                session={session}
                open={openDetails}
                handleClose={() => setOpenDetails(false)}
                pList={pList}
            />
        </>
    );
};

export default DetailWrapper;
