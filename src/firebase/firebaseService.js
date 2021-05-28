import { set } from 'date-fns';
import { db } from './../config/firebase';
import firebase from 'firebase/app';
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
                quizes: [],
                quizNames: [],
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

export const addQuiz = async ({
    quizID,
    quizName,
    quizOwnerId,
    quizOwnerName,
    quizDuration,
    qtnData,
}) => {
    try {
        const tempData = {};

        qtnData.forEach(
            (qtn) =>
                (tempData[qtn.qtnId] = {
                    qtnId: qtn.qtnId,
                    data: qtn.data,
                    options: qtn.options,
                    answerIndex: qtn.answerIndex,
                })
        );

        const docData = {
            quizID: quizID,
            quizName: quizName,
            quizOwnerId: quizOwnerId,
            quizOwnerName: quizOwnerName,
            quizDuration: quizDuration,
            questionList: tempData,
        };

        await db.collection('QuizBank').doc(quizID).set(docData);
    } catch (err) {
        console.log(err);
    }
};

export const getQuizes = async (quizOwnerId) => {
    const docRef = await db
        .collection('QuizBank')
        .where('quizOwnerId', '==', quizOwnerId);

    return docRef;
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

export const getSessionReport = async (ownerId) => {
    const result = await db
        .collectionGroup('Sessions')
        .where('ownerId', '==', ownerId)
        .orderBy('startDate')
        .get();

    let sessionList = [];
    if (result !== undefined || result.length !== 0) {
        result.forEach((doc) => {
            sessionList.push(doc.data());
        });
    }

    return sessionList;
};

export const updateQuizList = async (user, sessionId, quizId, quizName) => {
    try {
        await db
            .collection('Users')
            .doc(user)
            .collection('Sessions')
            .doc(sessionId)
            .update({
                quizes: firebase.firestore.FieldValue.arrayUnion(
                    '' + quizId + ''
                ),
                quizNames: firebase.firestore.FieldValue.arrayUnion(
                    '' + quizName + ''
                ),
            });
    } catch (er) {
        console.log(er);
    }
};

export const getSingleQuizDetails = async (quizID) => {
    try {
        return await db.collection('QuizBank').doc(quizID).get();
    } catch (error) {
        console.log(error);
    }
};

export const addQuizScore = async (
    userId,
    userName,
    score,
    total,
    quizID,
    qzName,
    sessionId
) => {
    try {
        await db
            .collection('QuizBank')
            .doc(quizID)
            .collection('Contenders')
            .doc(userId)
            .set({
                score: score,
                total: total,
                userId: userId,
                userName: userName,
                qzName: qzName,
                quizID: quizID,
                sessionId: sessionId,
            });
    } catch (error) {
        console.log(error);
    }
};

export const getScoreLive = (quizID, sessionId) => {
    return db
        .collection('QuizBank')
        .doc(quizID)
        .collection('Contenders')
        .where('sessionId', '==', sessionId);
};

export const getIndividualQuizScore = async (userId) => {
    return await db
        .collectionGroup('Contenders')
        .where('userId', '==', userId)
        .get();
};

export const getQuizDetail = async (quizId) => {
    try {
        return await db
            .collection('QuizBank')
            .where('quizID', '==', quizId)
            .get();
    } catch (error) {
        console.log(error);
    }
};

export const getContendersBySession = async (sessionId) => {
    const result = await db
        .collectionGroup('Contenders')
        .where('sessionId', '==', sessionId)
        .get();

    let contenderList = [];
    if (result !== undefined || result.length !== 0) {
        result.forEach((doc) => {
            contenderList.push(doc.data());
        });
    }

    return contenderList;
};
