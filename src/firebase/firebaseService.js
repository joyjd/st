import { db } from './../config/firebase';

/*
return true or false
*/
export const addEmployee = async (empId, empName) => {
    try {
        let frstrResp = await db.collection('Users').doc(empId).set({
            empName: empName,
            empId: empId,
        });
        console.log('firestore response', frstrResp);
        return true;
    } catch (error) {
        return false;
    }
};

/*
return undefined or data object
*/
export const checkEmployee = async (empId) => {
    const docRef = db.collection('Users').doc(empId);
    const res = await docRef.get();
    if (res.exists) {
        return res.data();
    } else {
        return undefined;
    }
};

export const addSession = async ({
    user,
    sessionId,
    sessionName,
    startDate,
    startTime,
    endDate,
    endTime,
    ownerName,
}) => {
    try {
        await db
            .collection('Users')
            .doc(user)
            .collection('Sessions')
            .doc(sessionId)
            .set({
                sessionId: sessionId,
                sessionName: sessionName,
                startDate: startDate,
                startTime: startTime,
                endDate: endDate,
                endTime: endTime,
                ownerName: ownerName,
                ownerId: user,
                status: 'off', //off,active,expired,closed
            });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const getSessions = async () => {
    const result = await db.collectionGroup('Sessions').get();
    let sessionList = [];

    result.forEach((doc) => {
        sessionList.push(doc.data());
    });
    return sessionList;
};

export const getSessionsLive = (todayDate) => {
    return db.collectionGroup('Sessions').where('startDate', '==', todayDate);
};

export const getParticipantLive = (sessionId) => {
    return db.collection('Register').doc(sessionId).collection('Participants');
};

export const getSessionStatusLive = (user, sessionId) => {
    return db
        .collection('Users')
        .doc(user)
        .collection('Sessions')
        .doc(sessionId);
};

export const updateSessionStatus = async (user, sessionId, status) => {
    try {
        await db
            .collection('Users')
            .doc(user)
            .collection('Sessions')
            .doc(sessionId)
            .update({
                status: status,
            });
    } catch (err) {
        console.log(err);
    }
};

export const markPresent = async (sessionId, user, empName) => {
    try {
        await db
            .collection('Register')
            .doc(sessionId)
            .collection('Participants')
            .doc(user)
            .set({
                empId: user,
                empName: empName,
            });
    } catch (err) {
        console.log(err);
    }
};

export const getSessionDetails = async (ownerId, sessionId) => {
    const docRef = await db
        .collection('Users')
        .doc(ownerId)
        .collection('Sessions')
        .doc(sessionId)
        .get();
    return docRef;
};

export const removeParticipant = async (sessionId, participantId) => {
    try {
        await db
            .collection('Register')
            .doc(sessionId)
            .collection('Participants')
            .doc(participantId)
            .delete();
    } catch (err) {
        console.log(err);
    }
};
