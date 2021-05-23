import React, { useCallback, useEffect, useState } from 'react';
import Btn from './../../../utils/Button';
import { updateSessionStatus } from './../../../firebase/firebaseService';

const HaltAttendance = () => {
    const [halt, setHalt] = useState('Stop');
    useEffect(() => {}, [halt]);

    const handleRequest = () => {
        updateSessionStatus(
            localStorage.getItem('sessionOwnerId'),
            localStorage.getItem('activeSessionId'),
            halt === 'Stop' ? 'expired' : 'active'
        );
        setHalt(halt === 'Stop' ? 'Start' : 'Stop');
    };

    return (
        <Btn
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => handleRequest()}
        >
            {halt} Attendance
        </Btn>
    );
};

export default HaltAttendance;
